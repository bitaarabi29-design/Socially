import Button from "../ui/Button";

const DeletePostModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className="bg-secondary-content border-base-300 w-full max-w-md rounded-xl border p-6 shadow-md md:p-5">
        <div>
          <h2 className="text-base-content text-lg font-semibold">
            Delete Post
          </h2>
          <p className="text-base-content/60 mt-1 text-base">
            This Action Cannot be undone
          </p>
        </div>

        <div className="mt-6 flex justify-end gap-3 md:gap-2">
          <button className="border-base-300 rounded-lg border px-4 py-2 text-sm md:px-3">
            Cancel
          </button>

          <button className="rounded-lg bg-red-500 px-4 py-2 text-sm text-black md:px-3">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePostModal;
