import React, { Component } from 'react';
import {
  MemoryRouter,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import PropType from 'prop-types';
import { AppointmentComponent } from './appointment.component';
import { getMockData } from './mock';
import { FormComponent } from './form.component';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FinalStatusComponent } from './final-status.component';
import AppointmentInformationComponent from './appointment-information.component';
import { PaymentComponent } from './payment.component';
import { addAppointment } from './store';

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export class NavLink extends Component {
  content() {
    return (
      <>
        {this.props.backUrl && (
          <Link className="back-btn" to={this.props.backUrl}>
            <i className="icon icon-chevron-left" />
          </Link>
        )}
        <i className={'icon ' + this.props.icon} />
        <span>{this.props.label}</span>
      </>
    );
  }

  render() {
    if (this.props.pathname === this.props.to) {
      return (
        <li className={this.props.pathname === this.props.to ? 'active' : ''}>
          <span>{this.content()}</span>
        </li>
      );
    }
    return (
      <li>
        <Link to={this.props.to}>{this.content()}</Link>
      </li>
    );
  }
}

export class ReactBooking extends Component {
  static propTypes = {
    title: PropType.string,
    description: PropType.string,
    historyType: PropType.oneOf(['browser', 'memory']),
    paymentTab: PropType.bool,
    appointments: PropType.array,
    visibleTab: PropType.string
  };

  static defaultProps = {
    title: 'Booking and reservation',
    description:
      'Please complete your booking here. Select an appointment and continue.',
    historyType: 'memory',
    paymentTab: true,
    appointments: [],
    visibleTab: 'datepicker'
  };

  constructor(props) {
    super(props);
    this.state = {
      module_id: uuidv4(),
      campaign: null,
      loaded: false,
      form: {
        customer_fullname: null,
        customer_email: null,
        customer_phone: null,
        customer_address: null,
        customer_zipCode: null,
        customer_location: null,
        customer_message: null
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  async componentDidMount() {
    const data = await getMockData();
    this.setState({
      campaign: data,
      loaded: true
    });
  }

  componentWillMount() {
    addAppointment({
      module_id: this.state.module_id,
      slotId: null,
      slotDate: null,
      slotTime: null,
      slotPrice: null,
      slotCapacity: null,
      customer_fullname: null,
      customer_email: null,
      customer_phone: null,
      customer_address: null,
      customer_zipCode: null,
      customer_location: null,
      customer_message: null
    });
  }

  componentWillUnmount() {}

  render() {
    const { campaign } = this.state;

    const Router =
      this.props.historyType === 'memory' ? MemoryRouter : BrowserRouter;

    return this.state.loaded === true ? (
      <Router>
        <Route
          exact
          render={({ location }) => (
            <div className="campagin-wrapper">
              <div className="navigation-path">
                <ul>
                  <NavLink
                    label="Select Date"
                    icon="icon-calendar"
                    to="/datepicker"
                    pathname={location.pathname}
                  />
                  <NavLink
                    label="Attendance Information"
                    icon="icon-user"
                    to="/personel-information"
                    backUrl="/"
                    pathname={location.pathname}
                  />
                  {this.props.paymentTab ? (
                    <NavLink
                      label="Payment Page"
                      icon="icon icon-credit-card"
                      to=""
                      pathname={location.pathname}
                    />
                  ) : null}
                  <NavLink
                    label="Final Status"
                    icon="icon-award"
                    to="/final-status"
                    pathname={location.pathname}
                  />
                </ul>
              </div>

              <div className="text-center">
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
              </div>
              <AppointmentInformationComponent
                module_id={this.state.module_id}
                user={{}}
              />
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route
                      path="/datepicker"
                      exact
                      component={props => (
                        <AppointmentComponent
                          {...props}
                          module_id={this.state.module_id}
                          campaign={campaign}
                          appointments={this.props.appointments}
                        />
                      )}
                    />
                    <Route
                      path="/personel-information"
                      exact
                      component={props => (
                        <FormComponent
                          {...props}
                          module_id={this.state.module_id}
                          onFormSubmit={this.props.onFormSubmit}
                          response={this.props.response}
                        />
                      )}
                    />

                    <Route path="/payment" exact component={PaymentComponent} />

                    <Route
                      path="/final-status"
                      exact
                      component={FinalStatusComponent}
                    />

                    <Redirect from="/" to={'/' + this.props.visibleTab} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        />
      </Router>
    ) : (
      <div>Please wait we are getting data from our servers ...</div>
    );
  }
}
