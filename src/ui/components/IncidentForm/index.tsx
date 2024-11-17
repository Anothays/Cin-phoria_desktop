import { ProjectionRoomType } from "@/types/ProjectionRoomType";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useSeatMapContext } from "../Context/SeatMapContext";
import styles from "./IncidentForm.module.scss";

export default function IncidentForm({
  projectionRoom,
}: {
  projectionRoom: ProjectionRoomType;
}) {
  const navigate = useNavigate();
  const { selectedSeats } = useSeatMapContext();
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { authState } = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.currentTarget);
    const body = {
      description: `${data.get("description")}
      [sièges: ${inputText}]`,
      projectionRoom: projectionRoom["@id"],
      reportedBy: authState?.user?.["@id"],
    };
    try {
      await axios.post(`${process.env.API_BASE_URL}/api/incidents`, body, {
        headers: { "Content-Type": "application/ld+json" },
      });
      navigate("/movieTheaters");
      alert("Rapport pris en compte");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const mapString = selectedSeats?.map((el) => el.rowAndNumberSeat);

    setInputText(mapString!.join(","));
  }, [selectedSeats]);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Décrivez le problème</h2>
      <textarea
        name="description"
        className={styles.textarea}
        autoFocus
        placeholder="Votre rapport"
      />
      <input
        name="seats"
        disabled
        type="text"
        value={inputText}
        placeholder="Sélectionnez les fauteuils concernés sur le plan de la salle"
      />

      <button className={styles.submitButton} type="submit">
        {isLoading ? <CircularProgress size={19} /> : "Envoyer"}
      </button>
    </form>
  );
}
