import PostCard from "../../src/Components/PostCard";
function Home() {
  return (
    <>
     <div>home page</div>
       <div className="min-h-screen bg-secondary-content px-4 py-8">
      <main className="flex justify-center">
        <PostCard />
      </main>
    </div>
    </>
 

);
}

export default Home;
