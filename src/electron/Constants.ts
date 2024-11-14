import { isDev } from "./util.js";

export const baseUrl = isDev() ? "http://localhost:8000" : "https://cinephoria.jeremysnnk.ovh";
export const COOKIE_JWT = 'jwt';
export const COOKIE_USER = 'user';