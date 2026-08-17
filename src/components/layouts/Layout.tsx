import { Outlet } from "react-router-dom";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import SideSignInCard from "../cards/SideSignInCard";
import SideProfileCard from "../cards/SideProfileCard";



function Layout() {
  return (
    <div>
       <Header />
     <MobileSidebar />
      <main className="mx-auto grid grid-cols-5 gap-3 max-w-7xl ph-4">
         <aside className=" md:shrink-0 col-span-1">
          <SideSignInCard />
          <SideProfileCard />
         </aside>
         <section className="col-span-4">
             <Outlet />
         </section>
      </main>
    </div>
  );
}
export default Layout;
