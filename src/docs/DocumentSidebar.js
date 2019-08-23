import React from 'react';
import { SidebarItems } from './project';
import { MenuItem } from './DocumentMenuItem';

function BuildSidebarItems(onClickClose) {
  return SidebarItems.map(item => {
    return (
      <MenuItem {...item} onClickClose={onClickClose}>
        {item.children
          ? item.children.map(child => (
              <MenuItem {...child} onClickClose={onClickClose} />
            ))
          : null}
      </MenuItem>
    );
  });
}

export class DocumentSidebar extends React.Component {
  render() {
    return (
      <div className="document-sidebar">
        <div className="document-sidebar-title-wrappper">
          <div className="document-info-container">
            <div className="document-title">React-booking &trade;</div>
            <div className="document-subtitle">
              Booking and reservation solution
            </div>
          </div>
          <button onClick={this.props.onClickClose}>
            <i className="icon icon-close" />
            <span>CLOSE</span>
          </button>
        </div>

        <ul className="menu-items">
          {BuildSidebarItems(this.props.onClickClose)}
        </ul>
      </div>
    );
  }
}
