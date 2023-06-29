import { Game } from "../Hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../Services/Image-Url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card border="1px solid black" borderRadius={9}>
        <Image src={getCroppedImgUrl(game.background_image)}></Image>
        <CardBody>
          <HStack
            justifyContent={"space-between"}
            paddingTop={"5px"}
            marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms?.map(
                (p) => p.platform
              )}></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize={"2xl"}>
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
