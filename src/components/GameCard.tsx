import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import PlatformIconList from "./PlatformIconList";
import CriticStore from "./CriticStore";
import ImageUrl from "../assets/no-image-placeholder-6f3882e0.webp";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card shadow="sm" className="h-80">
    <CardBody className="overflow-visible p-0">
      <Image
        width="100%"
        alt={game.name}
        className="w-full object-cover rounded-none h-56"
        src={game.background_image ? game.background_image : ImageUrl}
      />
    </CardBody>
    <CardFooter className="flex flex-col items-start justify-center">
      <div className="flex w-full justify-between flex-wrap mb-2">
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        {game.metacritic && <CriticStore score={game.metacritic}/>}
      </div>
      <h4 className="font-bold text-xl mb-3 flex">{game.name} <Emoji rating={game.rating_top}/></h4>
    </CardFooter>
  </Card>
  );
};

export default GameCard;
