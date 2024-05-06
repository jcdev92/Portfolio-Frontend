/* eslint-disable no-undef */
export const api = process.env.NODE_ENV === "production"
  ? process.env.API_URL_PROD
  : process.env.API_URL_DEV;
