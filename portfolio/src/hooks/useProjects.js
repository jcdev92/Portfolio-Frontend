import axios from "axios";

const url = "http://localhost:9000/api/v1/project";
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

// get projects with the axios configuration

export const getProjects = async () => {
  const res = await axios.get(url);
  return res.data;
};

// add projects with the axios configuration

export const addProject = async (project) => {
  const res = await axios.post(url, project);
  return res.data;
};

// update projects with the axios configuration

export const updateProject = async (id, project) => {
  const res = await axios.put(`${url}/${id}`, project);
  return res.data;
};

// delete projects with the axios configuration

export const deleteProject = async (id) => {
  const res = await axios.delete(`${url}/${id}`);
  return res.data;
};
