import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3036",
});

export default api;
