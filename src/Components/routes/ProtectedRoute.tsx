import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../../hooks/useSession";

function ProtectedRoute() {
  const { data: session, isLoading, isError } = useSession();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-500"></span>
      </div>
    );
  }

  if (isError || !session) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
