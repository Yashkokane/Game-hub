import useData from "./UseData";
import { Genre } from "./UseGenre";

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
const useGames = (
  SelectedGenre: Genre | null,
  SelectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: SelectedGenre?.id, platforms: SelectedPlatform?.id } },
    [SelectedGenre?.id, SelectedPlatform?.id]
  );

export default useGames;
