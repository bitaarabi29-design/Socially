// import PostCard from "../../src/Components/PostCard";
import AddPostCard from "../Components/AddPostCard";
import RecommendedUserCard from "../Components/RecommendedUserCard";

function Home() {
  return (
    <>
      <div>home page</div>

      <div className="mx-auto flex w-full max-w-6xl gap-6 px-4 flex-row">
        <main className="flex flex-col w-full ">
          <AddPostCard />
          {/* <PostCard/> */}
        </main>

        <aside className="w-96 md:shrink-0">
          <RecommendedUserCard />
        </aside>
      </div>
    </>
  );
}

export default Home;
