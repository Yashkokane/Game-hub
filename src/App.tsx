import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/UseGenre";

function App() {
  const [SelectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}>
        <GridItem area={"nav"}>
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList selectedGenre={SelectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <GameGrid SelectedGenre={SelectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
