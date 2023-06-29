import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/UseGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  Platform: Platform | null;
}
function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px
        }}
        templateColumns={{ base: "1fr", lg: "250px 1fr" }}>
        <GridItem area={"nav"}>
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              selectedGenre={GameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector
            SelectedPlatform={GameQuery.Platform}
            onSelectPlatform={(Platform) =>
              setGameQuery({ ...GameQuery, Platform })
            }></PlatformSelector>
          <GameGrid GameQuery={GameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
