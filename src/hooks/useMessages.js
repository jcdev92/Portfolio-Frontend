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


export const getMessages = async () => {
  const res = await instance.get(`/message`);
  return res.data;
};


export const registerMessage = async (message) => {
  const res = await instance.post(`/message`, message);
  return res.data;
};


export const deleteAmessage = async (id) => {
  const res = await instance.delete(`/message/${id}`);
  return res.data;
};
