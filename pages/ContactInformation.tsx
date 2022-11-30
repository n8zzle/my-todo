import React from "react";
import Menu from "../components/Menu";
import Navbar from "../components/NavBar";

type Props = {};

const ContactInformation = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-row">
      <Menu />
      <div className="w-full">
        <Navbar />
        Contact Information
      </div>
    </div>
  );
};

export default ContactInformation;
