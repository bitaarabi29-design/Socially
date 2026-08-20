import { useMutation } from "@tanstack/react-query";
import { logoutRequest } from "../api/authApi";

export const useLogin = () => {
  return useMutation({
    mutationFn: logoutRequest,
  });
};
