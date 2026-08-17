import { Outlet } from "react-router-dom";
import SideSignInCard from "../cards/SideSignInCard";


function Layout() {
  return (
    <div>
      <header>Header</header>
      <main className="mx-auto flex w-full max-w-6xl flex-row gap-6 px-4">
         <aside className="w-96 md:shrink-0">
          <SideSignInCard />
         </aside>
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
export default Layout;
