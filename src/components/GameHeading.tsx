import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import UsePlatform from "../Hooks/UsePlatform";
import useGenre from "../Hooks/UseGenre";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreID);

  const platform = UsePlatform(gameQuery.PlatformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
