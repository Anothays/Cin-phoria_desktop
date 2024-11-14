import DataTable from "@/src/ui/components/DataTable";
import useProjectionRoom from "@/src/ui/hooks/useProjectionRoom";
import { CircularProgress } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import styles from "./ProjectionRoom.module.scss";

export default function ProjectionRoom() {
  const { roomId } = useParams();
  const { projectionRoom, isLoading } = useProjectionRoom(+roomId!);

  if (isLoading) return <CircularProgress />;
  console.log(projectionRoom);

  return (
    <div>
      <div className={styles.header}>
        <h1>
          Salle {projectionRoom?.titleRoom} -{" "}
          {projectionRoom?.projectionRoomSeats.length} places
        </h1>
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
