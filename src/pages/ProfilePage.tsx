import PostCard from "../Components/cards/PostCard";
import RecommendedUserCard from "../Components/cards/RecommendedUserCard";
import UserProfileCard from "../Components/cards/UserProfileCard";
import Container from "../Components/Ui/Container";

function Profile() {
  return (
    <Container>
      <div className="col-span-5 flex flex-col gap-6 md:col-span-3">
        <UserProfileCard
          user={{
            id: "1",
            name: "John Doe",
            username: "johndoe",
            bio: "Software developer",
            location: "New York",
            followingCount: 100,
            followerCount: 500,
            isCurrentUser: true,
          }}
        />
        <PostCard />
      </div>

      <div className="hidden md:col-span-2 md:flex md:flex-col md:gap-6">
        <RecommendedUserCard />
      </div>
    </Container>
  );
}

export default Profile;
