import { SendIcon } from "../../assets/icons";
function AddPostCard() {
  return (
    <div className="border-base-300 bg-base-100 w-full max-w-2xl rounded-xl border p-4 md:p-3">
      <div className="flex flex-col gap-8 md:flex-row md:gap-8">
        <img />
        <textarea
          placeholder="What's on your mind?"
          className="text-neutral-6 h-20 w-full resize-none overflow-y-auto border-none bg-transparent p-3 outline-none focus:border-0 focus:ring-0 focus:outline-none md:h-24"
        ></textarea>
      </div>
      <div className="border-base-300 mx-4 mt-12 flex justify-end gap-2 border-t p-6 md:mx-2">
        <button className="bg-base-content/50 flex gap-2 rounded-lg px-6 py-2">
          <SendIcon />
          <p className="text-base-200 text-sm"> Post</p>
        </button>
      </div>
    </div>
  );
}
export default AddPostCard;
