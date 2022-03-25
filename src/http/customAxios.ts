import axios from 'axios';
import { HOST } from '../constants/constants';

export const kvikAxios = axios.create({
  baseURL: `${HOST}/api`,
});
