import { Avatar, AvatarGroup, Button } from "@mui/material";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full p-5 h-[75px] bg-sky-100 flex gap-4">
      <div className="flex w-1/2 bg-cyan-100 items-center">
        <h1 className="text-2xl font-bold">Test</h1>
      </div>
      <div className="flex w-1/2 bg-cyan-100 items-center justify-end space-x-5">
        <AvatarGroup max={4}>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
        <Button variant="outlined" className="border-gray-300">
          Share
        </Button>

        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
