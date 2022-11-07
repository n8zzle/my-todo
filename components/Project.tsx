import { Button } from "@mui/material";

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase.config";
import Navbar from "./NavBar";

type Props = {};

const Project = (props: Props) => {
  const [user] = useAuthState(auth);
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      <hr />
      <div className="bg-signin h-full w-full">{user.displayName}</div>
    </div>
  );
};

export default Project;
