import React from 'react';
import { DocumentSidebar } from './DocumentSidebar';
import { GettingStarted } from './pages/GettingStarted';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';
import { OnSubmit } from './pages/OnSubmit';
import { PaymentDoc } from './pages/PaymentDoc';
import { DocumentNavbar } from './DocumentNavbar';
import { CreateAccountDoc } from './pages/CreateAccount';
import { TermsOfServicesDoc } from './pages/TermsOfServices';
import { PrivacyPolicyDoc } from './pages/PrivacyPolicy';
// import { BusinessContact } from './pages/BusinessContact';
// import { BookingAndReservation } from './pages/Booking';

export class DocumentLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false,
      windowSize: 0
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = e => {
    this.setState({
      windowSize: window.innerWidth
    });
    if (window.innerWidth > 992) {
      this.setState({
        activeMenu: false
      });
    }
  };

  toggleMenu(status) {
    this.setState({
      activeMenu: status
    });
  }

  render() {
    const Router =
      window.location.host === 'pixelplux.github.io'
        ? HashRouter
        : BrowserRouter;

    return (
      <Router>
        <div
          className={
            'document-layout' + (this.state.activeMenu ? ' active' : '')
          }
        >
          <DocumentSidebar onClickClose={() => this.toggleMenu(false)} />
          <div className="document-content-wrapper">
            <DocumentNavbar onClickMenu={e => this.toggleMenu(e)} />
            <div className="document-content">
              <Route exact path="/documentation/" component={GettingStarted} />
              <Route
                exact
                path="/documentation/on-submit-props"
                component={OnSubmit}
              />
              <Route
                exact
                path="/documentation/payment-methods"
                component={PaymentDoc}
              />
              <Route
                exact
                path="/documentation/privacy-policy"
                component={PrivacyPolicyDoc}
              />

              <Route
                exact
                path="/documentation/terms-and-conditions"
                component={TermsOfServicesDoc}
              />
              <Route
                exact
                path="/documentation/create-personal-booking-app"
                component={CreateAccountDoc}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}