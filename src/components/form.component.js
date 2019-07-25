import React, { Component } from 'react';
import { FormInputComponent } from './form-input.component';

export class FormComponent extends Component {
  render() {
    return (
      <div className="form-container">
        <div className="d-flex flex-wrap">
          <div className="col-xs-4">
            <FormInputComponent title="FULLNAME" icon="icon-user" />
          </div>
          <div className="col-xs-4">
            <FormInputComponent title="EMAIL" icon="icon-at-sign" />
          </div>
          <div className="col-xs-4">
            <FormInputComponent title="PHONE NUMBER" icon="icon-at-sign" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div className="col-xs-8">
            <FormInputComponent
              title="ADDRESS (optional)"
              icon="icon-map-pin"
            />
          </div>
          <div className="col-xs-4">
            <FormInputComponent title="ZIP CODE (optional)" icon="icon-map" />
          </div>
        </div>
      </div>
    );
  }
}
