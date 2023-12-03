import { request } from './request.js';
const { NODE_ENV } = process.env;

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getSavedMovies(token) {
    return request(`${this.baseUrl}/movies`, {
      method: 'GET',
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${token}`,
      },
    })
  }

  saveMovie(data, token) {
    return request(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      })
    })
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
  baseUrl: NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://api.rtdmovies.nomoredomainsicu.ru',
  headers: {
    'Access-Control-Allow-Origin': ['https://api.rtdmovies.nomoredomainsicu.ru', 'http://localhost:5000'],
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Requested-With',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});