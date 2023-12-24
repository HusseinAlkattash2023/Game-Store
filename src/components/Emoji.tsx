import bullsEyes from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { ImageProps } from "@nextui-org/react";
import {Image} from "@nextui-org/react";

interface Props{
    rating:number;
}
const Emoji = ({rating}:Props) => {

    const emojiMap:{[key:string]: ImageProps} = {
        3:{src:meh, alt:"meh"},
        4:{src:thumbsUp, alt:"recommended"},
        5:{src:bullsEyes, alt:"exceptional"}
    }
  return (
     <Image {...emojiMap[rating]} className="w-[25px] ml-2"/>
  )
}

export default Emoji