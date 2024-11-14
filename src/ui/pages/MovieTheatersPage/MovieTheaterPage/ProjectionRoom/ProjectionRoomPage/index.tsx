import { SeatMapContextProvider } from "@/src/ui/components/Context/SeatMapContext";
import IncidentForm from "@/src/ui/components/IncidentForm";
import SeatMap from "@/src/ui/components/SeatMap";
import { useLocation } from "react-router-dom";
import styles from "./ProjectionRoomPage.module.scss";

export default function ProjectionRoomPage() {
  const location = useLocation();
  const { projectionRoom } = location.state;

  if (projectionRoom) {
    return (
      <SeatMapContextProvider>
        <div className={styles.page}>
          <div className={styles.pageContent}>
            <h2>Plan de la salle</h2>
            <SeatMap projectionRoom={projectionRoom} />
            <IncidentForm projectionRoom={projectionRoom} />
          </div>
        </div>
      </SeatMapContextProvider>
    );
  }
}
