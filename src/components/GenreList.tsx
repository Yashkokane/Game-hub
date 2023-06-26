import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../Hooks/UseGenre";
import getCroppedImageUrl from "../Services/Image-Url";

const GenreList = () => {
  const { Data } = useGenres();

  return (
    <List>
      {Data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="52px"
              borderRadius={8}
              src={genre.image_background}></Image>
            <Text fontSize={"large"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
