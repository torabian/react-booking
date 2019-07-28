import React, { Component } from 'react';
import { FormInputComponent } from './form-input.component';
import { setAppointment } from './store';

export class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      response: null,
      form: {
        fullName: null,
        email: null,
        phoneNumber: null,
        address: null,
        zipCode: null
      }
    };
  }

  componentDidMount() {
    this.setState({
      response: this.props.response
    });
    if (this.props.response) {
      setAppointment(this.props.response.form);
      this.props.history.push('/final-status');
      this.setState({
        loading: false
      });
    }
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

  nextStep() {}

  onSubmit(e) {
    e && e.preventDefault && e.preventDefault();
    let validation = this.preValidator(this.state.form);

    if (validation.length) {
      this.setState({
        response: {
          error: {
            errors: validation
          }
        }
      });
    } else {
      this.setState({
        response: {}
      });
      if (this.props.onFormSubmit) {
        this.props.onFormSubmit(this.state.form);
        this.setState({
          loading: true
        });
      }
    }
  }

  preValidator(form) {
    const errors = [];
    if (!form.fullName) {
      errors.push({
        location: 'fullName',
        message: 'We need your full name.'
      });
    }

    if (!form.email) {
      errors.push({
        location: 'email',
        message: 'Please enter your email address.'
      });
    } else {
      if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.push({
          location: 'email',
          message:
            'We need your email address in correct form (my.name@gmail.com)'
        });
      }
    }

    if (!form.phoneNumber) {
      errors.push({
        location: 'phoneNumber',
        message: 'Please enter your phone number.'
      });
    } else {
      if (
        !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
          form.phoneNumber
        )
      ) {
        errors.push({
          location: 'phoneNumber',
          message:
            'Enter your phone number in correct format e.g +18182003004000'
        });
      }
    }
    return errors;
  }

  render() {
    return (
      <div className="form-container">
        {this.state.loading && (
          <div className="spinner-wrapper">
            <div class="spinner" />
            <p>Please wait ...</p>
          </div>
        )}
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="d-flex flex-wrap">
            <div className="flex-1">
              <FormInputComponent
                name="fullName"
                title="FULLNAME"
                icon="icon-user"
                response={this.state.response}
                onChange={e => this.setFormState('fullName', e)}
              />
            </div>
            <div className="flex-1">
              <FormInputComponent
                name="email"
                title="EMAIL"
                icon="icon-at-sign"
                response={this.state.response}
                onChange={e => this.setFormState('email', e)}
              />
            </div>
            <div className="flex-1">
              <FormInputComponent
                name="phoneNumber"
                title="PHONE NUMBER"
                icon="icon-phone"
                response={this.state.response}
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
                response={this.state.response}
                onChange={e => this.setFormState('address', e)}
              />
            </div>
            <div className="flex-1">
              <FormInputComponent
                name="zipCode"
                title="ZIP CODE (optional)"
                icon="icon-map"
                response={this.state.response}
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
            <button type="submit" className="btn btn-primary">
              Next Step
            </button>
          </div>
        </form>
      </div>
    );
  }
}
