import { useQuery } from "@tanstack/react-query";
import Trailer from "../Entities/Trailer";
import APIClient from "../Services/Api-Client";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
