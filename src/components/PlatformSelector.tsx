import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props{
    onSelectPlatform:(platform: Platform)=> void;
}
const PlatformSelector = ({onSelectPlatform}:Props) => {
  const {data, error} = usePlatforms();

  if(error) return null;
  return (
  <div className="flex w-[240px]">
    <Select 
      label="Select a platform" 
      className="max-w-xs" 
      size='sm'
    >
      {data.map((platform) => (
        <SelectItem onClick={()=> onSelectPlatform(platform)} key={platform.name} value={platform.name}>
          {platform.name}
        </SelectItem>
      ))}
    </Select>
  </div>
  )
}

export default PlatformSelector;

 
