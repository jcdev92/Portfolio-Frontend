import axios from "axios";

const url = "http://localhost:9000/api/v1/skill";
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

export const getSkills = async () => {
  const res = await axios.get(url);
  return res.data;
};

// add projects with the axios configuration

export const addSkill = async (project) => {
  const res = await axios.post(url, project);
  return res.data;
};

// update projects with the axios configuration

export const updateSkill = async ({id, ...project}) => {
  const res = await axios.patch(`${url}/${id}`, project);
  return res.data;
}

// delete projects with the axios configuration

export const deleteSkill = async (id) => {
  const res = await axios.delete(`${url}/${id}`);
  return res.data;
};
