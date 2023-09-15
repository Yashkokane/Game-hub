import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../Hooks/UseGenres";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  const selectedGenreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const onSelectGenre = useGameQueryStore((s) => s.setGenreId);
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize="4xl" marginBottom={6}>
        Genre
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack
              background={genre.id === selectedGenreID ? "#353557" : ""}
              borderRadius={10}>
              <Image
                boxSize="70px"
                borderRadius={8}
                objectFit="cover"
                src={genre.image_background}></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreID ? "bold" : "normal"}
                fontSize={"large"}
                variant={"link"}
                onClick={() => onSelectGenre(genre.id)}>
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
