import axios from "axios";

export default api = axios.create({
  baseURL: "https://api.nytimes.com/svc/search/v2/",
});

api.interceptors.request.use(async (config) => {
  config.params = { "api-key": "jmo4E3y46AGQVhuVs17t05uWy3Sx2PFA" };
  return config;
});
