import { ProjectionRoomType } from "@/types/ProjectionRoomType";
import { NavLink } from "react-router-dom";
import styles from "./ProjectionRoomCard.module.scss";

export default function ProjectionRoomCard({
  projectionRoom,
}: {
  projectionRoom: ProjectionRoomType;
}) {
  return (
    <NavLink to={`salle/${projectionRoom.id}/incidents`}>
      <div className={styles.container}>
        <p>Salle {projectionRoom.titleRoom}</p>
      </div>
    </NavLink>
  );
}
