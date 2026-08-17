import AddPostCard from "../components/cards/AddPostCard";
import PostCard from "../components/cards/PostCard";
import RecommendedUserCard from "../components/cards/RecommendedUserCard";
import Container from "../components/Ui/Container";




function Home() {
  return (
    <Container>
        <div className="col-span-3 flex flex-col gap-6">
            <AddPostCard  />
            <PostCard />
            
        </div>
         
        <div className="col-span-2 flex flex-col gap-6">
          <RecommendedUserCard />

      </div>
   

       
    
    </Container>

  );
}

export default Home;
