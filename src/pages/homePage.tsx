import AddPostCard from "../components/cards/AddPostCard";
import PostCard from "../components/cards/PostCard";
import RecommendedUserCard from "../components/cards/RecommendedUserCard";
import Container from "../components/ui/Container";
// import DeletePostModal  from "../Components/cards/DeletePostModal";

function Home() {
  return (
    <Container>
      <div className="col-span-3 flex flex-col gap-6">
        <AddPostCard
          username="Seyed Ali Mousavi"
          avatarUrl="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
        />
        <PostCard />
      </div>

      <div className="col-span-2 hidden flex-col gap-6 md:flex">
        <RecommendedUserCard />
      </div>
    </Container>
  );
}

export default Home;
