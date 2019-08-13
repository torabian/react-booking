import React from 'react';
import ScrollMemory from 'react-router-scroll-memory';

import { DocumentSidebar } from './DocumentSidebar';
import { GettingStarted } from './pages/GettingStarted';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';
import { OnSubmit } from './pages/OnSubmit';
import { PaymentDoc } from './pages/PaymentDoc';
import { DocumentNavbar } from './DocumentNavbar';
import { CreateAccountDoc } from './pages/CreateAccount';
import { TermsOfServicesDoc } from './pages/TermsOfServices';
import { PrivacyPolicyDoc } from './pages/PrivacyPolicy';
import { EmbedDoc } from './pages/Embed';
import { HowToUse } from './pages/HowToUse';

const PREFIX =
  window.location.host === 'pixelplux.github.io' ||
  window.location.hostname === 'localhost'
    ? ''
    : '/documentation';

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
        <ScrollMemory />

        <div
          className={
            'document-layout' + (this.state.activeMenu ? ' active' : '')
          }
        >
          <DocumentSidebar onClickClose={() => this.toggleMenu(false)} />
          <div className="document-content-wrapper">
            <DocumentNavbar onClickMenu={e => this.toggleMenu(e)} />
            <div className="document-content">
              {/* <Redirect
                exact
                from={PREFIX + '/'}
                to={PREFIX + '/getting-started-for-reactjs'}
              /> */}
              <Route
                exact
                path={PREFIX + '/how-to-use-booking-and-reservation'}
                component={HowToUse}
              />

              <Route
                exact
                path={PREFIX + '/getting-started-for-reactjs'}
                component={GettingStarted}
              />
              <Route
                exact
                path={PREFIX + '/on-submit-props'}
                component={OnSubmit}
              />
              <Route
                exact
                path={PREFIX + '/payment-methods'}
                component={PaymentDoc}
              />
              <Route
                exact
                path={PREFIX + '/privacy-policy'}
                component={PrivacyPolicyDoc}
              />

              <Route exact path={PREFIX + '/embed'} component={EmbedDoc} />

              <Route
                exact
                path={PREFIX + '/terms-and-conditions'}
                component={TermsOfServicesDoc}
              />
              <Route
                exact
                path={PREFIX + '/create-personal-booking-app'}
                component={CreateAccountDoc}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
