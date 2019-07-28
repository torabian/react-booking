/**
 * THIS FILE WON'T BE BACKWARD COMPATIBLE, neither should be used for any other purposes such as
 * redistributing. only to be used for internal team in PixelPlux Eu & Middle east
 * It will be served on our domain for our calendar service (booking and reservation)
 * https://pixelplux.com/en/calendar
 */

import React from 'react';
import { acceptLang, initialProps } from './pixelplux-common';
import { WidgetComponent } from '../src/components/widget.component';

export async function GetTermPublic(id) {
  return get(`/api/fn-booking/appointments/term/${id}`);
}

@acceptLang
export default class extends React.Component {
  static async getInitialProps({ query }) {
    const inProps = initialProps(query);
    console.log(inProps);
    return {
      ...inProps
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props.router.query;
    let term = null;
    if (id) {
      try {
        const res = await GetTermPublic(id);
        if (GetEntity(res)) {
          term = GetEntity(res);
        }
      } catch (error) {}
    }
    this.setState({
      term
    });
  }

  render() {
    return (
      <html>
        <link rel="stylesheet" href="/static/css/styles.css" />

        <div className="calendar-container">
          <WidgetComponent paymentTab={false} />
        </div>
      </html>
    );
  }
}
