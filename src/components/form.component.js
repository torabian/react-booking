import React, { Component } from 'react';
import { FormInputComponent } from './form-input.component';

export class FormComponent extends Component {
  render() {
    return (
      <div className="form-container">
        <div className="d-flex flex-wrap">
          <div className="flex-1">
            <FormInputComponent title="FULLNAME" icon="icon-user" />
          </div>
          <div className="flex-1">
            <FormInputComponent title="EMAIL" icon="icon-at-sign" />
          </div>
          <div className="flex-1">
            <FormInputComponent title="PHONE NUMBER" icon="icon-phone" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div className="flex-3">
            <FormInputComponent
              title="ADDRESS (optional)"
              icon="icon-map-pin"
            />
          </div>
          <div className="flex-1">
            <FormInputComponent title="ZIP CODE (optional)" icon="icon-map" />
          </div>
        </div>
        <div className="button-wrapper d-flex flex-end">
          <button className="btn btn-default">Previous Step</button>
          <button className="btn btn-primary">Next Step</button>
        </div>
      </div>
    );
  }
}
