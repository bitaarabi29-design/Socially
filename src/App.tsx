import { HeartIcon, HomeIcon, SendIcon } from "./assets/icons";

function App() {
  return (
    <div className="p-8 flex gap-4">
      <HeartIcon className="w-8 h-8 text-primary" />
      <HomeIcon className="w-8 h-8 text-secondary" />
      <SendIcon className="w-8 h-8 text-accent" />
    </div>
  );
}

export default App;

