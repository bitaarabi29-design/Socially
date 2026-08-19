import { useState } from "react";
import PostCard from "../components/cards/PostCard";
import RecommendedUserCard from "../components/cards/RecommendedUserCard";
import UserProfileCard from "../components/cards/UserProfileCard";
import Container from "../components/Ui/Container"; 
import {useQuery} from "@tanstack/react-query";
import  axios  from "axios";



function Profile() {
const [section, setSection] = useState("posts"); 

const { data : posts, error } = useQuery({
  queryKey: ["posts"],
  queryFn: async () => {
    const res = await axios.get(
      ""
    );

    return res.data;
  },
});

const { data: likes } = useQuery({
  queryKey: ["likes"],
  queryFn: async () => {
    const res = await axios.get(
      ""
    );
    return res.data;
  },
});
console.log("posts:", posts);
console.log("likes:", likes);

  return (
     <Container>
        <div className="col-span-3 flex flex-col gap-6">
          <UserProfileCard user={{ id: "1", name: "John Doe", username: "johndoe", bio: "Software developer", location: "New York", followingCount: 100, followerCount: 500, isCurrentUser: true }} />
          
          <div className="flex flex-row gap-4">
            <button onClick={() => setSection("posts")}>
            Posts
            </button>
            <button onClick={() => setSection("likes")}>
           Likes
            </button>
          </div>
      

          {error && <p className="text-red-500"> {error.message}</p>}
         
          {section === "posts" && (
          <div>
                {posts?.map((post) => (
              <PostCard  post={post} />
            ))}
           </div>
          )}

          {section === "likes" && (
           <div>
              {likes?.map((post) => (
              <PostCard post={post} />
           ))}
           </div>
          )}
          
         
        </div>
         
        <div className="col-span-2 flex flex-col gap-6">
          <RecommendedUserCard />
        </div>
    
    </Container>
  );
}

export default Profile;
