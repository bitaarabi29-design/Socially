import PostCard from "../Components/cards/PostCard";
import RecommendedUserCard from "../Components/cards/RecommendedUserCard";
import UserProfileCard from "../Components/cards/UserProfileCard";
import EditProfileModal from "../Components/modals/EditProfileModal";
import Container from "../Components/Ui/Container";
import { useSession } from "../hooks/useSession";
import { useUserProfile } from "../hooks/useUserProfile";
import { useState } from "react";
import { updateUserProfile } from "../api/usersApi";
import { useQueryClient } from "@tanstack/react-query";

function Profile() {
  const [showEditModal, setShowEditModal] = useState(false);
  const { data: session } = useSession();
  const { data: user, isLoading, error } = useUserProfile(session?.id ?? "");
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
        <PostCard />
      </div>

      <div className="hidden md:col-span-2 md:flex md:flex-col md:gap-6">
        <RecommendedUserCard />
      </div>

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
