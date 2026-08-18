import AddPostCard from "../Components/cards/AddPostCard";
import PostCard from "../Components/cards/PostCard";
import RecommendedUserCard from "../Components/cards/RecommendedUserCard";
import Container from "../Components/Ui/Container";
// import DeletePostModal  from "../Components/cards/DeletePostModal";

function Home() {
  return (
    <Container>
      <div className="col-span-3 flex flex-col gap-6">
        <AddPostCard />
        <PostCard />
      </div>

      <div className="col-span-2 hidden flex-col gap-6 md:flex">
        <RecommendedUserCard />
      </div>
    </Container>
  );
}

export default Home;
