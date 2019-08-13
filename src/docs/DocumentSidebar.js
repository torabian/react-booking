import React from 'react';
import { NavLink } from 'react-router-dom';

function Empty(props) {
  return <a {...props} />;
}
export const PREFIX =
  window.location.host === 'pixelplux.github.io' ||
  window.location.hostname === 'localhost'
    ? ''
    : '/documentation';

export class MenuItem extends React.Component {
  render() {
    const TAG = this.props.to ? NavLink : Empty;
    return (
      <li>
        <TAG
          activeClassName="menu-item-active"
          className={!this.props.icon ? 'no-icon-link' : null}
          onClick={this.props.onClickClose}
          to={PREFIX + '/' + this.props.to}
        >
          {this.props.icon ? (
            <i className={'icon icon-' + this.props.icon} />
          ) : null}
          {this.props.content}
          {this.props.children ? (
            <ul className="menu-second-level">{this.props.children}</ul>
          ) : null}
        </TAG>
      </li>
    );
  }
}

export class DocumentSidebar extends React.Component {
  render() {
    return (
      <div className="document-sidebar">
        <div className="document-sidebar-title-wrappper">
          <div className="document-title">React-booking &trade;</div>
          <div className="document-subtitle">
            Booking and reservation solution
          </div>
          <button onClick={this.props.onClickClose}>
            <i className="icon icon-close" />
            <span>CLOSE</span>
          </button>
        </div>

        <ul className="menu-items">
          <MenuItem
            content="Getting started"
            icon="global"
            onClickClose={this.props.onClickClose}
          >
            <MenuItem
              content="How to use open-source vs enterprise"
              to="how-to-use-booking-and-reservation"
              onClickClose={this.props.onClickClose}
            />
            <MenuItem
              content="Install for ReactJs"
              to="getting-started-for-reactjs"
              onClickClose={this.props.onClickClose}
            />
          </MenuItem>

          <MenuItem
            content="Payment methods"
            to="payment-methods"
            icon="credit-card"
            onClickClose={this.props.onClickClose}
          />

          <MenuItem
            content="Guides and tutorials"
            icon="calendar"
            onClickClose={this.props.onClickClose}
          >
            <MenuItem
              content="Create personal booking calendar"
              to="create-personal-booking-app"
              onClickClose={this.props.onClickClose}
            />
          </MenuItem>

          <MenuItem
            content="Legal and terms"
            icon="award"
            onClickClose={this.props.onClickClose}
          >
            <MenuItem
              content="Terms and conditions"
              to="terms-and-conditions"
              onClickClose={this.props.onClickClose}
            />
            <MenuItem
              content="Privacy Policy"
              to="privacy-policy"
              onClickClose={this.props.onClickClose}
            />
          </MenuItem>
          <MenuItem
            content="Embed in your app"
            to="embed"
            onClickClose={this.props.onClickClose}
          />
        </ul>
      </div>
    );
  }
}
