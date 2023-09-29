import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home";
import Contact from "./components/contact/contact";
import Login from "../auth/Login";
import Register from "../auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/disconnect",
    element: <Disconnect />,
  },
  {
    path: "/editprofile",
    element: <EditProfil />,
  },
  {
    path: "/forget-password",
    element: <ForgetPWD />,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPWD />,
  },
  {
    path: "/reset-password/",
    element: <ResetPWD />,
  },
]);

export default router;
