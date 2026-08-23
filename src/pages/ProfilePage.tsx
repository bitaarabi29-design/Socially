import { useState } from "react";
import PostCard from "../Components/cards/PostCard";
import RecommendedUserCard from "../Components/cards/RecommendedUserCard";
import UserProfileCard from "../components/cards/UserProfileCard";
import Container from "../Components/Ui/Container";
import { useSession } from "../hooks/useSession";
import { HeartIcon, PostIcon } from "../assets/icons";
import { useUserPosts } from "../hooks/usePost";
import type { Post } from "../types/post.types";


function Profile() {
  const { data: session } = useSession();

  const [section, setSection] = useState("");
  const userId = session?.data?.user?.id;

  const { data: posts } = useUserPosts(userId);

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
        <div className="border-base-300 flex gap-4 border-b px-6 py-3">
          <button
            onClick={() => setSection("posts")}
            className="text-base-content-secondary flex items-center gap-2"
          >
            <PostIcon /> Posts
          </button>

          <button
            onClick={() => setSection("likes")}
            className="text-base-content-secondary flex items-center gap-2"
          >
            <HeartIcon /> Likes
          </button>
        </div>
        {section === "posts" && (
          <div>
            {posts?.map((post:Post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
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
