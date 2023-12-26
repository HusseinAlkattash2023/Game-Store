import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../hooks/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreListDrop = ({ onSelectedGenre }: Props) => {
  const { data, loading, error } = useGenres();

  if (error) return null;
  return (
    <div className="w-full">
      <Select label="geners" className="max-w-xs" size="sm">
        {data.map((genre) => (
          <SelectItem
            onClick={() => onSelectedGenre(genre)}
            key={genre.name}
            value={genre.name}
            startContent={
              <img
                src={getCroppedImageUrl(genre.image_background)}
                className="w-10 h-10 rounded-lg"
              />
            }
          >
            {genre.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default GenreListDrop;
