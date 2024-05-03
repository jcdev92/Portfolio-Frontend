import axios from "axios";
import { api } from './url';

// production url
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


// get socialMedia with the axios configuration

export const getSocialMedia = async () => {
  const res = await instance.get('/social-media');
  return res.data;
};

// add socialMedia with the axios configuration

export const addSocialMedia = async (socialMedia) => {
  const res = await instance.post('/social-media', socialMedia);
  return res.data;
};

// update socialMedia with the axios configuration

export const updateSocialMedia = async ({id, ...socialMedia}) => {
  const res = await instance.patch(`/social-media/${id}`, socialMedia);
  return res.data;
}

// delete socialMedia with the axios configuration

export const deleteSocialMedia = async (id) => {
  const res = await instance.delete(`/social-media/${id}`);
  return res.data;
};
