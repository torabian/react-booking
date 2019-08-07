import React, { Component } from 'react';

export class DocumentNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false
    };
  }

  toggleActiveMenu() {
    if (this.props.onClickMenu) {
      this.setState(
        {
          activeMenu: true
        },
        () => {
          this.props.onClickMenu(this.state.activeMenu);
        }
      );
    }
  }

  render() {
    return (
      <div className="header-navbar-wrapper">
        <button className="menu-ham" onClick={() => this.toggleActiveMenu()}>
          <i className="icon icon-menu" />
        </button>
        <div className="header-search">
          <i className="icon icon-search" />
          <input
            type="text"
            placeholder="Search for concepts, code, or forum discussions"
          />
        </div>
      </div>
    );
  }
}
