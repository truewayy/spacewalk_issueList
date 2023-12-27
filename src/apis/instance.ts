import axios from 'axios';

const baseUrl = 'https://api.github.com/repos';
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  // headers: {
  //   Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  // },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
