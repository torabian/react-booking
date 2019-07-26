import React, { Component } from 'react';
import { AppointmentComponent } from './appointment.component';
import { getMockData } from './mock';
import { Route, Link, Switch } from 'react-router-dom';
import { FormComponent } from './form.component';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FinalStatusComponent } from './final-status.component';

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
          <h1>{campaign.title}</h1>
          <p>{campaign.description}</p>
        </div>
        <div className="selected-appointment-information">
          <div>
            <i className="icon icon-user" />
            <span className="selected-appointment-information-title">
              Fullname:
            </span>
            <span className="selected-appointment-information-value">
              Yousef Sami
            </span>
          </div>
          <div>
            <i className="icon icon-at-sign" />
            <span className="selected-appointment-information-title">
              Email:
            </span>
            <span className="selected-appointment-information-value">
              nsocial72@gmail.com
            </span>
          </div>
          <div>
            <i className="icon icon-phone" />
            <span className="selected-appointment-information-title">
              Phone number:
            </span>
            <span className="selected-appointment-information-value">
              00989121234567
            </span>
          </div>
          <div>
            <i className="icon icon-calendar" />
            <span className="selected-appointment-information-title">
              Date:
            </span>
            <span className="selected-appointment-information-value">
              2014-02-15
            </span>
          </div>
          <div>
            <i className="icon icon-clock" />
            <span className="selected-appointment-information-title">
              Time:
            </span>
            <span className="selected-appointment-information-value">
              18:30
            </span>
          </div>
          <div>
            <i className="icon icon-dollar-sign" />
            <span className="selected-appointment-information-title">
              Price:
            </span>
            <span className="selected-appointment-information-value">
              150 Zl
            </span>
          </div>
          <div>
            <i className="icon icon-layers" />
            <span className="selected-appointment-information-title">
              Capacity:
            </span>
            <span>2</span>
          </div>
        </div>
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
                component={() => <AppointmentComponent campaign={campaign} />}
              />
              <Route
                path="/personel-information"
                exact
                component={FormComponent}
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
