import Layout from "./routes/layout";
import Home from "./routes/home";
import Category from "./routes/category";
import About from "./routes/about";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "men",
        element: <Category />,
      },
      {
        path: "women",
        element: <Category />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default routes;
