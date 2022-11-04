import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DoneAllIcon from "@mui/icons-material/DoneAll";
type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="flex flex-col bg-green-100 w-[250px] space-y-10">
      <div className="flex bg-blue-100 p-5 items-center justify-center space-x-2 h-[75px]">
        <DoneAllIcon className="text-black" />
        <h1 className="text-black text-2xl font-bold">Turbo</h1>
      </div>
      <div className="bg-red-100 flex flex-col space-y-5 space-x-5 p-5">
        <button className="flex flex-row ml-5">
          <HomeIcon className="text-black" />
          <h3 className="text-black font-bold text-lg">Home</h3>
        </button>
        <button className="flex flex-row">
          <CheckCircleOutlineIcon className="text-black" />
          <h3 className="text-black font-bold text-lg">My Tasks</h3>
        </button>
        <button className="flex flex-row">
          <NotificationsNoneIcon className="text-black" />
          <h3 className="text-black font-bold text-lg">Inbox</h3>
        </button>
      </div>
      <div>
        <h4 className="text-black opacity-[0.8] font-bold  ml-3">Projects</h4>
        <div className="bg-yellow-100 flex flex-col space-y-5 space-x-5 p-5">
          <h2 className="text-black font-bold text-lg">Test</h2>
        </div>
      </div>
    </div>
  );
};

export default Menu;
