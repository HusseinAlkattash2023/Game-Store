import React from "react";
import GameCardSkeleton from "./GameCardSkeleton";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if(error) return (<p>{error}</p>)

  return (
      <div className="grid grid-cols-12 gap-4 pt-4">
        {loading
          ? skeleton.map((id) => (
              <div
                key={id}
                className="lg:!col-span-4 sm:!col-span-6 col-span-12"
              >
                <GameCardSkeleton />
              </div>
            ))
          : data.map((game) => (
              <div
                key={game.id}
                className="lg:!col-span-4 sm:!col-span-6 col-span-12"
              >
                <GameCard game={game} />
              </div>
            ))}
      </div>
  );
};

export default GameGrid;
