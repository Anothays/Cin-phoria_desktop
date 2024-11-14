import { SeatMapContextProvider } from "@/src/ui/components/Context/SeatMapContext";
import IncidentForm from "@/src/ui/components/IncidentForm";
import SeatMap from "@/src/ui/components/SeatMap";
import useProjectionRoom from "@/src/ui/hooks/useProjectionRoom";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import styles from "./ProjectionRoomPage.module.scss";

export default function ProjectionRoomPage() {
  const { roomId } = useParams();
  const { projectionRoom, isLoading } = useProjectionRoom(+roomId!);

  if (isLoading) return <CircularProgress />;

  if (projectionRoom) {
    return (
      <SeatMapContextProvider>
        <div className={styles.page}>
          <h1>Plan de la salle n°{projectionRoom.titleRoom}</h1>
          <div className={styles.pageContent}>
            <IncidentForm projectionRoom={projectionRoom} />
            <SeatMap projectionRoom={projectionRoom} />
          </div>
        </div>
      </SeatMapContextProvider>
    );
  }
}
