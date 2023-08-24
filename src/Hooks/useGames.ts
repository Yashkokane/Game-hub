import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient, { FetchResponse } from "../Services/Api-Client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
const useGames = (GameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", GameQuery],
    queryFn: () =>
      ApiClient.get<FetchResponse<Game>>("/games", {
        params: {
          genres: GameQuery.genre?.id,
          parent_platforms: GameQuery.Platform?.id,
          ordering: GameQuery.sortOrder,
          search: GameQuery.searchText,
        },
      }).then((res) => res.data),
  });

export default useGames;
