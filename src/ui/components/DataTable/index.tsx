import { IncidentType } from "@/types/IncidentType";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import styles from "./DataTable.module.scss";

type DataTableType = {
  incidents: IncidentType[];
};

export default function DataTable({ incidents }: DataTableType) {
  const [incidentsState, setIncidentState] =
    useState<IncidentType[]>(incidents);
  const [isLoading, setIsLoading] = useState(false);

  const onDeleteIncident = async (id: number) => {
    setIsLoading(true);

    try {
      await axios.delete(`${process.env.API_BASE_URL}/api/incidents/${id}`);
      setIncidentState((prev) => {
        return prev.filter((incident) => incident.id !== id);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress
          color="primary"
          size={100}
          className={styles.loading}
        />
      ) : null}
      <table className={styles.container}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {incidentsState.map((incident) => (
            <tr key={incident.id}>
              <td>{incident.id}</td>
              <td>{incident.description}</td>
              <td
                className={styles.statusCell}
                style={{
                  color: incident.resolved ? "green" : "red",
                }}
              >
                {incident.resolved ? "Traité" : "Non traité"}
              </td>
              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => onDeleteIncident(incident.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
