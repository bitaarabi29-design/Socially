import { useState } from "react";
import PostCard from "../components/cards/PostCard";
import RecommendedUserCard from "../components/cards/RecommendedUserCard";
import UserProfileCard from "../components/cards/UserProfileCard";
import Container from "../components/Ui/Container"; 
import usePosts from "../hooks/usePost";
import useLikes from "../hooks/useLike";


function Profile() {
const [section, setSection] = useState("posts"); 
const { data: posts } = usePosts("1");
const { data: likes } = useLikes("1");

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
