import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Button, IconButton } from "@mui/material";
import Home from "../pages";
import AddIcon from "@mui/icons-material/Add";
type Props = {};

const Menu = (props: Props) => {
  const newProject = () => {
    const task = prompt("New Project Name:");
    console.log(task);
  };
  return (
    <div className="bg-white flex flex-col w-[250px] space-y-10">
      <div className="flex p-5 items-center justify-center space-x-2 h-[75px]">
        <DoneAllIcon className="text-black" />
        <h1 className="text-black text-2xl font-bold">Turbo</h1>
      </div>
      <div>
        <div className="flex flex-row items-center space-x-3">
          <h4 className="text-black opacity-[0.8] font-bold  ml-3">Projects</h4>
          <IconButton onClick={newProject}>
            <AddIcon />
          </IconButton>
        </div>
        <div className=" flex flex-col space-y-5 space-x-5 p-5">
          <h2 className="text-black font-bold text-lg">Test</h2>
        </div>
      </div>
    </div>
  );
};

export default Menu;
