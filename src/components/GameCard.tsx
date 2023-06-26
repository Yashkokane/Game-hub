import { Game } from "../Hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../Services/Image-Url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card maxW="sm" borderRadius={10} overflow={"hidden"}>
        <Image src={getCroppedImgUrl(game.background_image ) }></Image>
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"} paddingTop={"5px"}>
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (p) => p.platform
              )}></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
