import React from "react";
import { Jelly } from "@uiball/loaders";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="bg-signin h-screen w-screen flex justify-center items-center">
      <Jelly size={80} speed={0.9} color="black" />
    </div>
  );
};

export default Loading;
