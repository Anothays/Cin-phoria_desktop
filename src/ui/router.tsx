import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import MovieTheatersPage from "./pages/MovieTheatersPage";
import MovieTheaterPage from "./pages/MovieTheatersPage/MovieTheaterPage";
import ProjectionRoom from "./pages/MovieTheatersPage/MovieTheaterPage/ProjectionRoom";
import ProjectionRoomPage from "./pages/MovieTheatersPage/MovieTheaterPage/ProjectionRoom/ProjectionRoomPage";
// import MovieTheaters from "./pages/MovieTheatersPage";
// import MovieTheater from "./pages/MovieTheatersPage/MovieTheaterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    element: <NavBar />,
    children: [
      {
        path: "movieTheaters",
        element: <MovieTheatersPage />,
      },
      {
        path: "movieTheaters/:id",
        element: <MovieTheaterPage />,
      },
      {
        path: "movieTheaters/:id/salle/:roomId/incidents",
        element: <ProjectionRoom />,
      },
      {
        path: "movieTheaters/:id/salle/:roomId/incidents/new",
        element: <ProjectionRoomPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
