import api from "../lib/axios";
import type { loginTypes, registerTypes } from "../types/authTypes";

export const loginRequest = (data: loginTypes) => {
  return api.post("/authentication/login", data);
};

export const registerRequest = (data: registerTypes) => {
  return api.post("/authentication/register", data);
};

export const getSessionRequest = async () => {
  const response = await api.post("/authentication/session");
  return response.data;
};

export const logoutRequest = (data: loginTypes) => {
  return api.post("/authentication/logout", data);
};
