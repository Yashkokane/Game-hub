import Platforms from "../Data/Platforms";
import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../Services/Api-Client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
//const usePlatforms = () => ({ data: Platforms, isLoading: false, error: null });

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      ApiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(
        (res) => res.data
      ),
    staleTime: 24 * 60 * 60 * 1000, //24h,
    initialData: { count: Platforms.length, results: Platforms },
  });

export default usePlatforms;
