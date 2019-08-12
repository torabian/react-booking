import React from 'react';
import { ReactBooking } from './react-booking';
import { GetTermPublic, ConfirmBooking } from '../../pages';
import { GetEntity } from '../../pages/pixelplux-common';

export class ReactBookingEnterprise extends React.Component {
  state = {
    response: null,
    term: null
  };

  async componentDidMount() {
    const id = this.props.campaignId;

    let term = null;
    if (id) {
      try {
        const res = await GetTermPublic(id);
        if (GetEntity(res)) {
          term = GetEntity(res);
        }
        for (var slot of term.slots) {
          slot.start = new Date(slot.start);
          slot.end = new Date(slot.end);
        }
      } catch (error) {}
    }
    this.setState({
      term
    });
  }

  async sendRequestToServer(e) {
    try {
      const { campaignId } = this.props;
      const data = {
        ...e,
        term: campaignId
      };
      const response = await ConfirmBooking(data);
      if (!response) {
        alert('You are not connected to the internet.');
        this.setState({
          response: null
        });
      }
      response.form = e;
      this.setState({
        response
      });
    } catch (error) {
      alert('Sorry there was an error. Try again');
      this.setState({
        response: null
      });
      console.error(error);
    }
  }

  render() {
    const { term } = this.state;
    if (!term) {
      return '...';
    }
    return (
      <ReactBooking
        title={term.term.title}
        description={term.term.description}
        onFormSubmit={e => this.sendRequestToServer(e)}
        response={this.state.response}
        paymentTab={false}
        appointments={term.slots}
      />
    );
  }
}
