import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import PlatformIconList from "./PlatformIconList";
import CriticStore from "./CriticStore";
import ImageUrl from "../assets/no-image-placeholder-6f3882e0.webp";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card shadow="sm" className="h-72">
    <CardBody className="overflow-visible p-0">
      <Image
        width="100%"
        alt={game.name}
        className="w-full object-cover rounded-none h-48"
        src={game.background_image ? game.background_image : ImageUrl}
      />
    </CardBody>
    <CardFooter className="flex flex-col items-start justify-center">
       <h4 className="font-bold text-xl">{game.name}</h4>
       <div className="flex w-full justify-between flex-wrap">
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        {game.metacritic && <CriticStore score={game.metacritic}/>}
      </div>
    </CardFooter>
  </Card>
  );
};

export default GameCard;
