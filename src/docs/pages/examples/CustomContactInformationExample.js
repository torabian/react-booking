import React from 'react';
import { Snippet } from '../../Snippet';
import { ReactBooking } from '../../../components/react-booking';

const exampleCode = `import { ReactBooking } from 'react-booking';

export class App extends React.Component {
  render() {
    return (
      <ReactBooking
        title="Booking"
        description="Setup your booking"
        historyType="memory"
        formMode="skip"
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

export class CustomContactInformationExample extends React.Component {
  render() {
    return (
      <div>
        <h1>Custom contact information</h1>
        <p>
          By default we ask for people <b>Fullname</b>, <b>Phone number</b>,{' '}
          <b>Email</b>. You can change this easily with various options as
          described below.
        </p>
        <h2>No contact information</h2>
        <p>
          If you want to not collect any information about the user, and they
          only select the appointment and complete the process, you can use this
          code. This case is useful for campaigns, or getting customer feedback
          about their preferred time.
        </p>
        <Snippet code={exampleCode} />
        <p>And it will look something like this:</p>
        <ReactBooking
          title="Booking"
          description="Setup your booking"
          historyType="memory"
          formMode="skip"
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
      </div>
    );
  }
}
