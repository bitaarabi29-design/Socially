function RecommendedUserCard() {
  return (
    <div className=" w-full  rounded-xl border border-base-300 bg-base-100">
      <h3 className="text-base-content mb-4 p-8 font-semibold text-base">
        Who to Follow
      </h3>
      <div className="flex items-center  gap-16">
        <div className="flex items-center gap-3">
          <img />
          <div className="flex flex-col gap-3 ml-4">
            <p className="text-base-content-secondary ">@mohammadfallah.w</p>
            <span className="text-base-content-secondary">1 followers</span>
          </div>
        </div>
        <button className="rounded-lg bg-base-300 px-4 py-2 text-sm text-base-content ">
          Follow
        </button>
      </div>
    </div>
  );
}
export default RecommendedUserCard;
