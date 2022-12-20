import { Avatar } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Menu from "../components/Menu";
import Navbar from "../components/NavBar";
import { auth } from "../configs/firebase.config";

type Props = {};

const ProfileForm = (props: Props) => {
  const [user] = useAuthState(auth);
  return (
    <div className="w-screen h-screen flex flex-row overflow-hidden">
      <Menu />
      <div className="w-full">
        <Navbar />
        <div className="flex flex-col h-full justify-center items-center">
          <h1 className="text-4xl font-extrabold tracking-[5px]">
            Personal Information
          </h1>
          <div className="flex flex-col items-center  space-y-5 bg-gray-100 w-1/3 h-2/3 p-10 rounded-lg shadow-md">
            <Avatar src={user.photoURL} sx={{ width: 200, height: 200 }} />
            <p>{user.displayName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
