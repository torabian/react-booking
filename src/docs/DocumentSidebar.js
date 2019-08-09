import React from 'react';
import { Link } from 'react-router-dom';

export class DocumentSidebar extends React.Component {
  closeMenu() {
    if (this.props.onClickClose) {
      this.props.onClickClose();
    }
  }

  render() {
    return (
      <div className="document-sidebar">
        <div className="document-sidebar-title-wrappper">
          <div className="document-title">React-booking &trade;</div>
          <button onClick={() => this.closeMenu()}>
            <i className="icon icon-close" />
            <span>CLOSE</span>
          </button>
        </div>

        <ul className="menu-items">
          <li>
            <Link onClick={() => this.closeMenu()} to="/">
              <i className="icon icon-getting-started" />
              Installation & Demo
            </Link>
          </li>
          <li>
            <Link onClick={() => this.closeMenu()} to="/on-submit-props">
              <i className="icon icon-sending-data" />
              Submit call back
            </Link>
          </li>
          <li>
            <Link onClick={() => this.closeMenu()} to="/payment-methods">
              <i className="icon icon-credit-card" />
              Payment methods
            </Link>
          </li>
          <li>
            <Link
              onClick={() => this.closeMenu()}
              to="/create-personal-booking-app"
            >
              <i className="icon icon-credit-card" />
              Create personal booking calendar
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
