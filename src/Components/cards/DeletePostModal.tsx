import React from 'react'

const DeletePostModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
       <div className="w-full max-w-md rounded-xl bg-secondary-content p-6 md:p-5">
        <h2 className='text-base-content text-lg font-semibold '>Delete Post</h2>
        <p className='text-base-content-secondary text-base '>This Action Can not be undone</p>
        </div>  
        <div className="mt-6 flex justify-end gap-3 md:gap-2">
         <button>Cancle</button>
          <button className="rounded-lg bg-red-500  py-2 text-sm text-black px-4 md:px-3">Delete</button>
         </div>
     
    </div>
  )
}

export default DeletePostModal;