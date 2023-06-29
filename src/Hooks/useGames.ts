import useData from "./UseData";
import { GameQuery } from "../App";

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
}
const useGames = (GameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: GameQuery.genre?.id,
        platforms: GameQuery.Platform?.id,
      },
    },
    [GameQuery]
  );

export default useGames;
