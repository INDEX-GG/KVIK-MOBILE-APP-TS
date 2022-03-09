import axios from 'axios';

export const kvikAxios = axios.create({
  baseURL: 'https://onekvik.ru/api/',
});
