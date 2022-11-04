import { Avatar, Button } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase.config";

type Props = {};

const Navbar = (props: Props) => {
  const [user] = useAuthState(auth);
  return (
    <div className="w-full p-5 h-[75px] bg-sky-100 flex gap-4">
      <div className="flex w-1/2 bg-cyan-100 items-center">
        <h1 className="text-2xl font-bold">Test</h1>
      </div>
      <div className="flex w-1/2 bg-cyan-100 items-center justify-end space-x-5">
        <h3>Welcome back, {user.displayName}</h3>
        <Avatar src={user.photoURL} onClick={() => auth.signOut()} />
      </div>
    </div>
  );
};

export default Navbar;
