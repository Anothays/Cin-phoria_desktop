import { ApiJSONResponseType } from "@/types/ApiResponseType";
import { MovieTheaterType } from "@/types/MovieTheaterType";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useMovieTheaters() {

  const [movieTheaters, setMovieTheaters] = useState<MovieTheaterType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(() => {
    axios.get(`${process.env.API_BASE_URL}/api/movie_theaters`)
      .then(res => {
        const data = res.data as ApiJSONResponseType<MovieTheaterType>;
        setMovieTheaters(data["hydra:member"]);
      })
      .catch(err => {
        console.log("ERROR ", err);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [])

  return { movieTheaters, isLoading, error, getData }

}