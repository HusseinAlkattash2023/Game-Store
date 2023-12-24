import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

const GameCardSkeleton = () => {
  return (
    <Card className="h-72 space-y-5" radius="lg">
      <Skeleton className="h-48">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3 p-4">
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <div className="flex justify-between items-center">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-[40px] rounded-3xl">
          <div className="h-6 rounded-3xl bg-default-300"></div>
        </Skeleton>
        </div>
      </div>
    </Card>
  );
};

export default GameCardSkeleton;
