import { Heading } from "@chakra-ui/react";
import useGenre from "../Hooks/UseGenre";
import UsePlatform from "../Hooks/UsePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const genre = useGenre(genreID);

  const PlatformId = useGameQueryStore((s) => s.gameQuery.PlatformId);
  const platform = UsePlatform(PlatformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
