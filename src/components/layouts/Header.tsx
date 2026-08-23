import { Link } from "react-router-dom";
import {
  DarkModeIcon,
  HomeIcon,
  LightModeIcon,
  LogoutIcon,
  NotificationIcon,
  PersonIcon,
} from "../../assets/icons";
import { useSession } from "../../hooks/useSession";
import type { useLogout } from "../../hooks/useLogout";

type HeaderProps = {
  theme: string;
  toggleTheme: () => void;
};

function Header({ theme, toggleTheme }: HeaderProps) {
  const {data: session ,isLoading} = useSession();
  const hasSession = !!session;
  

  return (
    <>
      <header className="border-base-300/50 bg-base-100/70 fixed top-0 right-0 left-0 z-50 hidden h-16 border-b backdrop-blur-xl md:block">
        <div className="mx-auto flex h-16 w-full max-w-[1248px] items-center justify-between">
          <Link
            to="/"
            className="text-[20px] leading-[28px] font-bold tracking-[1px]"
          >
            Socially
          </Link>

          <nav className="flex items-center gap-4">
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

            <Link
              to="/"
              className="text-base-content flex h-9 items-center gap-2 rounded-[6px] px-4 text-[14px] leading-5 font-normal"
            >
              <HomeIcon className="text-base-content h-4 w-4" />
              <span>Home</span>
            </Link>

            {isLoading? <p>loeading</p> :hasSession ? (
              <>
                <Link
                  to="/notification"
                  className="text-base-content flex h-9 items-center gap-2 rounded-[6px] px-4 text-[14px] leading-5 font-normal"
                >
                  <NotificationIcon className="text-base-content h-4 w-4" />
                  <span>Notifications</span>
                </Link>

                <Link
                  to="/profile"
                  className="text-base-content flex h-9 items-center gap-2 rounded-[6px] px-4 text-[14px] leading-5 font-normal"
                >
                  <PersonIcon className="text-base-content h-4 w-4" />
                  <span>Profile</span>
                </Link>

                <button
                  type="button"
                  className="text-base-content flex h-9 w-9 cursor-pointer items-center justify-center rounded-[6px]"
                  aria-label="Sign out"
                >
                  <LogoutIcon className="text-base-content h-4 w-4" />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-neutral text-neutral-content flex h-9 items-center justify-center rounded-[6px] px-4 text-[14px] leading-5 font-normal shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]"
              >
                Sign In
              </Link>
            )}
          </nav>
        </div>
      </header>

      <div className="hidden h-16 md:block" />
    </>
  );
}

export default Header;
