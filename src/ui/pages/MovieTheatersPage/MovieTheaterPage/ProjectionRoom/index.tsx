import DataTable from "@/src/ui/components/DataTable";
import useProjectionRoom from "@/src/ui/hooks/useProjectionRoom";
import { CircularProgress } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import styles from "./ProjectionRoom.module.scss";

export default function ProjectionRoom() {
  const { roomId } = useParams();
  const { projectionRoom, isLoading } = useProjectionRoom(+roomId!);

  if (isLoading) return <CircularProgress />;

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h1>Salle {projectionRoom?.titleRoom}</h1>
          <p>{projectionRoom?.projectionRoomSeats.length} places</p>
        </div>
        <NavLink className="button" to="new" state={{ projectionRoom }}>
          Signaler un problème
        </NavLink>
      </div>
      <div>
        <h2>Incidents signalés</h2>
        <DataTable incidents={projectionRoom!.incidents} />
      </div>
    </div>
  );
}
