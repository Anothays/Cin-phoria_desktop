import { ProjectionRoomType } from "@/types/ProjectionRoomType";
import { NavLink } from "react-router-dom";
import styles from "./ProjectionRoomCard.module.scss";

export default function ProjectionRoomCard({
  projectionRoom,
}: {
  projectionRoom: ProjectionRoomType;
}) {
  return (
    <NavLink to={`${projectionRoom.id}`}>
      <div className={styles.container}>
        <p>{projectionRoom.titleRoom}</p>
      </div>
    </NavLink>
  );
}
