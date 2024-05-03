import axios from "axios";
import { api } from './url';

const url = api

// axios configuration 
const instance = axios.create({
  baseURL: `${url}/api/v1`,
});

// Añadir un interceptor de petición que añada el token en los headers
instance.interceptors.request.use(config => {
  // Obtener el token del localStorage o donde se guarde
  const token = localStorage.getItem('token');
  // Si hay token, añadirlo al header de autorización
  if (token) {
    config.headers['Authorization'] = 'jwt ' + token;
  }
  // Devolver la configuración modificada
  return config;
});

// get skills with the axios configuration
export const getSkills = async () => {
  const res = await instance.get(`/skill`);
  return res.data;
};

// add skill with the axios configuration

export const addSkill = async (skill) => {
  const res = await instance.post(`/skill`, skill);
  return res.data;
};

// update skill with the axios configuration

export const updateSkill = async ({id, ...skill}) => {
  const res = await instance.patch(`/skill/${id}`, skill);
  return res.data;
}

// delete skills with the axios configuration

export const deleteSkill = async (id) => {
  const res = await instance.delete(`/skill/${id}`);
  return res.data;
};
