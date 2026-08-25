import AddPostCard from "../components/cards/AddPostCard";
import PostCard from "../components/cards/PostCard";
import RecommendedUserCard from "../components/cards/RecommendedUserCard";
import Container from "../components/ui/Container";
import { useAllPosts } from "../hooks/usePost";
import { useSession } from "../hooks/useSession";

function Home() {
  const { data: posts, isPending, isError, error } = useAllPosts();
  const { data: session } = useSession();
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

      {session && (
        <div className="hidden md:col-span-2 md:flex md:flex-col md:gap-6">
          <RecommendedUserCard />
        </div>
      )}
    </Container>
  );
}

export default Home;
