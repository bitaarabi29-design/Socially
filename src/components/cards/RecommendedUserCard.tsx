function RecommendedUserCard() {
  return (     <div className="rounded-xl border border-base-300 bg-base-100 p-6 md:p-4 shadow-sm">
      <h3 className="mb-6 text-xs md:text-base font-semibold text-base-content md:whitespace-nowrap truncate">
        Who to Follow
      </h3>
      <div className="flex flex-col gap-5">
        <div className="flex  min-w-0 items-center justify-between">
          <div className="flex  min-w-0 items-center gap-3">
            <img
              src="./src/assets/icons/picture.svg"
              alt="picture"
              className="h-10 w-10 rounded-full object-cover hidden md:block"
            />

            <div className="flex min-w-0 flex-col gap-1">
              <p className="truncate text-sm text-base-content">
                @mohammadfallah.w
              </p>

              <span className="text-xs text-base-content/60 hidden md:block">
                1 followers
              </span>
              
            </div>
          </div>

        <button className="shrink-0 rounded-md bg-base-300 px-2 py-1 text-[10px] text-base-content md:rounded-lg md:px-3 md:py-1.5 md:text-xs">
            Follow
          </button>
        </div>   </div>
    </div>

    
  );
}
export default RecommendedUserCard;