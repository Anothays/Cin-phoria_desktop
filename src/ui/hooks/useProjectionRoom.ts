import { ProjectionRoomType } from "@/types/ProjectionRoomType";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useProjectionRoom(id: number) {
  const [projectionRoom, setProjectionRoom] = useState<ProjectionRoomType | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const getData = useCallback((id: number) => {
    axios.get(`${process.env.API_BASE_URL}/api/projection_rooms/${id}`)
      .then(res => {
        const data = res.data as ProjectionRoomType;
        setProjectionRoom(data);
      })
      .catch(err => {
        console.log("ERROR ", err);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getData(id);
  }, []);

  return { projectionRoom, isLoading, error, getData };
}