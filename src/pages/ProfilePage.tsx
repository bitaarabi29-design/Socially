import PostCard from "../components/cards/PostCard";
import RecommendedUserCard from "../components/cards/RecommendedUserCard";
import UserProfileCard from "../components/cards/UserProfileCard";
import Container from "../components/Ui/Container";


function Profile() {

  return (
     <Container>
        <div className="col-span-3 flex flex-col gap-6">
          <UserProfileCard user={{ id: "1", name: "John Doe", username: "johndoe", bio: "Software developer", location: "New York", followingCount: 100, followerCount: 500, isCurrentUser: true }} />
          <PostCard />
        </div>
         
        <div className="col-span-2 flex flex-col gap-6">
          <RecommendedUserCard />
        </div>
    
    </Container>
  );
}

export default Profile;
