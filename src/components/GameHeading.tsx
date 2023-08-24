import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../Hooks/UseGenre";
import usePlatforms from "../Hooks/UsePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreID);

  const {data:Platforms} = usePlatforms();
  const platform = Platforms?.results.find(p => p.id === gameQuery.PlatformId)
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
