import { Button } from "@mui/material";
import React from "react";
import Navbar from "./NavBar";

type Props = {};

const Project = (props: Props) => {
  return (
    <div className="flex flex-col w-full h-full  bg-violet-100">
      <Navbar />
    </div>
  );
};

export default Project;
