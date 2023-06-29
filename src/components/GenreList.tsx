import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/UseGenre";

interface Prop {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Prop) => {
  const { Data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize="4xl" marginBottom={6}>
        Genre
      </Heading>
      <List>
        {Data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack
              background={genre.id === selectedGenre?.id ? "#353557" : ""}
              borderRadius={10}>
              <Image
                boxSize="70px"
                borderRadius={8}
                objectFit="cover"
                src={genre.image_background}></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize={"large"}
                variant={"link"}
                onClick={() => onSelectGenre(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
