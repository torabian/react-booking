import React, { Component } from 'react';
import { Store } from './store';
import moment from 'moment';
import { rxProp } from './rxprop';

class AppointmentInformationComponent extends Component {
  render() {
    let { user } = this.props;
    user = user.find(x => x.module_id === this.props.module_id);
    if (!user || !user.slotId) {
      return <></>;
    }
    return (
      <div className="selected-appointment-information">
        {user.customer_fullname && (
          <div>
            <i className="icon icon-user" />
            <span className="selected-appointment-information-title">
              Fullname:
            </span>
            <span className="selected-appointment-information-value">
              {user.customer_fullname}
            </span>
          </div>
        )}
        {user.customer_email && (
          <div>
            <i className="icon icon-at-sign" />
            <span className="selected-appointment-information-title">
              Email:
            </span>
            <span className="selected-appointment-information-value">
              {user.customer_email}
            </span>
          </div>
        )}
        {user.customer_phone && (
          <div>
            <i className="icon icon-phone" />
            <span className="selected-appointment-information-title">
              Phone number:
            </span>
            <span className="selected-appointment-information-value">
              {user.customer_phone}
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
              {moment(user.slotDate).format('YYYY/MM/DD')}
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
        {user.slotPrice && (
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
