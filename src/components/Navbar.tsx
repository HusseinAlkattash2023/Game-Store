import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props{
  onSearch: (searchText:string)=> void;
}

export default function Nav({onSearch}:Props) {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <img src={logo} className="w-14 h-14"/>
      </NavbarBrand>
      <NavbarContent className="sm:!w-3/4 w-1/2 mx-0" justify="center">
        <SearchInput onSearch={onSearch}/>
      </NavbarContent>
      <NavbarContent justify="end">
        <ColorModeSwitch/>
      </NavbarContent>
    </Navbar>
  );
}
