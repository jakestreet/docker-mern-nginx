import axios from "axios";

export default axios.create({
  baseURL: window.location.origin + window.location.pathname + '/api',
  headers: {
    "Content-type": "application/json"
  }
});
