import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../api/postApi";
import { getUserPosts } from "../api/socialApi";

export function useAllPosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });
}

export function useUserPosts(userId: string) {
  return useQuery({
    queryKey: ["posts", userId],
    queryFn: () => getUserPosts(userId),
    enabled: Boolean(userId),
  });
}