import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages/homePage";
import Profile from "./pages/ProfilePage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Notification from "./pages/NotificationPage";

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
]);

export default router;
