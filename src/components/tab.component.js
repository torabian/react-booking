import React, { Component } from 'react';

export class TabComponent extends Component {
  render() {
    return (
      <div className="navigation-path">
        <ul>
          <li className="active">
            <i className="icon icon-calendar" />
            <span>Select Calendar</span>
          </li>
          <li className="active">
            <i className="icon icon-user" />
            <span>Personel Information</span>
          </li>
          <li>
            <i className="icon icon-credit-card" />
            <span>Payment Page</span>
          </li>
          <li>
            <i className="icon icon-award" />
            <span>Final Status</span>
          </li>
        </ul>
      </div>
    );
  }
}
