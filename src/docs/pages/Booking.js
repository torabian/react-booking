import React from 'react';
import { Snippet } from '../Snippet';
import sample from './booking_sample';
import Widget from '../../components/widget';

export class BookingAndReservation extends React.Component {
  render() {
    return (
      <div>
        <h1>InDrop Booking and reservation</h1>
        <p>
          Get your customers an easy way to book an appointment, or buy ticket.
        </p>

        <div class="document-widget-render">
          <Widget containerClass="docked-widget-inline" locked />
        </div>

        <h3>Configurate business contacts</h3>
        <Snippet code={JSON.stringify(sample, null, 2)} />
      </div>
    );
  }
}
