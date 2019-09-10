import React, { Component } from 'react';

export class FinalStatusComponent extends Component {
  render() {
    return (
      <div className="final-status-wrapper successed">
        <div className="final-box-wrapper">
          <span className="icon-wrapper">
            <i className="icon" />
          </span>
          <p>
            Congratulation! You reservation operations were successfully
            completed.
          </p>
        </div>
        {this.props.parentProps.reservationCode ? (
          <div className="final-status-code-box">
            <span>Your reservation code: </span>
            <p>987654321</p>

            <br />
          </div>
        ) : null}
      </div>
    );
  }
}
