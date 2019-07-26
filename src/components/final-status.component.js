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
        <div className="final-status-code-box">
          <span>Your reservation code: </span>
          <span>987654321</span>
          <br />
          <p />
          <img
            src="https://www.dummies.com/wp-content/uploads/324172.image0.jpg"
            alt="987654321"
          />
          <br />
        </div>
      </div>
    );
  }
}
