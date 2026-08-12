import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>Header</header>
      <aside>Left Sidebar</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
