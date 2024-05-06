export const api = import.meta.env.NODE_ENV === "production"
  ? import.meta.env.API_URL_PROD
  : import.meta.env.API_URL_DEV;
