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

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 lg:grid-cols-5">
        <aside className="lg:col-span-1 lg:flex lg:shrink-0 lg:flex-col lg:gap-6">
          <SideSignInCard />
          <SideProfileCard />
        </aside>
        <section className="col-span-1 lg:col-span-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Layout;
