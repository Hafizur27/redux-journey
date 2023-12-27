import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../components/Home/Home";
import AddBook from "../components/AddBook/AddBook";
import ShowBook from "../components/ShowBook/ShowBook";
import UpdateBook from "../components/UpdateBook/UpdateBook";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "addbook",
            element: <AddBook />
        },
        {
            path: "showbook",
            element: <ShowBook />
        },
        {
          path: "updatebook",
          element: <UpdateBook />
        }
      ]
    },
  ]);