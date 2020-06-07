import axios from "axios";

const api = axios.create({
  baseURL: 'http://YOUR_HOST:3333'
});

export default api;
