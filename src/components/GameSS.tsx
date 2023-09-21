import { Image, SimpleGrid } from "@chakra-ui/react";
import UseSImages from "../Hooks/UseSImages";

interface Prop {
  gameId: number;
}
const GameSS = ({ gameId }: Prop) => {
  const { data, isLoading, error } = UseSImages(gameId);
  if (isLoading) return null;
  if (error) throw error;
  console.log(data);
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameSS;
