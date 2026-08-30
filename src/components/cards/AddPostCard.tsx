import { useState } from "react";
import { SendIcon } from "../../assets/icons";
import { useCreatePost } from "../../hooks/usePost";
import Button from "../ui/Button";
import { useUploadImage } from "../../hooks/useUploadeImage";

function AddPostCard() {
  const [content, setContent] = useState("");
  const [postImageId, setPostImageId] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { mutate: createPost, isPending: isCreatingPost } = useCreatePost();
  const {
    mutate: uploadImage,
    isPending: isUploadingImage,
    isError: isImageUploadError,
  } = useUploadImage();
  const isPostDisabled =
    content.trim().length === 0 ||
    isCreatingPost ||
    isUploadingImage ;

  function handleCreatePost() {
    const trimmedContent = content.trim();

    if (!trimmedContent) return;

    createPost(
      {
        content: trimmedContent,
        image: postImageId,
      },
      {
        onSuccess: () => {
          setContent("");
          setPostImageId(null);
          setPreviewUrl(null);
        },
      },
    );
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));
    uploadImage(file, {
      onSuccess: (imageId) => {
        setPostImageId(imageId);
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
      <div>
        <label
          htmlFor="post-image"
          className="btn btn-ghost text-base-content/50 btn-sm cursor-pointer"
        >
          {isUploadingImage
            ? "Uploading..."
            : postImageId
              ? "Change image"
              : "Add image"}
        </label>

        <input
          id="post-image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
      {previewUrl && (
        <div className="mt-4">
          <img
            src={previewUrl}
            alt="Selected image"
            className="max-h-64 w-full rounded-lg object-cover"
          />
        </div>
      )}
      {isImageUploadError&& (<p className="text-error text-sm mt-2">Upload failed.Please choose the image again.</p>)}
      <div className="border-base-300 mt-4 border-t pt-4">
        <div className="flex justify-end">
          <Button
            icon={<SendIcon />}
            disabled={isPostDisabled || isUploadingImage}
            loading={isCreatingPost}
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
