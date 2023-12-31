import axios from "axios";

// production url
const url = "https://portfolio-backend-dev-zgzm.2.us-1.fl0.io/api/v1"

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



// get profile with the axios configuration

export const getProfile = async () => {
  const res = await instance.get('/user');
  return res.data.data[0];
}


// update profile with the axios configuration

export const updateProfile = async ({id, ...profile}) => {
  const res = await instance.patch(`/user/${id}`, profile);
  return res.data;
}


