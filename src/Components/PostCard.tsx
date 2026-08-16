import { HeartIcon, ChatIcon, SendIcon } from "../assets/icons";
import Button from "./Ui/Button";

function PostCard() {
  return (
    <div className=" w-full max-w-2xl rounded-2xl border border-base-300 bg-secondary-content p-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full"></div>

        <div className="flex flex-row items-center gap-4 ">
          <h3 className="text-base text-base-content font-semibold">
            Farshad Hosseini
          </h3>
          <span className="flex items-center gap-1 text-xs text-base-content-secondary">
            @f.e.h.farshad
          </span>
          <span className="text-base-content-secondary text-xs">
            . 8 days ago
          </span>
        </div>
      </div>

      <p className="text-base-content-secondary text-sm pl-16"> image</p>

      <div className="mt-4 flex items-center gap-4 p-3">
        <button className="flex flex-row gap-3 rounded-lg p-2 hover:bg-base-300">
          <HeartIcon />
          <span>1</span>
        </button>

        <button className="flex flex-row gap-3 rounded-lg p-2 hover:bg-base-300">
          <ChatIcon />
          <span>1</span>
        </button>
      </div>

      <div className="mt-8 border-t border-base-300 pt-4">
        <div className="flex items-start gap-4">
          <img />

          <textarea
            placeholder="Write a comment..."
            className="h-24 w-full resize-none rounded-xl border border-base-300 bg-transparent p-3 text-sm text-base-content-secondary outline-none focus:border-base-300 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="mt-4 flex justify-end">
          <Button icon={<SendIcon />}>Comment</Button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;