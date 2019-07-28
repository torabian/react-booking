import React from 'react';
import { Link } from 'react-router-dom';

export class DocumentSidebar extends React.Component {
  render() {
    return (
      <div className="document-sidebar">
        <div className="document-title">React-booking &trade;</div>
        <ul className="menu-items">
          <li>
            <Link to="/">Quick Demo</Link>
          </li>
          <li>
            <Link to="/on-submit-props">Submit call back</Link>
          </li>
        </ul>
      </div>
    );
  }
}
