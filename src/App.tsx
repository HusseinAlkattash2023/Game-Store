import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
const App = () => {
 
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="w-full grid grid-cols-12">
      <div className="col-span-12">
        <Navbar onSearch={(searchText)=> setGameQuery({...gameQuery, searchText})}/>
      </div>
      <div className="col-span-2 lg:flex hidden">
        <GenreList
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </div>
      <div className="lg:col-span-10 col-span-12 p-6">
        <GameHeading gameQuery={gameQuery}/>
        <div className="flex mt-4">
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </div>
        <GameGrid gameQuery={gameQuery} />
      </div>
    </div>
  );
};

export default App;
