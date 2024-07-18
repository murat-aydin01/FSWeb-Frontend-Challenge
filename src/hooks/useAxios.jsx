import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://6698c0302069c438cd6fce02.mockapi.io/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

const useAxios = (url, options) => {
  return axiosInstance(url, options).then(response => response.data[0]);
};

export default useAxios;
