import { request } from './request.js';

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getMovies() {
    return request(`${this.baseUrl}/`, {
      headers: {
        ...this.headers,
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
}

export const moviesApi = new Api({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});