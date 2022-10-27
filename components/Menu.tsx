import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="flex flex-col bg-green-100 w-[250px]">
      <div className="flex bg-blue-100 p-5 items-center justify-between">
        <h1 className="text-xl font-bold">Turbo</h1>
        <IconButton>
          <MenuIcon className="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Menu;
