import { useState } from "react";
import PostCard from "../Components/cards/PostCard";
import RecommendedUserCard from "../Components/cards/RecommendedUserCard";
import UserProfileCard from "../Components/cards/UserProfileCard";
import Container from "../Components/Ui/Container";
import { useSession } from "../hooks/useSession";
import { HeartIcon, PostIcon } from "../assets/icons";
import usePosts from "../hooks/usePost";
import useLikes from "../hooks/useLike";

function Profile() {
  const { data: session } = useSession();

  const [section, setSection] = useState("");
  const userId = session?.data?.user?.id;

  const { data: posts, isLoading: postsLoading, postsError } = usePosts(userId);
  const { data: likes, isLoading: likesLoading, likesError } = useLikes(userId);
  const isLoading = postsLoading || likesLoading;

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
            className={`text-base-content-secondary gap-2border-b-2 flex items-center pb-3 ${
              section === "posts"
                ? "border-white text-white"
                : "text-base-content-secondary"
            }`}
          >
            <PostIcon /> Posts
          </button>

          <button
            onClick={() => setSection("likes")}
            className={`text-base-content-secondary flex items-center gap-2 border-b-2 pb-3 ${
              section === "likes"
                ? "border-white text-white"
                : "text-base-content-secondary"
            }`}
          >
            <HeartIcon /> Likes
          </button>
        </div>
        {section === "posts" && (
          <div>
            {isLoading && (
              <p className="text-base-content/60 text-center">Loading...</p>
            )}
            {postsError && (
              <p className="text-center text-red-500">Failed to load posts</p>
            )}
            {!isLoading &&
              !likesError &&
              posts?.map((post) => <PostCard key={post.id} post={post} />)}
          </div>
        )}
        {section === "likes" && (
          <div>
            {isLoading && (
              <p className="text-base-content/60 text-center">Loading...</p>
            )}
            {likesError && (
              <p className="text-center text-red-500">Failed to load likes</p>
            )}
            {!isLoading &&
              !likesError &&
              likes?.map((post) => <PostCard key={post.id} post={post} />)}
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
