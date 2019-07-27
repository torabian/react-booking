/**
 * Internal functions for PixelPlux team
 * DO NOT USE, OR USE ON YOUR OWN RISK. WON'T BE MAINTAINED, OR BUG FIXED
 */
import React from 'react';
import Router, { withRouter } from 'next/router';
import { SSRStore } from './ssr-store';
import { combineLatest } from 'rxjs';
import values from 'lodash.values';

export function GetEntity(response) {
  if (
    response &&
    response.data &&
    response.data.items &&
    response.data.items[0]
  ) {
    return response.data.items[0];
  }
  return false;
}

export function GetEntities(response) {
  if (response && response.data && response.data.items) {
    return response.data.items;
  }
  return false;
}

export function findErrorMessage(field, response) {
  if (response && response.error && response.error.errors) {
    const $field = response.error.errors.find(
      error => error.location === field
    );
    if ($field) {
      return $field.message;
    }
  }
  return false;
}

export function slugify(string = '') {
  const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;';
  const b = 'aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

const pln_formatter = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
  minimumFractionDigits: 0
});
const usd_formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});
const euro_formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0
});

export function formatPrice(price, original_currency = 'usd') {
  if (original_currency === 'pln') {
    return pln_formatter.format(price);
  }
  if (original_currency === 'euro') {
    return euro_formatter.format(price);
  }
  if (original_currency === 'usd') {
    return usd_formatter.format(price);
  }
  return `${price} ${original_currency}`;
}

export const GetLang = () => {
  const st = SSRStore.localisation.value;
  if (st === 'pl' || st === 'en') {
    return st;
  }
  return 'pl';
};

export const RouterPush = (url, as, options = {}) => {
  Router.push(
    {
      pathname: url,
      query: {
        'accept-lang': GetLang(),
        country: 'pl',
        ...options
      }
    },
    `/${GetLang()}-pl${as || url}`
  );
};

/**
 * Changes value inside this.state.form, using a field and value.
 * Make sure you'll bind this function to the component on constructor:
 *
 * constructor() {
 *   this.onValueChange = this.onValueChange.bind(this)
 * }
 */
export function onValueChange(field, value, cb = null) {
  this.setState(
    {
      form: {
        ...this.state.form,
        [field]: value
      }
    },
    () => {
      this.isFormInvalid(this.preValidator, this.state.form, field);
      if (cb) {
        cb();
      }
    }
  );
}

export function isFormInvalid(preValidator, form, field) {
  let validation = preValidator(form);
  if (field) {
    validation = validation.filter(t => t.location === field);
    if (
      this.state.response &&
      this.state.response.error &&
      this.state.response.error.errors
    ) {
      const restOfErrors = this.state.response.error.errors.filter(
        t => t.location !== field
      );
      validation = [...restOfErrors, ...validation];
    }
  }
  if (validation.length) {
    this.setState({
      response: {
        error: {
          errors: validation
        }
      }
    });
  } else {
    this.setState({
      response: {}
    });
  }
  return !!validation.length;
}

function onSubmit(e) {
  e && e.preventDefault && e.preventDefault();
  const { form } = this.state;
  if (this.isFormInvalid(this.preValidator, form)) {
    return;
  }
  this.processSubmit(form);
}
export function injectFormTools(ref) {
  ref.onValueChange = onValueChange.bind(ref);
  ref.isFormInvalid = isFormInvalid.bind(ref);
  ref.onSubmit = onSubmit.bind(ref);
}

export function initialProps(query) {
  const acceptLang = query && query['accept-lang'];
  if (acceptLang) {
    SSRStore.localisation.next(acceptLang);
    return {
      acceptLang
    };
  }
  throw new Error('Accept language is missing');
}

export function setAcceptLang(query) {
  if (query && query['accept-lang']) {
    SSRStore.localisation.next(query['accept-lang']);
  }
}

async function defProps({ query }) {
  const initials = initialProps(query);
  return {
    ...initials
  };
}
export function acceptLang(Wrapper) {
  return withRouter(
    class extends React.Component {
      static getInitialProps = Wrapper.getInitialProps || defProps;

      componentWillMount() {
        setAcceptLang(this.props.router.query);
      }
      render() {
        return <Wrapper {...this.props} />;
      }
    }
  );
}

// from babel
function _extends() {
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
