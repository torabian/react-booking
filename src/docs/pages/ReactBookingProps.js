import React from 'react';

class DocsReactProps extends React.Component {
  render() {
    return (
      <table className="docs-component-properties-table">
        <thead>
          <th>Prop name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>
            <td>scrollAdjust</td>
            <td>string</td>
            <td>native</td>
            <td>
              Use can use either 'native', 'none' or 'smooth'. Adjusts the
              window scroll when user selects appointment or a date
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export class ReactBookingProperties extends React.Component {
  render() {
    return (
      <div>
        <h1>React Booking Properties (Props)</h1>
        <p>
          ReactBooking and ReactBookingEnterprise are highly configurable.
          Therefor you can see list of all configurations here that can be
          passed
        </p>

        <DocsReactProps />
      </div>
    );
  }
}
