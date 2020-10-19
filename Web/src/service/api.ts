import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-twitter-finder.herokuapp.com',
});

export default api;
