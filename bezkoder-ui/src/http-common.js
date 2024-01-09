import axios from "axios";

export default axios.create({
  baseURL: window.location.origin + '/bezkoder-ui/api',
  headers: {
    "Content-type": "application/json"
  }
});
