import React from 'react';
import { Snippet } from '../Snippet';
import { ReactBooking } from '../../components/react-booking';

const exampleCode = `import { ReactBooking } from 'react-booking';

export class App extends React.Component {
  render() {
    return (
      <ReactBooking
        title="Booking"
        description="Setup your booking"
        historyType="memory"
        paymentMethods={{ cash: true, online: false }}
        appointments={[
          {
            id: 1,
            start: new Date(2019, 6, 10, 10, 30),
            end: new Date(2019, 6, 10, 10, 45),
            capacity: 10,
            price: {
              amount: 10,
              curr: '$'
            }
          }
        ]}
      />
    )
  }
};`;

export class GettingStarted extends React.Component {
  render() {
    return (
      <div>
        <h1>Install for ReactJs projects</h1>
        <p>
          React booking is written in ReactJs, but can be used in any other web
          app. If your project is based on react, just install it as a
          component. If not, you can use it as a widget.
        </p>

        <h2>For React (web) projects</h2>
        <p>
          You can install it using <code>npm</code> package manager.
        </p>
        <Snippet code="npm install react-booking --save" />

        <p>Then, import it as a normal react component:</p>

        <Snippet code={exampleCode} />

        <p>And it will look something like this:</p>

        <ReactBooking
          title="Booking"
          description="Setup your booking"
          historyType="memory"
          paymentMethods={[
            {
              type: 'przelewy24',
              url:
                'https://sklep.przelewy24.pl/zakup.php?z24_id_sprzedawcy=93228&z24_kwota=1000&z24_currency=pln&z24_nazwa=Hello%21&z24_language=en&k24_kraj=PL&z24_crc=75ce628f'
            }
          ]}
          appointments={[
            {
              id: 1,
              start: new Date(2019, 6, 10, 10, 30),
              end: new Date(2019, 6, 10, 10, 45),
              capacity: 10,
              price: {
                amount: 10,
                curr: '$'
              }
            },
            {
              id: 2,
              start: new Date(2019, 6, 10, 11, 30),
              end: new Date(2019, 6, 10, 12, 45),
              capacity: 4,
              price: {
                amount: 22,
                curr: '$'
              }
            },
            {
              id: 3,
              start: new Date(2019, 6, 10, 13, 30),
              end: new Date(2019, 6, 10, 13, 45),
              capacity: 2
            },
            {
              id: 4,
              start: new Date(2019, 6, 11, 11, 30),
              end: new Date(2019, 6, 11, 12, 45),
              capacity: 4
            },
            {
              id: 5,
              start: new Date(2019, 6, 12, 13, 30),
              end: new Date(2019, 6, 12, 13, 45),
              capacity: 2
            }
          ]}
        />
      </div>
    );
  }
}
