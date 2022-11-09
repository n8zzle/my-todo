import { Avatar, Button, IconButton } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase.config";
import AddIcon from "@mui/icons-material/Add";
type Props = {};

const Navbar = (props: Props) => {
  const [user] = useAuthState(auth);
  const newTask = () => {
    const name = prompt("Task name");
    const description = prompt("Task description");
    const result = [name, description];
    console.log(result);
  };
  return (
    <div className="bg-white w-full p-5 h-[75px] flex gap-4">
      <div className="flex w-1/2 items-center">
        <h1 className="text-black font-semibold text-lg">Add Task</h1>
        <IconButton className="space-x-3" onClick={newTask}>
          <AddIcon className="text-black" />
        </IconButton>
      </div>
      <div className="flex w-1/2 items-center justify-end space-x-5">
        <h3 className="text-sm text-black">{user.displayName}</h3>
        <IconButton>
          <Avatar
            src={user.photoURL}
            onClick={() => auth.signOut()}
            className="cursor-pointer"
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
