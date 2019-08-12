import React, { Component } from 'react';
import { FormInputComponent } from './form-input.component';
import { setAppointment, getAppointment } from './store';

export class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      response: null,
      form: {
        module_id: this.props.module_id,
        customer_fullname: null,
        customer_email: null,
        customer_phone: null,
        customer_address: null,
        customer_zipCode: null,
        customer_location: null,
        customer_message: null
      }
    };
  }

  componentDidMount() {
    this.setState({
      response: this.props.response
    });
    if (this.props.response) {
      setAppointment(
        this.props.response.form.module_id,
        this.props.response.form
      );
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
        const store_data = getAppointment(this.props.module_id);
        const form_data = {
          ...this.state.form,
          id: store_data.slotId
        };
        this.props.onFormSubmit(form_data);
        this.setState({
          loading: true
        });
      }
    }
  }

  preValidator(form) {
    const errors = [];
    if (!form.customer_fullname) {
      errors.push({
        location: 'customer_fullname',
        message: 'We need your full name.'
      });
    }

    if (!form.customer_email) {
      errors.push({
        location: 'customer_email',
        message: 'Please enter your email address.'
      });
    } else {
      if (!/\S+@\S+\.\S+/.test(form.customer_email)) {
        errors.push({
          location: 'customer_email',
          message:
            'We need your email address in correct form (my.name@gmail.com)'
        });
      }
    }

    if (!form.customer_phone) {
      errors.push({
        location: 'customer_phone',
        message: 'Please enter your phone number.'
      });
    } else {
      if (
        !/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im.test(
          form.customer_phone
        )
      ) {
        errors.push({
          location: 'customer_phone',
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
                name="customer_fullname"
                title="FULLNAME"
                icon="icon-user"
                response={this.state.response}
                onChange={e => this.setFormState('customer_fullname', e)}
              />
            </div>
            <div className="flex-1">
              <FormInputComponent
                name="customer_email"
                title="EMAIL"
                icon="icon-at-sign"
                response={this.state.response}
                onChange={e => this.setFormState('customer_email', e)}
              />
            </div>
            <div className="flex-1">
              <FormInputComponent
                name="customer_phone"
                title="PHONE NUMBER"
                icon="icon-phone"
                response={this.state.response}
                onChange={e => this.setFormState('customer_phone', e)}
              />
            </div>
          </div>
          <div className="d-flex flex-wrap">
            <div className="flex-3">
              <FormInputComponent
                name="customer_address"
                title="ADDRESS (optional)"
                icon="icon-map-pin"
                response={this.state.response}
                onChange={e => this.setFormState('customer_address', e)}
              />
            </div>
            <div className="flex-1">
              <FormInputComponent
                name="customer_zipCode"
                title="ZIP CODE (optional)"
                icon="icon-map"
                response={this.state.response}
                onChange={e => this.setFormState('customer_zipCode', e)}
              />
            </div>
          </div>
          <div className="button-wrapper d-flex flex-end">
            <input
              type="button"
              onClick={() => this.previousStep()}
              className="btn btn-default"
              value="Previous Step"
            />

            <button type="submit" className="btn btn-primary">
              Next Step
            </button>
          </div>
        </form>
      </div>
    );
  }
}
