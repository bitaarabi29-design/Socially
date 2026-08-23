import PostCard from "../components/cards/PostCard";
import RecommendedUserCard from "../components/cards/RecommendedUserCard";
import UserProfileCard from "../components/cards/UserProfileCard";
import Container from "../components/ui/Container";

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
