import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/UseGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/UsePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  Platform: Platform | null;
  sortOrder: string;
  searchText: string;
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
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...GameQuery, searchText })
            }></Navbar>
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
          <Box paddingLeft={2}>
            <GameHeading gameQuery={GameQuery}></GameHeading>
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  SelectedPlatform={GameQuery.Platform}
                  onSelectPlatform={(Platform) =>
                    setGameQuery({ ...GameQuery, Platform })
                  }></PlatformSelector>
              </Box>
              <SortSelector
                sortOrder={GameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...GameQuery, sortOrder })
                }></SortSelector>
            </Flex>
          </Box>

          <GameGrid GameQuery={GameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
