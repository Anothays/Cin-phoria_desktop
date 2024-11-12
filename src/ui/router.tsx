import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import MovieTheatersPage from "./pages/MovieTheatersPage";
import MovieTheaterPage from "./pages/MovieTheatersPage/MovieTheaterPage";
// import MovieTheaters from "./pages/MovieTheatersPage";
// import MovieTheater from "./pages/MovieTheatersPage/MovieTheaterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "movieTheaters",
    element: <MovieTheatersPage />,
  },
  {
    path: "movieTheaters/:id",
    element: <MovieTheaterPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
