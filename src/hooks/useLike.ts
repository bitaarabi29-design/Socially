import { useQuery } from "@tanstack/react-query";
import { getUserLikes } from "../api/userApi";

function useLikes() {
  return useQuery({
    queryKey: ["likes"],
    queryFn: getUserLikes
     
 })
}

export default useLikes;