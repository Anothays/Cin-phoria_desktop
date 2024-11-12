import ProjectionRoomCard from "@/src/ui/components/ProjectionRoomCard";
import useMovieTheater from "@/src/ui/hooks/useMovieTheater";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import styles from "./MovieTheaterPage.module.scss";

export default function MovieTheaterPage() {
  const { id } = useParams();
  const { movieTheater, isLoading } = useMovieTheater(+id!);

  if (isLoading) return <CircularProgress />;

  if (movieTheater) {
    console.log("movieTheater ==> ", movieTheater);

    return (
      <div>
        <h1>
          {movieTheater.theaterName} - {movieTheater?.city}{" "}
        </h1>
        <div className={styles.container}>
          {movieTheater.projectionRooms.map((projectionRoom) => (
            <ProjectionRoomCard
              projectionRoom={projectionRoom}
              key={projectionRoom.id}
            />
          ))}
        </div>
      </div>
    );
  }
}