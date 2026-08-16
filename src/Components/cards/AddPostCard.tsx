import { SendIcon } from "../../assets/icons";

function AddPostCard () {
    return(
        <div className="w-full rounded-xl border border-base-300 bg-base-100 p-4 md:p-3">
               <div className=" flex flex-col md:flex-row gap-8 md:gap-8">
                <img />
                 <textarea
                    placeholder="What's on your mind?"
                    className="text-neutral-6 resize-none outline-none focus:outline-none focus:border-0 focus:ring-0 border-none bg-transparent h-20 md:h-24 w-full overflow-y-auto p-3"
                  ></textarea>
                  </div>
                <div
                  className="border-t border-base-300 p-6 flex justify-end gap-2 mt-12 mx-4 md:mx-2"
                >
                  <button className="flex bg-base-content/50 px-6 py-2 rounded-lg gap-2 ">
                 <SendIcon/>
                   <p className="text-sm text-base-200"> Post</p>
                  </button>
                  </div>
         </div>
       
    )
    
}
export default AddPostCard;