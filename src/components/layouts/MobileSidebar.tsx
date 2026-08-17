import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CloseIcon,
  DarkModeIcon,
  HomeIcon,
  LightModeIcon,
  LogoutIcon,
  MenuIcon,
  NotificationIcon,
  PersonIcon,
} from "../../assets/icons";

function MobileSidebar() {
  const [theme, setTheme] = useState("sociallydark");
  const drawerRef = useRef<HTMLInputElement>(null);

  const isLoggedIn = true;

  function toggleTheme() {
    const newTheme =
      theme === "sociallydark" ? "sociallylight" : "sociallydark";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  function closeDrawer() {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  }

  return (
    <div className="drawer drawer-end md:hidden">
      <input
        ref={drawerRef}
        id="mobile-sidebar"
        type="checkbox"
        className="drawer-toggle"
      />

      <div className="drawer-content">
        <header className="border-base-300 bg-base-100 flex h-16 w-full items-center justify-between border-b px-4">
          <Link
            to="/"
            className="text-[20px] leading-[28px] font-bold tracking-[1px]"
          >
            Socially
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="border-base-300 bg-base-100 flex h-9 w-9 cursor-pointer items-center justify-center rounded-[6px] border shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]"
              aria-label="Toggle theme"
            >
              {theme === "sociallydark" ? (
                <DarkModeIcon className="text-base-content h-4 w-4" />
              ) : (
                <LightModeIcon className="text-base-content h-4 w-4" />
              )}
            </button>

            <label
              htmlFor="mobile-sidebar"
              className="bg-neutral text-neutral-content flex h-9 w-9 cursor-pointer items-center justify-center rounded-[6px]"
              aria-label="Open menu"
            >
              <MenuIcon className="h-5 w-5" />
            </label>
          </div>
        </header>
      </div>

      <div className="drawer-side z-50">
        <label
          htmlFor="mobile-sidebar"
          aria-label="Close sidebar"
          className="drawer-overlay"
        />

        <aside className="bg-base-100 text-base-content flex min-h-full w-72 flex-col p-4">
          {/* Drawer Header */}
          <div className="flex items-center justify-between">
            <span className="text-[16px] leading-6 font-medium">Menu</span>

            <label
              htmlFor="mobile-sidebar"
              className="flex h-9 w-9 cursor-pointer items-center justify-center"
              aria-label="Close menu"
            >
              <CloseIcon className="text-base-content h-5 w-5" />
            </label>
          </div>

          <nav className="mt-6 flex flex-col gap-2">
            <Link
              to="/"
              onClick={closeDrawer}
              className="flex h-10 items-center gap-3 rounded-[6px] px-4 text-[14px] leading-5 font-normal"
            >
              <HomeIcon className="text-base-content h-4 w-4" />
              <span>Home</span>
            </Link>

            {isLoggedIn && (
              <>
                <Link
                  to="/notification"
                  onClick={closeDrawer}
                  className="flex h-10 items-center gap-3 rounded-[6px] px-4 text-[14px] leading-5 font-normal"
                >
                  <NotificationIcon className="text-base-content h-4 w-4" />
                  <span>Notifications</span>
                </Link>

                <Link
                  to="/profile"
                  onClick={closeDrawer}
                  className="flex h-10 items-center gap-3 rounded-[6px] px-4 text-[14px] leading-5 font-normal"
                >
                  <PersonIcon className="text-base-content h-4 w-4" />
                  <span>Profile</span>
                </Link>

                <button
                  type="button"
                  className="flex h-10 w-full cursor-pointer items-center gap-3 rounded-[6px] px-4"
                  aria-label="Sign out"
                >
                  <LogoutIcon className="text-base-content h-4 w-4" />
                </button>
              </>
            )}
          </nav>

          {!isLoggedIn && (
            <Link
              to="/login"
              onClick={closeDrawer}
              className="bg-neutral text-neutral-content mt-auto flex h-9 items-center justify-center rounded-[6px] px-4 text-[14px] leading-5 font-normal shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]"
            >
              Sign In
            </Link>
          )}
        </aside>
      </div>
    </div>
  );
}

export default MobileSidebar;
