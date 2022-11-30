import React from "react";
import Menu from "../components/Menu";
import Navbar from "../components/NavBar";

type Props = {};

const PieChart = (props: Props) => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <Menu />
      <div className="w-full">
        <Navbar />
        Pie Chart
      </div>
    </div>
  );
};

export default PieChart;
