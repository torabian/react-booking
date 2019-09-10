import React from 'react';
import { combineLatest } from 'rxjs';
import values from 'lodash.values';

// from babel
function _extends() {
  // eslint-disable-next-line
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

export function rxProp(subjectBehaviors = {}) {
  return function(ComposedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          store: {}
        };
        this.subscription = null;
      }

      // Subscribe to RxJS, map the current state to composed component props
      componentWillMount() {
        const vars = Object.keys(subjectBehaviors);
        const vals = values(subjectBehaviors);
        this.subscription = combineLatest(...vals).subscribe(result => {
          const store = {};
          result.forEach((item, index) => {
            store[vars[index]] = item;
          });
          this.setState({ store });
        });
      }

      componentWillUnmount() {
        if (this.subscription && this.subscription.unsubscribe) {
          this.subscription.unsubscribe();
        }
      }

      render() {
        return React.createElement(
          ComposedComponent,
          _extends({}, this.props, this.state.store)
        );
      }
    };
  };
}
