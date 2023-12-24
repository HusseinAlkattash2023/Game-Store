import React, { useRef } from "react";
import { Input } from "@nextui-org/react";
import { BsSearch } from "react-icons/bs";

interface Props{
    onSearch: (searchText:string)=> void;
}
const SearchInput = ({onSearch}:Props) => {
  
  const ref = useRef<HTMLInputElement>(null)
  return (
    <form className="w-full" onSubmit={(event)=>{
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value)
    }}>
      <Input
        ref={ref}
        size="sm"
        className="w-full"
        radius="full"
        type="text"
        label="Search games..."
        endContent={<BsSearch className="text-xl mb-1" />}
      />
    </form>
  );
};

export default SearchInput;
