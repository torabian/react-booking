import React from 'react';
import { Link as DomLink } from 'react-router-dom';
import NextLink from 'next/link';
import { PREFIX } from './project';

export const isNextJs = process.env.PUBLIC_URL === undefined;

export class Link extends React.Component {
  render() {
    if (isNextJs) {
      return (
        <NextLink
          href={{
            pathname: (PREFIX + '/documentation/' + this.props.to).replace(
              '//',
              '/'
            )
          }}
        >
          <a>{this.props.children}</a>
        </NextLink>
      );
    }
    return <DomLink {...this.props}>{this.props.children}</DomLink>;
  }
}
