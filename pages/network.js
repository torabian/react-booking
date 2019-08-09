import { SSRStore } from './ssr-store';

const URL = process.env.REACT_APP_API || 'https://calendar.pixelplux.com';

export function remove(affix, data) {
  return fetch(URL + affix, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'accept-lang': SSRStore.localisation.value
    },
    method: 'DELETE',
    body: JSON.stringify(data)
  })
    .then(function(res) {
      return res.json();
    })
    .catch(function(res) {
      console.error('error', res);
    });
}
export function post(affix, data) {
  return fetch(URL + affix, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'accept-lang': SSRStore.localisation.value
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(function(res) {
      return res.json();
    })
    .catch(function(res) {
      console.error('error', res);
    });
}
export function get(affix, data) {
  return fetch(URL + affix, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'accept-lang': SSRStore.localisation.value
    },
    method: 'GET',
    body: JSON.stringify(data)
  })
    .then(function(res) {
      return res.json();
    })
    .catch(function(res) {
      console.error('error', res);
    });
}
