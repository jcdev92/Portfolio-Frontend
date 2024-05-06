import { apiDev, apiProd, nodeEnv } from "../utils/env";

export const api = nodeEnv === "production" ? apiProd : apiDev;