import { createBrowserRouter } from "react-router-dom";
import BookDetails from "../Component/BookDetails";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>opps error </div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/card/:cardId",
        element: <BookDetails />,
      },
    ],
  },
]);

export default router;
