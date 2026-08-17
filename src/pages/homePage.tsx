import AddPostCard from "../components/cards/AddPostCard";
import PostCard from "../components/cards/PostCard";
import RecommendedUserCard from "../components/cards/RecommendedUserCard";
import SideProfileCard from "../components/cards/SideProfileCard";
import SideSignInCard from "../components/cards/SideSignInCard";

function Home() {
  return (
    <>
      <div>home page</div>

      <div className="mx-auto flex w-full max-w-6xl flex-row gap-6 px-4">
        <main className="flex w-full flex-col">
          <AddPostCard />
          <PostCard />
        </main>

        <aside className="w-96 md:shrink-0">
          <RecommendedUserCard />
          <SideSignInCard />
          <SideProfileCard />
        </aside>
      </div>
    </>
  );
}

export default Home;
