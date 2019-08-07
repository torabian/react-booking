import React from 'react';
import { DocumentSidebar } from './DocumentSidebar';
import { GettingStarted } from './pages/GettingStarted';
import { HashRouter as Router, Route } from 'react-router-dom';
import { OnSubmit } from './pages/OnSubmit';
import { PaymentDoc } from './pages/PaymentDoc';
import { DocumentNavbar } from './DocumentNavbar';
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
    console.log('size:', this.state.windowSize);
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
              <Route exact path="/" component={GettingStarted} />
              <Route exact path="/on-submit-props" component={OnSubmit} />
              <Route exact path="/payment-methods" component={PaymentDoc} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
