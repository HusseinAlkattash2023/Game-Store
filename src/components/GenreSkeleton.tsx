import React from 'react'
import {Skeleton} from "@nextui-org/react";

const GenreSkeleton = () => {
  return (
    <div className="w-full flex items-center gap-3 my-2">
    <div>
      <Skeleton className="flex rounded-lg w-10 h-10"/>
    </div>  
    <div className="w-[100px] flex flex-col gap-2">
      <Skeleton className="h-3 w-full rounded-lg"/>
    </div>
  </div>
  )
}

export default GenreSkeleton;