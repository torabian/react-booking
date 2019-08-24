import React from 'react';
import { NavLink } from 'react-router-dom';
import Link from 'next/link';
import { PREFIX } from './project';
import { isNextJs } from './DocumentCommon';

function Empty(props) {
  return (
    <a activeClassName={props.activeClassName} className={props.className}>
      {props.children}
    </a>
  );
}

export class MenuItem extends React.Component {
  render() {
    let TAG = this.props.path ? NavLink : Empty;

    if (isNextJs && this.props.path) {
      TAG = Link;
    }
    return (
      <li>
        <TAG
          activeClassName="menu-item-active"
          className={!this.props.icon ? 'no-icon-link' : null}
          onClick={this.props.onClickClose}
          to={PREFIX + '/' + this.props.path}
          as={'/documentation/' + this.props.path}
          prefetch
          href={{
            acceptLang: 'en',
            pathname: '/documentation',
            query: { id: this.props.path }
          }}
        >
          <a>
            {this.props.icon ? (
              <i className={'icon icon-' + this.props.icon} />
            ) : null}
            {this.props.label}
            {this.props.children ? (
              <ul className="menu-second-level">{this.props.children}</ul>
            ) : null}
          </a>
        </TAG>
      </li>
    );
  }
}
