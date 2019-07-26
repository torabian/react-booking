import React, { Component } from 'react';

export class AlertComponent extends Component {
  alertIcon() {
    switch (this.props.type) {
      case 'success':
        return 'check';
      case 'warning':
        return 'alert-triangle';
      default:
        return '';
    }
  }

  render() {
    return (
      <div className={'alert alert-' + this.props.type}>
        <i className={'icon icon-' + this.alertIcon()} />
        <p>{this.props.children}</p>
      </div>
    );
  }
}
