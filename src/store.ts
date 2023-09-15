import { create } from "zustand";

interface GameQuery {
  genreID?: number;
  PlatformId?: number;
  sortOrder?: string;
  searchText?: string;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreid: number) => void;
  setPlatformId: (PlatformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreID) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreID } })),
  setPlatformId: (PlatformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, PlatformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
