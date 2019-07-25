import React, { Component } from 'react';
import { AppointmentComponent } from './appointment.component';
import { getMockData } from './mock';
import { TabComponent } from './tab.component';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class WidgetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaign: null,
      loaded: false,
      form: {
        fullname: null,
        email: null,
        phone: null,
        address: null,
        zipCode: null
      }
    };
  }

  async componentDidMount() {
    const data = await getMockData();
    this.setState({
      campaign: data,
      loaded: true
    });
  }

  render() {
    const { campaign } = this.state;
    return this.state.loaded === true ? (
      <div className="campagin-wrapper">
        <TabComponent />
        <div>
          <h1>{campaign.title}</h1>
          <p>{campaign.description}</p>
        </div>
        <Router>
          <Route
            path="/"
            exact
            component={() => <AppointmentComponent campaign={campaign} />}
          />
        </Router>
      </div>
    ) : (
      <div>Please wait we are getting data from our servers ...</div>
    );
  }
}
