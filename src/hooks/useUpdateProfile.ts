import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfile } from "../api/usersApi";

export const useUpdateProfile = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { name?: string; bio?: string; location?: string }) =>
      updateUserProfile(userId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Profile", userId] });
    },
  });
};
