import React, { Component } from 'react';

export class FormInputComponent extends Component {
  render() {
    const { title, placeholder, icon } = this.props;
    return (
      <div className="booking-widget-input-group">
        <div className="booking-widget-input-title">
          {icon.length > 0 && <i className={'icon ' + icon} />}
          {title}
        </div>
        <div>
          <input
            className="booking-widget-input"
            type="text"
            placeholder={placeholder}
          />
        </div>
        {false && <span>This field is required</span>}
      </div>
    );
  }
}
