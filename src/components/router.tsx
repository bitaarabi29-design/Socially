import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Login from "../pages/loginPage";
import Register from "../pages/registerPage";
import Home from "../pages/homePage";
import Profile from "../pages/ProfilePage";
import Notification from "../pages/notificationPage";

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
