import React, { Component } from 'react';
import PropType from 'prop-types';
import { AppointmentComponent } from './appointment.component';
import { getMockData } from './mock';
import { Route, Link, Switch } from 'react-router-dom';
import { FormComponent } from './form.component';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FinalStatusComponent } from './final-status.component';
import AppointmentInformationComponent from './appointment-information.component';

export class NavLink extends Component {
  content() {
    return (
      <>
        <i className={'icon ' + this.props.icon} />
        <span>{this.props.label}</span>
      </>
    );
  }

  render() {
    if (this.props.pathname === this.props.to) {
      return (
        <span className={this.props.pathname === this.props.to ? 'active' : ''}>
          {this.content()}
        </span>
      );
    }
    return <Link to={this.props.to}>{this.content()}</Link>;
  }
}

export class WidgetComponent extends Component {
  static propTypes = {
    title: PropType.string,
    description: PropType.string
  };
  static defaultProps = {
    title: 'Booking and reservation',
    description:
      'Please complete your booking here. Select an appointment and continue.'
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
    const { pathname } = this.props.location;
    return this.state.loaded === true ? (
      <div className="campagin-wrapper">
        <div className="navigation-path">
          <ul>
            <li>
              <NavLink
                label="Select Date"
                icon="icon-calendar"
                to="/"
                pathname={pathname}
              />
            </li>
            <li>
              <NavLink
                label="Attendance Information"
                icon="icon-user"
                to="/personel-information"
                pathname={pathname}
              />
            </li>
            <li>
              <i className="icon icon-credit-card" />
              <span>Payment Page</span>
            </li>
            <li>
              <NavLink
                label="Final Status"
                icon="icon-award"
                to="/final-status"
                pathname={pathname}
              />
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
        <AppointmentInformationComponent />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            timeout={300}
            classNames="fade"
          >
            <Switch location={this.props.location}>
              <Route
                path="/"
                exact
                component={props => (
                  <AppointmentComponent {...props} campaign={campaign} />
                )}
              />
              <Route
                path="/personel-information"
                exact
                component={props => <FormComponent {...props} />}
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
    ) : (
      <div>Please wait we are getting data from our servers ...</div>
    );
  }
}
