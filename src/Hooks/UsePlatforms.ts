import Platforms from "../Data/Platforms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/Api-Client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
//const usePlatforms = () => ({ data: Platforms, isLoading: false, error: null });

// const usePlatforms = () =>
//   useQuery({
//     queryKey: ["platform"] || undefined,
//     queryFn: apiClient.getAll,
//     staleTime: 24 * 60 * 60 * 1000, //24h,
//     initialData: { count: Platforms.length, results: Platforms },
//   });

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: Platforms,
  });
export default usePlatforms;
