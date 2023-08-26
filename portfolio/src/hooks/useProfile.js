import axios from "axios";

// devlopment url
// const url = "http://localhost:9000/api/v1/project";

// production url
const url = "https://portfolio-backend-3jrx-dev.fl0.io/api/v1/project"

const token = localStorage.getItem("token");

// axios configuration

axios.defaults.baseURL = url;

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `jwt ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// get profile with the axios configuration

export const getProfile = async () => {
  const res = await axios.get(url);
  return res.data.data[0];
}


// update profile with the axios configuration

export const updateProfile = async ({id, ...profile}) => {
  const res = await axios.patch(`${url}/${id}`, profile);
  return res.data;
}


