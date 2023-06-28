import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/UseGenre";

interface Prop {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Prop) => {
  const { Data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <List>
      {Data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="52px"
              borderRadius={8}
              src={genre.image_background}></Image>
            <Button
              fontSize={"large"}
              variant={"link"}
              onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
