import fetch from 'isomorphic-fetch';
import store from './store';

const requestOptions = {
  method: 'POST',
};

export default class Auth2 {
  constructor ({
    requestTokenUrl = '',
    accessTokenUrl  = '',
    refreshTimeout  = 60 * 60 * 1000 // one hour
    checkTimeout    = 10 * 60 * 1000 // 10 minutes
  } = {}) {
    this.requestTokenUrl = requestTokenUrl;
    this.accessTokenUrl = accessTokenUrl;
    this.refreshTimeout = refreshTimeout;
    this.checkTimeout = checkTimeout;
  }
  fetchRequestToken () {
    return fetch(this.requestTokenUrl)
      .then(data => data.json())
      .then(data => {
        store.set('requestToken', {
          value: data.requestToken,
          createdAt: new Date()
        });
        return data.requestToken;
      });
  }
  fetchAccessToken () {
    return fetch(this.accessTokenUrl)
      .then(data => data.json())
      .then(data => {
        store.set('accessToken', {
          value: data.accessToken,
          createdAt: new Date()
        });
        return data.accessToken;
      });
  }
  startRefreshing () {
    setInterval(() => {

    }, this.checkTimeout);
  }
};
