import { createBrowserRouter } from "react-router-dom";
import BookDetails from "../Component/BookDetails";
import ReadBooks from "../Component/ReadBooks";
import Wishlist from "../Component/Wishlist";
import MainLayout from "../Layout/MainLayout";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PageReadPage from "../Pages/PageToReadPage/PageReadPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/card/:cardId",
        element: <BookDetails />,
      },
      {
        path: "/pages-read",
        element: <PageReadPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: () => fetch("/blog.json"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/listed-book",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
    ],
  },
]);

export default router;
