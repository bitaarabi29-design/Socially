import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/loginPage";
import Register from "./pages/registerPage";
import Home from "./pages/homePage";
import Profile from "./pages/ProfilePage";
import Notification from "./pages/notificationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
