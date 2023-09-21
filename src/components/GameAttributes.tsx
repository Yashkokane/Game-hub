import { Grid, GridItem, Text } from "@chakra-ui/react";
import { Game } from "../Entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" as="dl">
      <GridItem>
        <DefinitionItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
      </GridItem>
      <GridItem>
        <DefinitionItem term="Genres">
          {game.genres?.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
      </GridItem>
      <GridItem>
        <DefinitionItem term="Critics">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
      </GridItem>
      <GridItem>
        <DefinitionItem term="Publishers">
          {game.publishers?.map((publishers) => (
            <Text key={publishers.id}>{publishers.name}</Text>
          ))}
        </DefinitionItem>
      </GridItem>
    </Grid>
  );
};

export default GameAttributes;
