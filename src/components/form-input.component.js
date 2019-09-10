import React, { Component } from 'react';

export class FormInputComponent extends Component {
  findErrorMessage(field, response) {
    if (response && response.error && response.error.errors) {
      const $field = response.error.errors.find(
        error => error.location === field
      );
      if ($field) {
        return $field.message;
      }
    }
    return false;
  }

  get errorMessage() {
    const { response, name } = this.props;
    return this.findErrorMessage(name, response);
  }

  render() {
    const { title, placeholder, icon } = this.props;
    return (
      <div
        className={
          'booking-widget-input-group' +
          (this.errorMessage || this.props.isValid ? ' warning' : '')
        }
      >
        <div className="booking-widget-input-title">
          {icon && icon.length > 0 && <i className={'icon ' + icon} />}
          {title}
        </div>
        <div>
          <input
            {...this.props}
            className="booking-widget-input"
            type="text"
            placeholder={placeholder}
            onInput={e => this.props.onChange(e.target.value)}
          />
        </div>
        {this.errorMessage && <span>{this.errorMessage}</span>}
      </div>
    );
  }
}
