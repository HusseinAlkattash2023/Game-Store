import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Listbox, ListboxItem, skeleton } from "@nextui-org/react";
import getCroppedImageUrl from "../hooks/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props{
  onSelectedGenre: (genre: Genre)=> void;
}
const GenreList = ({onSelectedGenre}:Props) => {
  const { data, loading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if(error) return null;
  return (
    <div className="mt-2 ml-4">
      <div className="px-1 py-2">
        <div className=" flex flex-col items-start">
          {loading &&
            skeletons.map((skeleton) => (
              <div key={skeleton}>
                <GenreSkeleton />
              </div>
            ))}
        </div>
        <Listbox
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
        >
          {data.map((genre) => (
            <ListboxItem key={genre.id} onClick={()=> onSelectedGenre(genre)}>
              <div className="flex flex-row items-center justify-start">
                <img
                  src={getCroppedImageUrl(genre.image_background)}
                  className="w-10 h-10 rounded-lg"
                />
                <span className="ml-4 text-lg">{genre.name}</span>
              </div>
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    </div>
  );
};

export default GenreList;
