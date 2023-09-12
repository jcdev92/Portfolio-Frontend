import axios from "axios";

// devlopment url
// const url = "http://localhost:9000/api/v1/skill";

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
export const getSkills = async () => {
  const res = await instance.get(`/skill`);
  return res.data;
};

// add projects with the axios configuration

export const addSkill = async (project) => {
  const res = await instance.post(`/skill`, project);
  return res.data;
};

// update projects with the axios configuration

export const updateSkill = async ({id, ...project}) => {
  const res = await instance.patch(`/skill/${id}`, project);
  return res.data;
}

// delete projects with the axios configuration

export const deleteSkill = async (id) => {
  const res = await instance.delete(`/skill/${id}`);
  return res.data;
};
