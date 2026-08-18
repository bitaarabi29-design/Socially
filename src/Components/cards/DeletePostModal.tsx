
import Button from "../Ui/Button";

const DeletePostModal = () => {
  return (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 ">
      <div className="w-full max-w-md rounded-xl bg-secondary-content p-6 md:p-5 border border-base-300 shadow-md">
      
        <div>
          <h2 className="text-lg font-semibold text-base-content">
            Delete Post
          </h2>
          <p className="mt-1 text-base text-base-content/60">
            This Action Cannot be undone
          </p>
        </div>

        <div className="mt-6 flex justify-end gap-3 md:gap-2">
          <button className="rounded-lg border border-base-300 px-4 py-2 text-sm md:px-3">
            Cancel
          </button>

          <button className="rounded-lg bg-red-500 px-4 py-2 text-sm text-black md:px-3">
            Delete
          </button>
        </div>

      </div>
    </div>
  )
}

export default DeletePostModal;