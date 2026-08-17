import type { UserProfile } from "../../types";
import Button from "../Ui/Button";

type UserProfileCardProps = {
  user: UserProfile;
  onEditClick?: () => void;
  onFollowClick?: () => void;
};

function UserProfileCard({
  user,
  onEditClick,
  onFollowClick,
}: UserProfileCardProps) {
  return (
    <div className="w-full max-w-2xl rounded-2xl border border-base-300 bg-base-100 p-6">
      <div className="flex items-start justify-between">
        <div className="h-20 w-20 rounded-full bg-base-300"></div>

        {user.isCurrentUser ? (
          <Button variant="secondary" size="sm" onClick={onEditClick}>
            Edit Profile
          </Button>
        ) : (
          <Button variant="primary" size="sm" onClick={onFollowClick}>
            Follow
          </Button>
        )}
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold text-base-content">
          {user.name}
        </h2>
        <p className="text-sm text-base-content-secondary">
          @{user.username}
        </p>
      </div>

      {user.bio && (
        <p className="mt-3 text-sm text-base-content">{user.bio}</p>
      )}

      {user.location && (
        <p className="mt-2 text-sm text-base-content-secondary">
          {user.location}
        </p>
      )}

      <div className="mt-4 flex gap-4 text-sm">
        <span className="text-base-content">
          <strong>{user.followingCount}</strong>{" "}
          <span className="text-base-content-secondary">Following</span>
        </span>
        <span className="text-base-content">
          <strong>{user.followersCount}</strong>{" "}
          <span className="text-base-content-secondary">Followers</span>
        </span>
      </div>
    </div>
  );
}

export default UserProfileCard;