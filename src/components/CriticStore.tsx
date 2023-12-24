import React from 'react'
import {Chip} from "@nextui-org/react";
interface Props{
    score:number
}
const CriticStore = ({score}:Props) => {
   const color = score > 75 ? "success" : score > 60 ? "warning" : 'default'
  return (
    <Chip color={color} variant="shadow">{score}</Chip>
  )
}

export default CriticStore