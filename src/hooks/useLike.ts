import { useQuery } from "@tanstack/react-query";
import { getUserLikes } from "../api/socialApi";

function useLikes() {
  return useQuery({
    queryKey: ["likes"],
    queryFn: getUserLikes,
  });
}

export default useLikes;
