import React from 'react';
import ScrollMemory from 'react-router-scroll-memory';

import { DocumentSidebar } from './DocumentSidebar';
import { DocumentNavbar } from './DocumentNavbar';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';
import { Routes, PREFIX } from './project';

function buildRoutes() {
  return (
    <>
      {Routes.map(route => (
        <Route
          exact
          path={`${PREFIX}/${route.path}`}
          component={route.component}
        />
      ))}
    </>
  );
}

export class DocumentLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false,
      windowSize: 0
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = e => {
    this.setState({
      windowSize: window.innerWidth
    });
    if (window.innerWidth > 992) {
      this.setState({
        activeMenu: false
      });
    }
  };

  toggleMenu(status) {
    this.setState({
      activeMenu: status
    });
  }

  render() {
    const Router =
      window.location.host === 'pixelplux.github.io'
        ? HashRouter
        : BrowserRouter;

    return (
      <Router>
        <ScrollMemory />

        <div
          className={
            'document-layout' + (this.state.activeMenu ? ' active' : '')
          }
        >
          <DocumentSidebar onClickClose={() => this.toggleMenu(false)} />
          <div className="document-content-wrapper">
            <DocumentNavbar onClickMenu={e => this.toggleMenu(e)} />
            <div className="document-content">{buildRoutes()}</div>
          </div>
        </div>
      </Router>
    );
  }
}
