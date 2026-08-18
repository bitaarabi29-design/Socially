import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import SideSignInCard from "../cards/SideSignInCard";
import SideProfileCard from "../cards/SideProfileCard";

function Layout() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "sociallydark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "sociallydark" ? "sociallylight" : "sociallydark",
    );
  }

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <MobileSidebar theme={theme} toggleTheme={toggleTheme} />

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-3 p-4 md:grid-cols-5">
        <aside className="md:col-span-1 md:shrink-0">
          <SideSignInCard />
          <SideProfileCard />
        </aside>

        <section className="col-span-1 md:col-span-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Layout;
