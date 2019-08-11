import React from 'react';
import { Link } from 'react-router-dom';

const PREFIX =
  window.location.host === 'pixelplux.github.io' ||
  window.location.hostname === 'localhost'
    ? ''
    : '/documentation';

export class MenuItem extends React.Component {
  render() {
    return (
      <li>
        <Link
          onClick={this.props.onClickClose}
          to={PREFIX + '/' + this.props.to}
        >
          <i className="icon icon-credit-card" />
          {this.props.content}
        </Link>
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
          <button onClick={this.props.onClickClose}>
            <i className="icon icon-close" />
            <span>CLOSE</span>
          </button>
        </div>

        <ul className="menu-items">
          <li>
            <Link onClick={this.props.onClickClose} to={PREFIX + '/'}>
              <i className="icon icon-getting-started" />
              Installation & Demo
            </Link>
          </li>
          <li>
            <Link
              onClick={this.props.onClickClose}
              to={PREFIX + '/on-submit-props'}
            >
              <i className="icon icon-sending-data" />
              Submit call back
            </Link>
          </li>
          <li>
            <Link
              onClick={this.props.onClickClose}
              to={PREFIX + '/payment-methods'}
            >
              <i className="icon icon-credit-card" />
              Payment methods
            </Link>
          </li>
          <li>
            <Link
              onClick={this.props.onClickClose}
              to={PREFIX + '/create-personal-booking-app'}
            >
              <i className="icon icon-credit-card" />
              Create personal booking calendar
            </Link>
          </li>
          <li>
            <Link
              onClick={this.props.onClickClose}
              to={PREFIX + '/terms-and-conditions'}
            >
              <i className="icon icon-credit-card" />
              Terms and conditions
            </Link>
          </li>
          <MenuItem
            content="Privacy Policy"
            to="privacy-policy"
            onClickClose={this.props.onClickClose}
          />
        </ul>
      </div>
    );
  }
}
