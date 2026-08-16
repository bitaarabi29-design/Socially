import { HeartIcon, HomeIcon, SendIcon } from "./assets/icons";

function App() {
  return (
    <div className="flex gap-4 p-8">
      <HeartIcon className="text-primary h-8 w-8" />
      <HomeIcon className="text-secondary h-8 w-8" />
      <SendIcon className="text-accent h-8 w-8" />
    </div>
  );
}

export default App;
