/* eslint-disable no-undef */
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })
export const apiDev = process.env.API_URL_DEV;
export const apiProd = process.env.API_URL_PROD;
export const nodeEnv = process.env.NODE_ENV;
