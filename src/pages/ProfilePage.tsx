
import { useState } from "react";
import PostCard from "../Components/cards/PostCard";
import RecommendedUserCard from "../Components/cards/RecommendedUserCard";
import UserProfileCard from "../Components/cards/UserProfileCard";
import EditProfileModal from "../Components/modals/EditProfileModal";
import Container from "../Components/Ui/Container";
import { useSession } from "../hooks/useSession";
import { useUserProfile } from "../hooks/useUserProfile";
import { updateUserProfile } from "../api/usersApi";
import { useQueryClient } from "@tanstack/react-query";
import { HeartIcon, PostIcon } from "../assets/icons";
import { useUserPosts } from "../hooks/usePost";
import type { Post } from "../types/post.types";


function Profile() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [section, setSection] = useState("posts");
  const { data: session } = useSession();
  const userId = session?.data?.user?.id;
  const { data: user, isLoading, error } = useUserProfile(userId ?? "");
  const { data: posts } = useUserPosts(userId);
  const queryClient = useQueryClient();

  if (isLoading) {
    return (
      <Container>
        <p>Loading profile...</p>
      </Container>
    );
  }

  if (error || !user) {
    return (
      <Container>
        <p>Failed to load profile.</p>
      </Container>
    );
  }

  return (
    <Container>
      <div className="col-span-5 flex flex-col gap-6 md:col-span-3">
        <UserProfileCard
          user={user}
          isCurrentUser={true}
          onEditClick={() => setShowEditModal(true)}
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
            {posts?.map((post: Post) => (
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

      {showEditModal && (
        <EditProfileModal
          user={user}
          onClose={() => setShowEditModal(false)}
          onSave={async (data) => {
            await updateUserProfile(user.id, data);
            await queryClient.invalidateQueries({
              queryKey: ["Profile", user.id],
            });
            setShowEditModal(false);
          }}
        />
      )}
    </Container>
  );
}

export default Profile;
