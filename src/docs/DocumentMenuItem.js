import React from 'react';
import { NavLink } from 'react-router-dom';
import { PREFIX } from './project';

function Empty(props) {
  return <a {...props}>{props.children}</a>;
}

export class MenuItem extends React.Component {
  render() {
    const TAG = this.props.path ? NavLink : Empty;
    return (
      <li>
        <TAG
          activeClassName="menu-item-active"
          className={!this.props.icon ? 'no-icon-link' : null}
          onClick={this.props.onClickClose}
          to={PREFIX + '/' + this.props.path}
        >
          {this.props.icon ? (
            <i className={'icon icon-' + this.props.icon} />
          ) : null}
          {this.props.label}
          {this.props.children ? (
            <ul className="menu-second-level">{this.props.children}</ul>
          ) : null}
        </TAG>
      </li>
    );
  }
}
