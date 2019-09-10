import React from 'react';
import { ReactBooking } from '../../components/react-booking';

export class OnSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      response2: null
    };
  }

  sendRequestToServer(callback) {
    console.log('Export', callback);
    setTimeout(() => {
      this.setState({
        response: {
          status: 200,
          form: callback,
          error: {
            errors: []
          }
        }
      });
    }, 3000);
  }

  sendRequestToServer2(callback) {
    console.log('Export', callback);
    setTimeout(() => {
      this.setState({
        response2: {
          status: 200,
          form: callback,
          error: {
            errors: []
          }
        }
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1>React booking demo</h1>

        <ReactBooking
          title="Booking"
          description="Setup your booking"
          historyType="memory"
          paymentMethods={{ cash: true, online: false }}
          onFormSubmit={e => this.sendRequestToServer(e)}
          response={this.state.response}
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

        <ReactBooking
          title="Booking"
          description="Setup your booking"
          historyType="memory"
          paymentMethods={{ cash: true, online: false }}
          onFormSubmit={e => this.sendRequestToServer2(e)}
          response={this.state.response2}
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
