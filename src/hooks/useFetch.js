import axios from "axios";
export const url_api = import.meta.env.VITE_NODE_ENV === "production"
  ? import.meta.env.VITE_API_URL_PROD
  : import.meta.env.VITE_API_URL_DEV;

// axios configuration
const instance = axios.create({
  baseURL: `${url_api}/api/v1`,
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


export const getMany = (keyword) => {
    return async() => {
        const res = await instance.get(`/${keyword}`);
        const data = res.data;
        return data;
    };
};

export const getOne = (keyword) => {
    return async({id}) => {
        const res = await instance.get(`/${keyword}/${id}`)
        return res.data;
    };
}


export const addOne = (keyword) => {
    return async(data) => {
        const res = await instance.post(`/${keyword}`, data);
        return res.data;
    };
};



export const update = (keyword) => {
    return async({id, ...data}) => {
        const res = await instance.patch(`/${keyword}/${id}`, data);
        return res.data;
    };
};


export const deleteOne = (keyword) => {
    return async(id) => {
        const res = await instance.delete(`/${keyword}/${id}`);
        return res.data;
    };
};


// * ASOCIATE ENTITIES

// asociate skill to project
export const relateSkillToProject = async ({id, ...data}) => {
  const res = await instance.post(`/projects/${id}/skills`, data);
  return res.data;
}


// delete skill project asociation with axios
export const deleteRelation = async ({id, ...data}) => {
  // Usar la opción data para enviar el cuerpo de la petición
  const res = await instance.delete(`/projects/${id}/skills`, { data });
  return res.data;
}


// check if token is expired or not
export const checkToken = async () => {
    const res = await instance.post('/auth/checkToken');
    return res.data;
}
