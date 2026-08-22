import { useState } from "react";
import PostCard from "../Components/cards/PostCard";
import RecommendedUserCard from "../Components/cards/RecommendedUserCard";
import UserProfileCard from "../Components/cards/UserProfileCard";
import Container from "../Components/Ui/Container";
import { useSession } from "../hooks/useSession";
import usePosts from "../hooks/usePost";

function Profile() {
  const { data: session } = useSession();

  const [section, setSection] = useState("");

  const userId = "f8o62nxp9o853e5TZVIqGKHYwQZncNT0";

  const { data: posts } = usePosts(userId);

  console.log("posts:", posts);

  return (
    <Container>
      <div className="col-span-5 flex flex-col gap-6 md:col-span-3">
        <UserProfileCard
          user={{
            id: "1",
            name: "John Doe",
            username: "johndoe",
            bio: "Software developer",
            location: "New York",
            followingCount: 100,
            followerCount: 500,
            isCurrentUser: true,
          }}
        />
        <div className="flex gap-4">
          <button onClick={() => setSection("posts")}>Posts</button>

          <button onClick={() => setSection("likes")}>Likes</button>
        </div>
        {section === "posts" && (
          <div>
            {posts?.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
        {/* <PostCard /> */}
      </div>
      {session && (
        <div className="hidden md:col-span-2 md:flex md:flex-col md:gap-6">
          <RecommendedUserCard />
        </div>
      )}
    </Container>
  );
}

export default Profile;
