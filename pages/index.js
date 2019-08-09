/**
 * THIS FILE WON'T BE BACKWARD COMPATIBLE, neither should be used for any other purposes such as
 * redistributing. only to be used for internal team in PixelPlux Eu & Middle east
 * It will be served on our domain for our calendar service (booking and reservation)
 * https://pixelplux.com/en/calendar
 */

import React from 'react';
import { acceptLang, initialProps, GetEntity } from './pixelplux-common';
import { ReactBooking } from '../src/components/react-booking';
import { get, post } from './network';

export async function GetTermPublic(id) {
  return get(`/api/fn-booking/appointments/${id}`);
}

export async function ConfirmBooking(data) {
  return post('/api/fn-booking/book/' + data.id, data);
}

@acceptLang
export default class extends React.Component {
  static async getInitialProps({ query }) {
    const inProps = initialProps(query);
    return {
      ...inProps
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      response: null,
      term: null
    };
  }

  async componentDidMount() {
    const { id } = this.props.router.query;

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
      const { id } = this.props.router.query;
      const data = {
        ...e,
        term: id
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
    return (
      <html>
        <link rel="stylesheet" href="/static/css/styles.css" />

        <div className="calendar-container">
          {term && (
            <ReactBooking
              title={term.term.title}
              description={term.term.description}
              onFormSubmit={e => this.sendRequestToServer(e)}
              response={this.state.response}
              paymentTab={false}
              appointments={term.slots}
            />
          )}
        </div>
      </html>
    );
  }
}
