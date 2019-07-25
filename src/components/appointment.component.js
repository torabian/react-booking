import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export class AppointmentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      selectedSlot: null
    };
    this.handleDatepicker = this.handleDatepicker.bind(this);
  }

  handleDatepicker(date) {
    this.setState({
      startDate: date
    });
  }

  handleSeletctedSlot(slot) {
    this.setState({
      selectedSlot: slot
    });
  }

  render() {
    const { campaign } = this.props;
    return (
      <div>
        <DatePicker
          inline
          selectsStart
          selected={this.state.startDate}
          includeDates={campaign.events.map(i => new Date(i.date))}
          onChange={this.handleDatepicker}
        />
        {this.state.startDate && (
          <div className="text-center">
            <h3>Active appointments</h3>

            <div className="appointments">
              {campaign.events
                .find(
                  x =>
                    x.date === moment(this.state.startDate).format('YYYY-MM-DD')
                )
                .slots.map(i => {
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
                        <button cla>Confirm</button>
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
