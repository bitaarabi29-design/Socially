import { useRecommendedUser } from "../../hooks/useRecommendedUser";
import {RecommendedUserSkeleton} from "../ui/Skeleton";


function RecommendedUserCard() {
  const { data: recommendedUsers, error, isLoading } = useRecommendedUser();
  console.log(recommendedUsers);
  if (isLoading) {
    return <RecommendedUserSkeleton/>
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="border-base-300 bg-base-100 rounded-xl border p-6 shadow-sm md:p-4">
      <h3 className="text-base-content mb-6 truncate text-xs font-semibold md:text-base md:whitespace-nowrap">
        Who to Follow
      </h3>
      <div className="flex flex-col gap-5">
        {recommendedUsers?.map((user) => (
          <div
            key={user.id}
            className="flex min-w-0 items-center justify-between"
          >
            <div className="flex min-w-0 items-center gap-3">
              <img
                src="./src/assets/icons/picture.svg"
                alt="picture"
                className="hidden h-10 w-10 rounded-full object-cover md:block"
              />

              <div className="flex min-w-0 flex-col gap-1">
                <p className="text-base-content truncate text-sm">
                  @{user.name}
                </p>

                <span className="text-base-content/60 hidden text-xs md:block">
                  {user._count.followers} followers
                </span>
              </div>
            </div>

            <button className="bg-base-300 text-base-content shrink-0 rounded-md px-2 py-1 text-[10px] md:rounded-lg md:px-3 md:py-1.5 md:text-xs">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RecommendedUserCard;
