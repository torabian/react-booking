import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { setAppointment } from './store';

export class AppointmentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      selectedSlot: null
    };
  }

  handleDatepicker = date => {
    this.setState({
      startDate: date
    });
  };

  handleSeletctedSlot(slot) {
    this.setState({
      selectedSlot: slot
    });
  }

  confirmAppointment(date, slot) {
    const data = {
      slotId: slot.id,
      slotDate: date,
      slotTime: `${slot.from} - ${slot.to}`,
      slotPrice: '10 zl'
    };
    setAppointment(data);
    this.props.history.push('/personel-information');
  }

  render() {
    const { campaign } = this.props;
    const event = campaign.events.find(
      x => x.date === moment(this.state.startDate).format('YYYY-MM-DD')
    );
    const includeDates = campaign.events.map(i => new Date(i.date));

    return (
      <div>
        <DatePicker
          inline
          selectsStart
          selected={this.state.startDate}
          includeDates={includeDates}
          onChange={this.handleDatepicker}
        />
        {this.state.startDate && (
          <div className="text-center">
            <h3>Active appointments</h3>

            <div className="appointments">
              {event.slots.map(i => {
                return (
                  <div
                    onClick={() => this.handleSeletctedSlot(i.id)}
                    key={i.id}
                    className={
                      this.state.selectedSlot === i.id
                        ? 'appointment selected'
                        : 'appointment'
                    }
                  >
                    <div className="appointment-time">
                      <span>{i.from}</span> - <span>{i.to}</span>
                    </div>
                    <div className="appointment-confirm">
                      <button
                        onClick={() => this.confirmAppointment(event.date, i)}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
