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
    <div className="border-base-300 bg-base-100 w-full max-w-2xl rounded-2xl border p-6">
      <div className="flex items-start justify-between">
        <div className="bg-base-300 h-20 w-20 rounded-full"></div>

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
        <h2 className="text-base-content text-lg font-semibold">{user.name}</h2>
        <p className="text-base-content-secondary text-sm">@{user.username}</p>
      </div>

      {user.bio && <p className="text-base-content mt-3 text-sm">{user.bio}</p>}

      {user.location && (
        <p className="text-base-content-secondary mt-2 text-sm">
          {user.location}
        </p>
      )}

      <div className="mt-4 flex gap-4 text-sm">
        <span className="text-base-content">
          <strong>{user.followingCount}</strong>{" "}
          <span className="text-base-content-secondary">Following</span>
        </span>
        <span className="text-base-content">
          <strong>{user.followerCount}</strong>{" "}
          <span className="text-base-content-secondary">Followers</span>
        </span>
      </div>
    </div>
  );
}

export default UserProfileCard;
