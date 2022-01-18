import DashBoard from "./pages/DashBoard";
import Users from "./pages/Users";
import Movies from "./pages/Movies";
import Lists from "./pages/Lists";
import Form from "./components/Form";

export const routes = [
  {
    route: "/",
    element: <DashBoard />,
  },
  {
    route: "/users",
    element: <Users />,
  },
  {
    route: "/movies",
    element: <Movies />,
  },
  {
    route: "/lists",
    element: <Lists />,
  },
  {
    route: "/form",
    element: <Form />,
  },
];
