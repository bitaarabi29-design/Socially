import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages/homePage";
import Profile from "./pages/ProfilePage";
import Login from "./pages/loginPage";
import Register from "./pages/registerPage";
import Notification from "./pages/notificationPage";
import NotFound from "./pages/notFoundPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/notification", element: <Notification /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
