// AppRoutes.jsx
import { useRoutes } from "react-router-dom";

import Home from "../Pages/Home";
import Inventory from "../Pages/Inventory";
import Signin from "../Component/Authentication/Signin";
import Signup from "../Component/Authentication/Signup";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import CarDetails from "../Pages/CarDetails";

function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/inventory",
      element: <Inventory />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/cardetails/:id",
      element: <CarDetails />,
    }
  
  ]);

  return routes;
}

export default AppRoutes;