/**
 * THIS FILE WON'T BE BACKWARD COMPATIBLE, neither should be used for any other purposes such as
 * redistributing. only to be used for internal team in PixelPlux Eu & Middle east
 * It will be served on our domain for our calendar service (booking and reservation)
 * https://pixelplux.com/en/calendar
 */

import React from 'react';
import { acceptLang, initialProps } from './pixelplux-common';
import { get, post } from './network';
import { ReactBookingEnterprise } from '../src/components/react-booking-enterprise';

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

  render() {
    return (
      <html>
        <link rel="stylesheet" href="/static/css/styles.css" />
        <div className="calendar-container">
          <ReactBookingEnterprise campaignId={this.props.router.query.id} />
        </div>
      </html>
    );
  }
}
