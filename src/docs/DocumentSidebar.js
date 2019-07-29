import React from 'react';
import { Link } from 'react-router-dom';

export class DocumentSidebar extends React.Component {
  render() {
    return (
      <div className="document-sidebar">
        <div className="document-title">React-booking &trade;</div>
        <ul className="menu-items">
          <li>
            <Link to="/">Installation & Demo</Link>
          </li>
          <li>
            <Link to="/on-submit-props">Submit call back</Link>
          </li>
          <li>
            <Link to="/payment-methods">Payment methods</Link>
          </li>
        </ul>
      </div>
    );
  }
}
