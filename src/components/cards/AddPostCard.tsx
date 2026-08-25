import { useState } from "react";
import { SendIcon } from "../../assets/icons";
import { useCreatePost } from "../../hooks/usePost";
import Button from "../ui/Button";

function AddPostCard() {
  const [content, setContent] = useState("");

  const { mutate: createPost, isPending } = useCreatePost();

  const isPostDisabled = content.trim().length === 0 || isPending;

  function handleCreatePost() {
    const trimmedContent = content.trim();

    if (!trimmedContent) return;

    createPost(trimmedContent, {
      onSuccess: () => {
        setContent("");
      },
    });
  }

  return (
    <div className="border-base-300 bg-base-100 w-[550px] max-w-full rounded-xl border p-6 shadow-sm">
      <div className="flex h-[100px] items-start gap-4">
        <img
          src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
          alt="Current user"
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />

        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="What's on your mind?"
          className="text-base-content placeholder:text-base-content/50 h-full min-w-0 flex-1 resize-none border-none bg-transparent p-0 text-sm outline-none focus:outline-none"
        />
      </div>

      <div className="border-base-300 mt-4 border-t pt-4">
        <div className="flex justify-end">
          <Button
            icon={<SendIcon />}
            disabled={isPostDisabled}
            loading={isPending}
            onClick={handleCreatePost}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddPostCard;
