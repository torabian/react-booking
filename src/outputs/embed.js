import React from 'react';
import ReactDOM from 'react-dom';
import { ReactBooking } from '../components/react-booking';
import '../../vendor/cleanslate.css';

export default class InterDrop {
  static el;

  static mount({ parentElement = null, ...props } = {}) {
    const component = <ReactBooking {...props}>Damn!</ReactBooking>;

    function doRender() {
      if (InterDrop.el) {
        throw new Error('InterDrop is already mounted, unmount first');
      }
      const el = document.createElement('div');
      el.setAttribute('class', 'cleanslate');

      if (parentElement) {
        document.querySelector(parentElement).appendChild(el);
      } else {
        document.body.appendChild(el);
      }
      ReactDOM.render(component, el);
      InterDrop.el = el;
    }
    if (document.readyState === 'complete') {
      doRender();
    } else {
      window.addEventListener('load', () => {
        doRender();
      });
    }
  }

  static unmount() {
    if (!InterDrop.el) {
      throw new Error('InterDrop is not mounted, mount first');
    }
    ReactDOM.unmountComponentAtNode(InterDrop.el);
    InterDrop.el.parentNode.removeChild(InterDrop.el);
    InterDrop.el = null;
  }
}
