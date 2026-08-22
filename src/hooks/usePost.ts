import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../api/socialApi";

function usePosts(userId: number) {
  return useQuery({
    queryKey: ["posts", userId],
    queryFn: () => getUserPosts(userId),
  });
}

export default usePosts;
