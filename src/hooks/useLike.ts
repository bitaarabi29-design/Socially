import { useQuery } from "@tanstack/react-query";
import { getUserLikes } from "../api/socialApi";

function useUserLikes(userId: string) {
  return useQuery({
    queryKey: ["likes", userId],
    queryFn: () => getUserLikes(userId),
    enabled: Boolean(userId),
  });
}

export default useUserLikes;
