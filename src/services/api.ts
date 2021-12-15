import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL || "http://api.openweathermap.org/data/2.5/",
});

export default api;
