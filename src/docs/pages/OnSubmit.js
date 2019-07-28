import React from 'react';
import { Snippet } from '../Snippet';
import { WidgetComponent } from '../../components/widget.component';

const exampleCode = `<WidgetComponent
  title="Booking"
  description="Setup your booking"
  historyType="browser"
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
/>`;

export class OnSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
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

  render() {
    return (
      <div>
        <h1>React booking demo</h1>

        <WidgetComponent
          title="Booking"
          description="Setup your booking"
          historyType="browser"
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
      </div>
    );
  }
}
