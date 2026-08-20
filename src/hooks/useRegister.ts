import { useMutation } from "@tanstack/react-query";
import { registerRequest } from "../api/authApi";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerRequest,
  });
};
