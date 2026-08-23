import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../api/socialApi";

function usePosts(userId: string) {
  return useQuery({
    queryKey: ["posts", userId],
    queryFn: () => getUserPosts(userId),
      enabled: !!userId,
  });
}

export default usePosts;