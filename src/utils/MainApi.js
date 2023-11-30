import { request } from './request.js';

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getMovies(token) {
    return request(`${this.baseUrl}/movies`, {
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${token}`,
      }
    })
  }

  postNewMovie(data, token) {
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
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      })
    })
  }

  deleteMovie(movieId, token) {
    return request(`${this.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${token}`,
      }
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
  baseUrl: 'http://localhost:5000',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Requested-With',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});