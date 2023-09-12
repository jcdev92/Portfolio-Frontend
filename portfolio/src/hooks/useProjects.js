import axios from "axios";

// devlopment url
// const url = "http://localhost:9000/api/v1/project";

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


// delete asociation without axios
export const deleteSkillToProject = async ({id, ...data}) => {
  const res = await fetch(`/project/${id}/skills`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "authorization": `jwt ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(data)
  });
  return res.json();
}
