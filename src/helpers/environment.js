import { DEVELOPMENT_ENV, PRODUCTION_ENV } from "./constants";

export const isDevelopment = () => process.env.NODE_ENV === DEVELOPMENT_ENV;
export const isProduction = () => process.env.NODE_ENV === PRODUCTION_ENV;