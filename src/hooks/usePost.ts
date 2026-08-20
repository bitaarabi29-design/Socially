import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../api/userApi";

  function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getUserPosts
     
})
}

export default usePosts;