import { useQuery } from "@tanstack/react-query";
import Genres from "../Data/Genres";
import ApiClient, { FetchResponse } from "../Services/Api-Client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//const useGenres = () => ({ data: Genres, isLoading: false, error: null });
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      ApiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: Genres.length, results: Genres },
  });
export default useGenres;
