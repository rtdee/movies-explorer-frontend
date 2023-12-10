import { request } from './request.js';
const { NODE_ENV } = process.env;

export const BASE_URL = NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://api.rtdmovies.nomoredomainsicu.ru';

export const register = ({username, email, password}) => {
  return request(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, email, password})
  })
}

export const authorize = ({email, password}) => {
  return request(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
}

export const checkToken = (token) => {
  return request(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': ['https://api.rtdmovies.nomoredomainsicu.ru', 'http://localhost:5000'],
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token,  Accept, Authorization, X-Requested-With',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
}