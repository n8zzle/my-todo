import { Avatar, IconButton, Switch } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase.config";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";

type Props = {};

const Navbar = (props: Props) => {
  // Switch logic
  // By default disabled
  // onChange should print in colsole enabled or disabped
  const handleChange = (e, value) => {
    console.log(e);
    console.log(value);
  };

  return (
    <div className="bg-white dark:bg-black w-full p-5 h-[75px] flex flex-row gap-4 justify-end">
      <div className="flex items-center space-x-5">
        <Switch onChange={handleChange} />
        <IconButton onClick={() => signOut(auth)}>
          <LogoutIcon className="text-black dark:text-white " />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
