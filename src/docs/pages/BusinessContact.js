import React from 'react';
import Widget from '../../components/widget';
import { Snippet } from '../Snippet';

const businessContacts = `{
  modules: [
    type: 'service',
    data: {
      type: 'contacts',
      items: [
        {
          type: 'phone',
          data: {
            region: '+48',
            country: 'PL',
            type: 'mobile',
            value: '200500900'
          }
        },
        {
          type: 'phone',
          data: {
            region: '+48',
            country: 'PL',
            type: 'mobile',
            value: '200500901'
          }
        }
      ]
    }
  ]
}`;

export class BusinessContact extends React.Component {
  render() {
    return (
      <div>
        <h1>InDrop Business Contact</h1>
        <p>
          48% of customers are looking for your business contacts. Specially,
          phone contacts. If they find a reliable channel to connect they'll
          trust.
        </p>
        <p>
          Most of the time, visitors are looking for your website contact
          information, instead of reading what you have written there. In fact
          most of customers will trust a business, if there is a way to call
          that business and talk to people.
        </p>

        <p>
          <strong>InterDrop business contact</strong> helps all of your visitors
          to see a localised version of contact information. Using various
          technics, it will help the vistors based on their location, and
          behavior to reach you. There behaviors include, but not limited too:
        </p>

        <ul>
          <li>
            If your visitor is from the same region as your number, to see
            shorter phone
          </li>
          <li>
            It will translate the interface labels to visitors locale language.
          </li>
          <li>
            It will try to get a feedback from visitor, if phone number has been
            called and not answered.
          </li>
        </ul>

        <h3>Configurate business contacts</h3>
        <Snippet code={businessContacts} />

        <h3>Show your business phone</h3>
        <div class="document-widget-render" style={{ paddingTop: '250px' }}>
          <Widget
            containerClass="docked-widget-inline"
            locked
            type="tip"
            content="simple_phone"
          />
        </div>

        <h3>Show nearest office</h3>
        <div class="document-widget-render" style={{ paddingTop: '250px' }}>
          <Widget
            containerClass="docked-widget-inline"
            locked
            type="tip"
            content="nearest_office"
          />
        </div>
      </div>
    );
  }
}
