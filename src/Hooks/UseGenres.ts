import { useQuery } from "@tanstack/react-query";
import Genres from "../Data/Genres";
import APIClient from "../Services/Api-Client";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//const useGenres = () => ({ data: Genres, isLoading: false, error: null });
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: Genres,
  });
export default useGenres;
