/**
 * THIS FILE WON'T BE BACKWARD COMPATIBLE, neither should be used for any other purposes such as
 * redistributing. only to be used for internal team in PixelPlux Eu & Middle east
 * It will be served on our domain for our calendar service (booking and reservation)
 * https://pixelplux.com/en/calendar
 */

import React from 'react';
import { acceptLang, initialProps } from './pixelplux-common';
import { DocumentSidebar } from '../src/docs/DocumentSidebar';
import { Routes } from '../src/docs/project';
import { DocumentNavbar } from '../src/docs/DocumentNavbar';

@acceptLang
export default class extends React.Component {
  static async getInitialProps({ query }) {
    const inProps = initialProps(query);
    return {
      ...inProps
    };
  }

  render() {
    const id = this.props.router.query.id;
    const Page = Routes.find(page => page.path === id);
    if (Page) {
      console.log(Page);
    }

    return (
      <html>
        <link rel="stylesheet" href="/static/css/styles.css" />
        <div className="document-layout">
          <DocumentSidebar />
          <div className="document-content-wrapper">
            <DocumentNavbar onClickMenu={e => this.toggleMenu(e)} />
            <div className="document-content">
              {Page && Page.component ? <Page.component /> : null}
            </div>
          </div>
        </div>
      </html>
    );
  }
}
