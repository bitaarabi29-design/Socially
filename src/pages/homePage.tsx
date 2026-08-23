import AddPostCard from "../Components/cards/AddPostCard";
import PostCard from "../Components/cards/PostCard";
import RecommendedUserCard from "../Components/cards/RecommendedUserCard";
import Container from "../Components/Ui/Container";
import usePosts from "../hooks/usePost";

function Home() {
  const { data: posts, isPending, isError, error } = usePosts();

  return (
    <Container>
      <div className="col-span-3 flex flex-col gap-6">
        <AddPostCard />

        {isPending && <p className="text-base-content/50">Loading posts...</p>}

        {isError && (
          <p className="text-error">
            {error instanceof Error ? error.message : "Failed to load posts"}
          </p>
        )}

        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="col-span-2 hidden flex-col gap-6 md:flex">
        <RecommendedUserCard />
      </div>
    </Container>
  );
}

export default Home;
