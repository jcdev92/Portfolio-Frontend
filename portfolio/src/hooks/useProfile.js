import axios from "axios";

// production url
const url = "https://portfolio-backend-3jrx-dev.fl0.io/api/v1"

// axios configuration 
const instance = axios.create({
  baseURL: url,
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


