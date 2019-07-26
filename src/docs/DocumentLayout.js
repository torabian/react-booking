import React from 'react';
import { DocumentSidebar } from './DocumentSidebar';
import { GettingStarted } from './pages/GettingStarted';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { BusinessContact } from './pages/BusinessContact';
// import { BookingAndReservation } from './pages/Booking';

export class DocumentLayout extends React.Component {
  render() {
    return (
      <Router>
        <div className="document-layout">
          <DocumentSidebar />
          <div className="document-content">
            <Route exact path="/" component={GettingStarted} />
          </div>
        </div>
      </Router>
    );
  }
}
