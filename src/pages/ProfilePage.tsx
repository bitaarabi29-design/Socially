import { useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../Components/cards/PostCard";
import RecommendedUserCard from "../Components/cards/RecommendedUserCard";
import UserProfileCard from "../Components/cards/UserProfileCard";
import EditProfileModal from "../Components/modals/EditProfileModal";
import Container from "../Components/Ui/Container";
import { useSession } from "../hooks/useSession";
import { useFollowUser } from "../hooks/useFollowUser";
import { useUserProfile } from "../hooks/useUserProfile";
import { HeartIcon, PostIcon } from "../assets/icons";
import { useUserPosts } from "../hooks/usePost";
import { useUpdateProfile } from "../hooks/useUpdateProfile";
import type { Post } from "../types/post.types";

function Profile() {
  const { id } = useParams();
  const [showEditModal, setShowEditModal] = useState(false);
  const [section, setSection] = useState("posts");
  const { data: session } = useSession();
  const currentUserId = session?.data?.user?.id;
  const isCurrentUser = id === currentUserId;

  const { data: user, isLoading, error } = useUserProfile(id ?? "");
  const { data: posts } = useUserPosts(id ?? "");
  const updateProfileMutation = useUpdateProfile(id ?? "");
  const followMutation = useFollowUser(id ?? "");

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
          isCurrentUser={isCurrentUser}
          onEditClick={() => setShowEditModal(true)}
          onFollowClick={() => followMutation.mutate()}
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
          isSaving={updateProfileMutation.isPending}
          onClose={() => setShowEditModal(false)}
          onSave={(data) => {
            updateProfileMutation.mutate(data, {
              onSuccess: () => setShowEditModal(false),
            });
          }}
        />
      )}
    </Container>
  );
}

export default Profile;
