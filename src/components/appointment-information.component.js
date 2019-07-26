import React, { Component } from 'react';
import { Store } from './store';
import rxProp from 'rxprop';

class AppointmentInformationComponent extends Component {
  render() {
    const { user } = this.props;
    if (!user.slotId) {
      return <></>;
    }
    return (
      <div className="selected-appointment-information">
        {user.fullName && (
          <div>
            <i className="icon icon-user" />
            <span className="selected-appointment-information-title">
              Fullname:
            </span>
            <span className="selected-appointment-information-value">
              {user.fullName}
            </span>
          </div>
        )}
        {user.email && (
          <div>
            <i className="icon icon-at-sign" />
            <span className="selected-appointment-information-title">
              Email:
            </span>
            <span className="selected-appointment-information-value">
              {user.email}
            </span>
          </div>
        )}
        {user.phoneNumber && (
          <div>
            <i className="icon icon-phone" />
            <span className="selected-appointment-information-title">
              Phone number:
            </span>
            <span className="selected-appointment-information-value">
              {user.phoneNumber}
            </span>
          </div>
        )}
        {user.slotDate && (
          <div>
            <i className="icon icon-calendar" />
            <span className="selected-appointment-information-title">
              Date:
            </span>
            <span className="selected-appointment-information-value">
              {user.slotDate}
            </span>
          </div>
        )}
        {user.slotTime && (
          <div>
            <i className="icon icon-clock" />
            <span className="selected-appointment-information-title">
              Time:
            </span>
            <span className="selected-appointment-information-value">
              {user.slotTime}
            </span>
          </div>
        )}
        {user.slotTime && (
          <div>
            <i className="icon icon-dollar-sign" />
            <span className="selected-appointment-information-title">
              Price:
            </span>
            <span className="selected-appointment-information-value">
              {user.slotPrice}
            </span>
          </div>
        )}
        {user.slotCapacity && (
          <div>
            <i className="icon icon-layers" />
            <span className="selected-appointment-information-title">
              Capacity:
            </span>
            <span>{user.slotCapacity}</span>
          </div>
        )}
      </div>
    );
  }
}

export default rxProp({ user: Store.appointment })(
  AppointmentInformationComponent
);
