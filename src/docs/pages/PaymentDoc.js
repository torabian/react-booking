import React from 'react';
import { Snippet } from '../Snippet';
import { ReactBooking } from '../../components/react-booking';

const exampleCode = `<ReactBooking
  title="Booking"
  description="When user wants to pay, what will happen?"
  historyType="memory"
  visibleTab="payment"
  paymentMethods={[
    {
      type: 'przelewy24',
      url:
        'https://sklep.przelewy24.pl/zakup.php' + 
        '?z24_id_sprzedawcy=93228&z24_kwota=1000&z24_currency=pln' +
        '&z24_nazwa=Hello%21&z24_language=en&k24_kraj=PL&z24_crc=75ce628f'
    }
  ]}
/>`;

export class PaymentDoc extends React.Component {
  render() {
    return (
      <div>
        <h1>Payment methods</h1>

        <p>You can integrate this with przelewy24 and braintree dropin ui</p>

        <br />
        <ReactBooking
          title="Booking"
          description="When user wants to pay, what will happen?"
          historyType="memory"
          visibleTab="payment"
          paymentMethods={[
            {
              type: 'przelewy24',
              url:
                'https://sklep.przelewy24.pl/zakup.php?z24_id_sprzedawcy=93228&z24_kwota=1000&z24_currency=pln&z24_nazwa=Hello%21&z24_language=en&k24_kraj=PL&z24_crc=75ce628f'
            }
          ]}
        />
        <br />
        <Snippet code={exampleCode} />
      </div>
    );
  }
}
