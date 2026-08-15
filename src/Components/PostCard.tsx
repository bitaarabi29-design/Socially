
function PostCard() {    
    return (
<div className=" w-full max-w-2xl rounded-2xl border border-base-300 bg-secondary-content p-4">
<div className="flex items-center gap-3">

<div className="h-10 w-10 rounded-full"></div>

<div className="flex flex-row items-center gap-4 ">
<h3 className="text-base text-base-content font-semibold">Farshad Hosseini</h3>
<span className="flex items-center gap-1 text-xs text-base-content-secondary">@f.e.h.farshad</span>
<span className="text-base-content-secondary text-xs"> . 8 days ago</span>
</div>
</div>

 <p className="text-base-content-secondary text-sm pl-16"> image</p>


 <div className="flex flex-row p-3 mt-4 gap-8">
        <img src="./src/assets/icons/heart.svg" alt="heart" className="hover:bg-base-300 rounded-2xl"/>
        <img src="./src/assets/icons/chat.svg" alt="chat" className="hover:bg-base-300 rounded-2xl"/>
      </div>

</div>
    )}


export default PostCard;