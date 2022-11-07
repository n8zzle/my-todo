import { Avatar, Button } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase.config";

type Props = {};

const Navbar = (props: Props) => {
  const [user] = useAuthState(auth);
  return (
    <div className="w-full p-5 h-[75px] flex gap-4">
      <div className="flex w-1/2 items-center">
        <h1 className="text-2xl text-black font-bold">Test</h1>
      </div>
      <div className="flex w-1/2 items-center justify-end space-x-5">
        <h3 className="text-sm text-black">{user.displayName}</h3>
        <Avatar src={user.photoURL} onClick={() => auth.signOut()} />
      </div>
    </div>
  );
};

export default Navbar;
