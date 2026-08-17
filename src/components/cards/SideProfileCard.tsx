import { LinkIcon, LocationIcon } from "../../assets/icons";

function SideProfileCard() {
  return (
    <div className="card bg-base-100 border-base-300 w-full border px-6 shadow-sm">
      <div className="card-body flex flex-col items-center gap-4 p-0 py-6 text-center">
        <div className="avatar">
          <div className="ring-base-content/50 ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-2">
            <img
              alt="Tailwind-CSS-Avatar-component"
              src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="card-title text-lg font-bold">Farhan</h2>
          <p className="text-base-content/50">farhanesmd3</p>
        </div>

        <div className="divider my-0 w-full"></div>

        <div className="flex w-full items-center justify-around text-center">
          <div>
            <div className="text-lg font-bold">1</div>
            <div className="text-base-content/50 text-xs">Followings</div>
          </div>

          <div className="divider divider-horizontal mx-0 h-10"></div>

          <div>
            <div className="text-lg font-bold">1</div>
            <div className="text-base-content/50 text-xs">Followers</div>
          </div>
        </div>

        <div className="divider my-0 w-full"></div>

        <div className="mt-2 w-full space-y-3 text-left">
          <div className="text-base-content/70 flex items-center gap-2 text-sm">
            <LocationIcon className="text-base-content/70" />
            <span>Rasht</span>
          </div>
          <div className="text-base-content/70 flex items-center gap-2 text-sm">
            <LinkIcon className="text-base-content/70" />
            <span>No Website</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideProfileCard;
