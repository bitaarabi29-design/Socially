import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSession } from "../../hooks/useSession";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import SideProfileCard from "../cards/SideProfileCard";
import SideSignInCard from "../cards/SideSignInCard";

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

  const { data: session, isLoading } = useSession();
  const hasSession = !!session;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center gap-3">
        <p className="text-base-content/60 text-3xl">Loading</p>

        <div className="flex gap-2">
          <div className="bg-primary h-3 w-3 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
          <div className="bg-primary h-3 w-3 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
          <div className="bg-primary h-3 w-3 animate-bounce rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <MobileSidebar theme={theme} toggleTheme={toggleTheme} />

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:grid-cols-5">
        <aside className="lg:col-span-1 lg:flex lg:shrink-0 lg:flex-col lg:gap-6">
          {isLoading ? (
            <div>Loading...</div>
          ) : hasSession ? (
            <SideProfileCard />
          ) : (
            <SideSignInCard />
          )}
        </aside>

        <section className="col-span-1 md:col-span-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Layout;
