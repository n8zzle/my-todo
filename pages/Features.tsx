import React from "react";
import Navbar from "../components/NavBar";

type Props = {};

const Features = (props: Props) => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="h-full w-full flex justify-center items-center">
        <h1 className="text-4xl font-extrabold">Featues of this project</h1>
      </div>
    </div>
  );
};

export default Features;
