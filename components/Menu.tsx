import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Button } from "@mui/material";
import Home from "../pages";
type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="flex flex-col w-[250px] space-y-10">
      <div className="flex p-5 items-center justify-center space-x-2 h-[75px]">
        <DoneAllIcon className="text-black" />
        <h1 className="text-black text-2xl font-bold">Turbo</h1>
      </div>
      <div className=" flex flex-col space-y-3  p-5">
        <Button
          className="bg-signin "
          variant="contained"
          startIcon={<HomeIcon />}
        >
          <h3 className="text-md">Home</h3>
        </Button>
        <Button
          className="bg-signin"
          variant="contained"
          startIcon={<CheckCircleOutlineIcon />}
        >
          <h3 className="text-md">My Tasks</h3>
        </Button>
        <Button
          className="bg-signin"
          variant="contained"
          startIcon={<NotificationsNoneIcon />}
        >
          <h3 className="text-md">Inbox</h3>
        </Button>
      </div>
      <div>
        <h4 className="text-black opacity-[0.8] font-bold  ml-3">Projects</h4>
        <div className=" flex flex-col space-y-5 space-x-5 p-5">
          <h2 className="text-black font-bold text-lg">Test</h2>
        </div>
      </div>
    </div>
  );
};

export default Menu;
