import { useState } from "react";
import { ChatIcon, HeartIcon, SendIcon } from "../../assets/icons";
import type { PostCardProps } from "../../types/post.types";
import Button from "../Ui/Button";

function formatTimeAgo(date: string) {
  const now = Date.now();
  const postDate = new Date(date).getTime();

  const diff = now - postDate;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;

  return `${days} days ago`;
}

function PostCard({ post }: PostCardProps) {
  const [comment, setComment] = useState("");

  const isCommentDisabled = comment.trim().length === 0;

  const avatarLetter = post.author.name?.charAt(0).toUpperCase() || "U";

  return (
    <article className="border-base-300 bg-base-100 w-[550px] max-w-full rounded-xl border p-6 shadow-sm">
      <div className="flex items-start gap-4">
        {post.author.image ? (
          <img
            src={post.author.image}
            alt={post.author.name}
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="bg-primary text-primary-content flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg">
            {avatarLetter}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex h-6 items-center">
            <h3 className="text-base-content text-base font-semibold">
              {post.author.name}
            </h3>

            <span className="text-base-content/50 ml-3 text-xs">
              {post.author.email}
            </span>

            <span className="text-base-content/50 mx-3 text-xs">•</span>

            <span className="text-base-content/50 text-xs">
              {formatTimeAgo(post.createdAt)}
            </span>
          </div>

          <p className="text-base-content mt-1 text-sm">{post.content}</p>
        </div>
      </div>

      <div className="mt-4 flex h-8 items-center gap-4">
        <button
          type="button"
          className="hover:bg-base-300 flex h-8 items-center gap-2 rounded-md px-2"
          aria-label="Like post"
        >
          <HeartIcon className="h-4 w-4" />
          <span className="text-sm">{post._count.likes}</span>
        </button>

        <button
          type="button"
          className="hover:bg-base-300 flex h-8 items-center gap-2 rounded-md px-2"
          aria-label="Comment on post"
        >
          <ChatIcon className="h-4 w-4" />
          <span className="text-sm">{post._count.comments}</span>
        </button>
      </div>

      <div className="border-base-300 mt-4 border-t" />

      <div className="mt-4">
        <div className="flex h-[100px] w-full items-start gap-4">
          <div className="bg-primary text-primary-content flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg">
            U
          </div>

          <textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Write a comment..."
            className="border-base-300 text-base-content placeholder:text-base-content/50 h-[100px] min-w-0 flex-1 resize-none rounded-md border bg-transparent p-3 text-sm outline-none focus:outline-none"
          />
        </div>

        <div className="mt-4 flex justify-end">
          <Button icon={<SendIcon />} disabled={isCommentDisabled}>
            Comment
          </Button>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
