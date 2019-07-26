import React, { Component } from 'react';
import { FormInputComponent } from './form-input.component';
import { setAppointment } from './store';

export class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        fullName: null,
        email: null,
        phoneNumber: null,
        address: null,
        zipCode: null
      }
    };
  }

  setFormState(name, value) {
    const { form } = this.state;
    form[name] = value;
    this.setState({
      form
    });
  }

  previousStep() {
    this.props.history.push('/');
  }

  nextStep() {
    setAppointment(this.state.form);
    this.props.history.push('/final-status');
  }

  render() {
    return (
      <div className="form-container">
        <div className="d-flex flex-wrap">
          <div className="flex-1">
            <FormInputComponent
              name="fullName"
              title="FULLNAME"
              icon="icon-user"
              onChange={e => this.setFormState('fullName', e)}
            />
          </div>
          <div className="flex-1">
            <FormInputComponent
              name="eamil"
              title="EMAIL"
              icon="icon-at-sign"
              onChange={e => this.setFormState('email', e)}
            />
          </div>
          <div className="flex-1">
            <FormInputComponent
              name="phoneNumber"
              title="PHONE NUMBER"
              icon="icon-phone"
              onChange={e => this.setFormState('phoneNumber', e)}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div className="flex-3">
            <FormInputComponent
              name="address"
              title="ADDRESS (optional)"
              icon="icon-map-pin"
              onChange={e => this.setFormState('address', e)}
            />
          </div>
          <div className="flex-1">
            <FormInputComponent
              name="zipCode"
              title="ZIP CODE (optional)"
              icon="icon-map"
              onChange={e => this.setFormState('zipCode', e)}
            />
          </div>
        </div>
        <div className="button-wrapper d-flex flex-end">
          <button
            onClick={() => this.previousStep()}
            className="btn btn-default"
          >
            Previous Step
          </button>
          <button onClick={() => this.nextStep()} className="btn btn-primary">
            Next Step
          </button>
        </div>
      </div>
    );
  }
}
