import { LinkIcon, LocationIcon } from "../../assets/icons";
import { useUserProfile } from "../../hooks/useUserProfile";
import { useSession } from "../../hooks/useSession";

function SideProfileCard() {
  const { data: session } = useSession();
  const {
    data: user,
    isLoading,
    error,
  } = useUserProfile(session?.data?.user?.id ?? "");

  if (isLoading) {
    return (
      <div className="card bg-base-100 border-base-300 w-full border px-6 py-6">
        Loading...
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="card bg-base-100 border-base-300 w-full border px-6 py-6">
        Failed to load profile.
      </div>
    );
  }

  return (
    <div className="card bg-base-100 border-base-300 w-full border px-6 shadow-sm">
      <div className="card-body flex flex-col items-center gap-4 p-0 py-6 text-center">
        <div className="avatar">
          <div className="ring-base-content/50 ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-2">
            <img
              alt={user.name}
              src={
                user.image ??
                "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="card-title text-lg font-bold">{user.name}</h2>
          <p className="text-base-content/50">{user.email}</p>
        </div>

        <div className="divider my-0 w-full"></div>

        <div className="flex w-full items-center justify-around text-center">
          <div>
            <div className="text-lg font-bold">{user._count.followings}</div>
            <div className="text-base-content/50 text-xs">Followings</div>
          </div>

          <div className="divider divider-horizontal mx-0 h-10"></div>

          <div>
            <div className="text-lg font-bold">{user._count.followers}</div>
            <div className="text-base-content/50 text-xs">Followers</div>
          </div>
        </div>

        <div className="divider my-0 w-full"></div>

        <div className="mt-2 w-full space-y-3 text-left">
          <div className="text-base-content/70 flex items-center gap-2 text-sm">
            <LocationIcon className="text-base-content/70" />
            <span>{user.location ?? "No location"}</span>
          </div>
          <div className="text-base-content/70 flex items-center gap-2 text-sm">
            <LinkIcon className="text-base-content/70" />
            <span>{user.website ?? "No Website"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideProfileCard;
