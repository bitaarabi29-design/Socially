import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>Header</header>
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
