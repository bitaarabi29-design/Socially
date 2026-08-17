import { Outlet } from "react-router-dom";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";

function Layout() {
  return (
    <div>
     <Header />
     <MobileSidebar />
      <main>
        <aside>Left Sidebar</aside>
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
export default Layout;
