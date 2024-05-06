import { apiDev, apiProd, nodeEnv } from "../utils/env";

const api = nodeEnv === "production" ? apiProd : apiDev;
export default api;