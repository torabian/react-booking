import React from 'react';
import { NavLink } from 'react-router-dom';
import Link from 'next/link';
import { PREFIX } from './project';

function Empty(props) {
  return <a {...props}>{props.children}</a>;
}

export class MenuItem extends React.Component {
  render() {
    let TAG = this.props.path ? NavLink : Empty;
    const isNextJs = process.env.PUBLIC_URL === undefined;
    if (isNextJs) {
      TAG = Link;
    }
    return (
      <li>
        <TAG
          activeClassName="menu-item-active"
          className={!this.props.icon ? 'no-icon-link' : null}
          onClick={this.props.onClickClose}
          to={PREFIX + '/' + this.props.path}
          href={PREFIX + '/' + this.props.path}
        >
          <>
            {this.props.icon ? (
              <i className={'icon icon-' + this.props.icon} />
            ) : null}
            {this.props.label}
            {this.props.children ? (
              <ul className="menu-second-level">{this.props.children}</ul>
            ) : null}
          </>
        </TAG>
      </li>
    );
  }
}
