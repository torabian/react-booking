import React from 'react';
import { Link } from 'react-router-dom';

export class HowToUse extends React.Component {
  render() {
    return (
      <div>
        <h1>How to use react-booking products</h1>
        <p>
          React booking can be used in different ways and vast category of
          people can get the benifit. We provide our service as{' '}
          <strong>React-Booking Open-source</strong> and{' '}
          <strong>React-Booking Enterprise</strong>. Therefor, you can use any
          of them that suits you best.
        </p>

        <h2>React-Booking open-source</h2>
        <p>
          We provide a reactjs based package (reactjs is a framework from
          facebook) which is called 'react-booking' and it can be cloned,
          installed as a dependency, or other ways. It will give users a
          front-end widget, inline widget or a standalone url.
          <br />
          The reason that we provide this package is to give our users and
          clients more possibilty to edit and customize our service. Although we
          provide customisable widget with different UI theme colors, we
          understand that there might be cases that it won't satisfy expert
          clients.
          <br />
          <br />
          You can react more{' '}
          <Link to="/getting-started-for-reactjs">Install for ReactJs</Link> if
          you want to read more or use it.
        </p>
        <h2>React-Booking enterprise</h2>
        <p>
          We provide a hosted booking service that can be used for multiple
          group of customers:
        </p>

        <ul>
          <li>
            For individual people who want to facilate their customers booking,
            such as laywers, dentists
          </li>
        </ul>
      </div>
    );
  }
}
