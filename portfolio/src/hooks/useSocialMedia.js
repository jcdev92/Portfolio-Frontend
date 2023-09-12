import axios from "axios";

// devlopment url
// const url = "http://localhost:9000/api/v1/social-media";

// production url
const url = "https://portfolio-backend-3jrx-dev.fl0.io/api/v1"

// axios configuration
const instance = axios.create({
  baseURL: url,
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


// get projects with the axios configuration

export const getSocialMedia = async () => {
  const res = await instance.get('/social-media');
  return res.data;
};

// add projects with the axios configuration

export const addSocialMedia = async (project) => {
  const res = await instance.post('/social-media', project);
  return res.data;
};

// update projects with the axios configuration

export const updateSocialMedia = async ({id, ...project}) => {
  const res = await instance.patch(`/social-media/${id}`, project);
  return res.data;
}

// delete projects with the axios configuration

export const deleteSocialMedia = async (id) => {
  const res = await instance.delete(`/social-media/${id}`);
  return res.data;
};
