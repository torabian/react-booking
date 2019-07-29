import React, { Component } from 'react';

export class PaymentComponent extends Component {
  render() {
    return (
      <div className="final-status-wrapper successed">
        <div className="final-box-wrapper">
          <p>
            <a
              href="https://sklep.przelewy24.pl/zakup.php?z24_id_sprzedawcy=93228&z24_kwota=1000&z24_currency=pln&z24_nazwa=Hello%21&z24_language=en&k24_kraj=PL&z24_crc=75ce628f"
              className="btn btn-primary"
            >
              Pay by przelewy24.pl
            </a>
          </p>
        </div>
      </div>
    );
  }
}
