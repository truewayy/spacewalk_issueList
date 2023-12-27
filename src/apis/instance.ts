import axios from 'axios';

// github api base url
const baseUrl = 'https://api.github.com/repos';

// axios instance
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  // headers: {
  //   Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  // },
});

// response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
