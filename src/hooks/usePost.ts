import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../api/postApi";

function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });
}

export default usePosts;