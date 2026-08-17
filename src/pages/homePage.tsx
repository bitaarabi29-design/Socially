import AddPostCard from "../components/cards/AddPostCard";
import PostCard from "../components/cards/PostCard";
import RecommendedUserCard from "../components/cards/RecommendedUserCard";
import SideSignInCard from "../components/cards/SideSignInCard";

function Home() {
  return (
    <>
      <div>home page</div>

      <div className="mx-auto grid grid-cols-5  w-full max-w-6xl flex-row gap-6 px-4">
        
          <div className="col-span-3 flex flex-col gap-6">
            <AddPostCard  />
            <PostCard />
          </div>
         
        <div className="col-span-2 flex flex-col gap-6">
          <RecommendedUserCard />
        </div>

       
      </div>
    </>
  );
}

export default Home;
