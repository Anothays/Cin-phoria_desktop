import { MovieTheaterType } from "@/types/MovieTheaterType";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useMovieTheater(id: number) {

  const [movieTheater, setMovieTheater] = useState<MovieTheaterType | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback((id: number) => {
    axios.get(`${process.env.API_BASE_URL}/api/movie_theaters/${id}`)
      .then(res => {
        const data = res.data as MovieTheaterType;
        setMovieTheater(data);
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
  }, [])

  return { movieTheater, isLoading, error, getData }

}