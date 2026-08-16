import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Home from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
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
