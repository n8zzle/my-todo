import React from "react";
import Menu from "../components/Menu";
import Navbar from "../components/NavBar";

type Props = {};

const ProfileForm = (props: Props) => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <Menu />
      <div className="w-full">
        <Navbar />
        Profile Form
      </div>
    </div>
  );
};

export default ProfileForm;
