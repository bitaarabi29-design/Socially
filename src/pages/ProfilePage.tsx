import { useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/cards/PostCard";
import RecommendedUserCard from "../components/cards/RecommendedUserCard";
import UserProfileCard from "../components/cards/UserProfileCard";
import EditProfileModal from "../components/modals/EditProfileModal";
import Container from "../components/ui/Container";
import { useSession } from "../hooks/useSession";
import { useFollowUser } from "../hooks/useFollowUser";
import { useUserProfile } from "../hooks/useUserProfile";
import { HeartIcon, PostIcon } from "../assets/icons";
import { useUserPosts } from "../hooks/usePost";
import useUserLikes from "../hooks/useLike";
import { useUpdateProfile } from "../hooks/useUpdateProfile";
import type { Post } from "../types/post.types";
import { useUserLikes } from "../hooks/useLike";

function Profile() {
  const { id } = useParams();
  
  const [showEditModal, setShowEditModal] = useState(false);
  const [section, setSection] = useState<"posts" | "likes">("posts");
  const { data: session } = useSession();

  const currentUserId = session?.data?.user?.id;
  const isCurrentUser = id === currentUserId;

  const { data: user, isLoading, error } = useUserProfile(id ?? "");
  const {
    data: posts,
    isLoading: isPostsLoading,
    error: postsError,
  } = useUserPosts(id ?? "");
const {
  data: likes,
  isLoading: isLikesLoading,
  error: likesError,
} = useUserLikes(id ?? "");
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
        <div className="border-base-300 flex gap-4 border-b px-6">
          <button
            onClick={() => setSection("posts")}

            className={`text-base-content-secondary flex items-center gap-2 border-b-2 pb-3 ${
              section === "posts"
                ? "border-white text-white"
                : "text-base-content-secondary border-transparent"
            }`}
          >
            <PostIcon /> Posts
          </button>

          <button
            onClick={() => setSection("likes")}
            className={`text-base-content-secondary -mb-px flex items-center gap-2 border-b-2 pb-3 ${
              section === "likes"
                ? "border-white text-white"
                : "text-base-content-secondary border-transparent"
            }`}
          >
            <HeartIcon /> Likes
          </button>
        </div>
        {section === "posts" && (
          <div>
            {isPostsLoading && <p>Loading posts...</p>}

            {postsError && <p>Failed to load posts.</p>}

            {!isPostsLoading && !postsError && posts?.length === 0 && (
              <p>No posts yet.</p>
            )}
            {!isPostsLoading &&
              !postsError &&
              posts?.map((post: Post) => (
                <PostCard key={post.id} post={post} />
              ))}
          </div>
        )}

        {section === "likes" && (
          <div>
            {isLikesLoading && <p>Loading liked posts...</p>}

            {likesError && <p>Failed to load liked posts.</p>}

            {!isLikesLoading && !likesError && likes?.length === 0 && (
              <p>No liked posts yet.</p>
            )}
            {!isLikesLoading &&
              !likesError &&
              likes?.map((post: Post) => (
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
