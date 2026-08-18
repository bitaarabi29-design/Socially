function RecommendedUserCard() {
  return (
      <div className="rounded-xl border border-base-300 bg-base-100 p-6 md:p-4 shadow-sm">
      <h3 className="mb-6 text-xs md:text-base font-semibold text-base-content md:whitespace-nowrap truncate">
        Who to Follow
      </h3>
      <div className="flex items-center gap-4 md:gap-16">
        <div className="flex items-center gap-3">
          <img />
          <div className="flex flex-col gap-3 ml-4">
            <p className="text-base-content-secondary ">@mohammadfallah.w</p>
            <span className="text-base-content-secondary">1 followers</span>
          </div>

        <button className="shrink-0 rounded-md bg-base-300 px-2 py-1 text-[10px] text-base-content md:rounded-lg md:px-3 md:py-1.5 md:text-xs">
            Follow
          </button>
        </div>
        
      </div>
    </div>

    
  );
}
export default RecommendedUserCard;
