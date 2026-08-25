import { useState } from "react";
import { ChatIcon, HeartIcon, SendIcon, TrashIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

import {
  useCreateComment,
  useDeletePost,
  useToggleLikePost,
} from "../../hooks/usePost";

import { useSession } from "../../hooks/useSession";
import type { PostCardProps } from "../../types/post.types";
import { formatTimeAgo } from "../../utils/formatTimeAgo";

import Button from "../ui/Button";

function PostCard({ post }: PostCardProps) {
  const [comment, setComment] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  const { data: session } = useSession();

  const { mutate: toggleLike, isPending: isLikePending } = useToggleLikePost();

  const { mutate: createComment, isPending: isCommentPending } =
    useCreateComment();

  const { mutate: deletePost, isPending: isDeletePending } = useDeletePost();

  const isCommentDisabled = comment.trim().length === 0 || isCommentPending;

  const avatarLetter = post.author.name?.charAt(0).toUpperCase() || "U";

  const isOwner = session?.data?.user?.id === post.authorId;

  function handleLike() {
    toggleLike(post.id);
  }

  function handleComment() {
    const trimmedComment = comment.trim();

    if (!trimmedComment) return;

    createComment(
      {
        postId: post.id,
        content: trimmedComment,
      },
      {
        onSuccess: () => {
          setComment("");
        },
      },
    );
  }

  function handleDelete() {
    if (!isOwner) return;

    deletePost(post.id, {
      onSuccess: () => {
        setShowDeleteModal(false);
      },
    });
  }

  return (
    <>
      <article className="border-base-300 bg-base-100 w-[550px] max-w-full rounded-xl border p-6 shadow-sm">
        <div
          className="flex items-start gap-4 cursor-pointer"
          onClick={() => navigate(`/profile/${post.authorId}`)}
        >
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

          {isOwner && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowDeleteModal(true);
              }}
              className="text-base-content/60 hover:text-error"
              aria-label="Delete post"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="mt-4 flex h-8 items-center gap-4">
          <button
            type="button"
            onClick={handleLike}
            disabled={isLikePending}
            className="hover:bg-base-300 flex h-8 items-center gap-2 rounded-md px-2 disabled:opacity-50"
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
          <div className="flex h-25 w-full items-start gap-4">
            <div className="bg-primary text-primary-content flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg">
              U
            </div>

            <textarea
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              placeholder="Write a comment..."
              className="border-base-300 text-base-content placeholder:text-base-content/50 h-25 min-w-0 flex-1 resize-none rounded-md border bg-transparent p-3 text-sm outline-none focus:outline-none"
            />
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              icon={<SendIcon />}
              disabled={isCommentDisabled}
              loading={isCommentPending}
              onClick={handleComment}
            >
              Comment
            </Button>
          </div>
        </div>
      </article>

      {isOwner && showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="bg-secondary-content border-base-300 w-full max-w-md rounded-xl border p-6 shadow-md md:p-5">
            <div>
              <h2 className="text-base-content text-lg font-semibold">
                Delete Post
              </h2>

              <p className="text-base-content/60 mt-1 text-base">
                This action cannot be undone
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-3 md:gap-2">
              <button
                type="button"
                disabled={isDeletePending}
                onClick={() => setShowDeleteModal(false)}
                className="border-base-300 rounded-lg border px-4 py-2 text-sm disabled:opacity-50 md:px-3"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={isDeletePending}
                onClick={handleDelete}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm text-black disabled:opacity-50 md:px-3"
              >
                {isDeletePending ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostCard;