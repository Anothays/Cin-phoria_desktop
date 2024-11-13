import MovieTheaterCard from "@/src/ui/components/MovieTheaterCard";
import useMovieTheaters from "@/src/ui/hooks/useMovieTheaters";
import { CircularProgress } from "@mui/material";
import styles from "./MovieTheatersPage.module.scss";

export default function MovieTheatersPage() {
  const { movieTheaters, isLoading } = useMovieTheaters();

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <h1 className={styles.title}>Liste des cinémas</h1>
      <div className={styles.theaterList}>
        {movieTheaters.map((theater) => (
          <MovieTheaterCard key={theater.id} movieTheater={theater} />
        ))}
      </div>
    </>
  );
}
