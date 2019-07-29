import React, { Component } from 'react';
import {
  MemoryRouter,
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import PropType from 'prop-types';
import { AppointmentComponent } from './appointment.component';
import { getMockData } from './mock';
import { FormComponent } from './form.component';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FinalStatusComponent } from './final-status.component';
import AppointmentInformationComponent from './appointment-information.component';

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

export class WidgetComponent extends Component {
  static propTypes = {
    title: PropType.string,
    description: PropType.string,
    historyType: PropType.oneOf(['browser', 'memory']),
    paymentTab: PropType.bool,
    appointments: PropType.array
  };
  static defaultProps = {
    title: 'Booking and reservation',
    description:
      'Please complete your booking here. Select an appointment and continue.',
    historyType: 'memory',
    paymentTab: true,
    appointments: []
  };

  constructor(props) {
    super(props);
    this.state = {
      campaign: null,
      loaded: false,
      form: {
        fullname: null,
        email: null,
        phone: null,
        address: null,
        zipCode: null
      }
    };
  }

  async componentDidMount() {
    const data = await getMockData();
    this.setState({
      campaign: data,
      loaded: true
    });
  }

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
                    to="/"
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
              <AppointmentInformationComponent user={{}} />
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route
                      path="/"
                      exact
                      component={props => (
                        <AppointmentComponent
                          {...props}
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
                          onFormSubmit={this.props.onFormSubmit}
                          response={this.props.response}
                        />
                      )}
                    />
                    <Route
                      path="/final-status"
                      exact
                      component={FinalStatusComponent}
                    />
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
