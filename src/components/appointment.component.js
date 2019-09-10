import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { setAppointment } from './store';

export class AppointmentComponent extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      data: null,
      selectedSlot: null
    };
  }

  scrollToEndAnimated() {
    setTimeout(() => {
      const { top, height } = document
        .getElementsByClassName('react-booking-calendar-screen')[0]
        .getBoundingClientRect();

      const end = top + window.scrollY + height - window.innerHeight;
      window.scrollTo({
        top: end,
        left: 0,
        behavior: 'smooth'
      });
    }, 500);
  }

  scrollToEnd() {
    setTimeout(() => {
      document
        .getElementsByClassName('react-booking-calendar-screen')[0]
        .scrollIntoView();
    }, 500);
  }

  handleDatepicker = date => {
    if (this.props.parentProps.scrollAdjust === 'native') {
      this.scrollToEnd();
    }
    if (this.props.parentProps.scrollAdjust === 'smooth') {
      this.scrollToEndAnimated();
    }
    this.setState({
      startDate: date
    });
  };

  handleSeletctedSlot(slot) {
    this.setState({
      selectedSlot: slot
    });
  }

  confirmAppointment(slot) {
    const data = {
      slotId: slot.id,
      slotDate: slot.start,
      slotTime: `${moment(slot.start).format('HH:mm')} - ${moment(
        slot.end
      ).format('HH:mm')}`,
      slotPrice: slot.price ? `${slot.price.amount} ${slot.price.curr}` : null
    };
    setAppointment(this.props.module_id, data);

    const { parentProps } = this.props;
    if (parentProps.formMode === 'skip') {
      this.props.parentProps.onFormSubmit({
        id: slot.id
      });
      return this.props.history.push('/final-status');
    }
    this.props.history.push('/personel-information');
  }

  render() {
    const { appointments } = this.props;
    const { startDate } = this.state;

    const includeDates = appointments.map(app => app.start);
    const appointmentsInDate = appointments.filter(app =>
      moment(app.start).isSame(moment(startDate), 'date')
    );

    return (
      <div className="react-booking-calendar-screen">
        <DatePicker
          inline
          selectsStart
          selected={this.state.startDate}
          includeDates={includeDates}
          onChange={this.handleDatepicker}
        />
        {this.state.startDate && (
          <div className="text-center react-booking-appointments">
            <h3>Active appointments</h3>

            <div className="appointments">
              {appointmentsInDate.map(i => {
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
                      <span>{moment(i.start).format('HH:mm')}</span> -{' '}
                      <span>{moment(i.end).format('HH:mm')}</span>
                    </div>
                    <div className="appointment-confirm">
                      <button onClick={() => this.confirmAppointment(i)}>
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
