import axios from "axios";

// production url
const url = "https://portfolio-backend-j1tl.onrender.com/api/v1"

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

export const getProjects = async () => {
  const res = await instance.get(`/project`);
  return res.data;
};

// add projects with the axios configuration

export const addProject = async (project) => {
  const res = await instance.post(`/project`, project);
  return res.data;
};

// update projects with the axios configuration

export const updateProject = async ({id, ...project}) => {
  const res = await instance.patch(`/project/${id}`, project);
  return res.data;
}

// delete projects with the axios configuration

export const deleteProject = async (id) => {
  const res = await instance.delete(`/project/${id}`);
  return res.data;
};


// asociate skill to project
export const skillToProject = async ({id, ...data}) => {
  const res = await instance.post(`/project/${id}/skills`, data);
  return res.data;
}


// delete skill project asociation with axios
export const deleteSkillToProject = async ({id, ...data}) => {
  // Usar la opción data para enviar el cuerpo de la petición
  const res = await instance.delete(`/project/${id}/skills`, { data });
  return res.data;
}
