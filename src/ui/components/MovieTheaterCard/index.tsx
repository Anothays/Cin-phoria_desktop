import { MovieTheaterType } from "@/types/MovieTheaterType";
import { NavLink } from "react-router-dom";
import styles from "./MovieTheaterCard.module.scss";

export default function MovieTheaterCard({
  movieTheater,
}: {
  movieTheater: MovieTheaterType;
}) {
  return (
    <NavLink to={`${movieTheater.id}`}>
      <div className={styles.container}>
        <p>{movieTheater.theaterName}</p>
        <p>{movieTheater.city}</p>
      </div>
    </NavLink>
  );
}
