import { request } from './request.js';

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUserInfo(token) {
    return request(`${this.baseUrl}/users/me`, {
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${token}`,
      }
    })
  }

  patchUserInfo(data, token) {
    return request(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email
      })
    })
  }
}

export const api = new Api({
  baseUrl: 'https://api.rtdmovies.nomoredomainsicu.ru',
  headers: {
    'Access-Control-Allow-Origin': 'https://api.rtdmovies.nomoredomainsicu.ru',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Requested-With',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});