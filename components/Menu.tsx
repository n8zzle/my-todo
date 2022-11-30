import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QuizIcon from "@mui/icons-material/Quiz";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase.config";
import Link from "next/link";

type Props = {};

const Menu = (props: Props) => {
  const [user] = useAuthState(auth);
  const CheckAvilability = (user) => {
    console.log(user);
    if (!user.displayName) {
      return user.email;
    } else {
      return user.displayName;
    }
  };

  return (
    <div className="bg-white flex flex-col w-[300px] space-y-5">
      {/* Logo And Burger */}
      <div className="h-[75px]  flex justify-between items-center p-5">
        <Link href="/">
          <div className="flex items-center">
            <DoneAllIcon className="text-black" />
            <h1 className="text-black text-2xl font-extrabold">Turbo</h1>
          </div>
        </Link>
        <div>
          <IconButton>
            <MenuIcon className="text-black" />
          </IconButton>
        </div>
      </div>

      {/* Name and Account Picture */}
      <div className="flex flex-col justify-center items-center space-y-2">
        <Avatar src={user.photoURL} sx={{ width: 75, height: 75 }} />
        <h1 className="text-black text-2xl font-bold">
          {CheckAvilability(user)}
        </h1>
      </div>

      {/* Menu */}
      <div className="flex flex-col w-full justify-center p-5 space-y-5 ">
        <Link href="/Dashboard">
          <div className="flex flex-row space-x-3 cursor-pointer">
            <HomeIcon className="text-black" />
            <h3 className="text-black">Dashboard</h3>
          </div>
        </Link>
        <div>
          <h4 className="text-black text-sm">Data</h4>
        </div>
        <Link href="/ManageTeams">
          <div className="flex flex-row space-x-3 cursor-pointer">
            <GroupsIcon className="text-black" />
            <h3 className="text-black">Manage Teams</h3>
          </div>
        </Link>
        <Link href="/ContactInformation">
          <div className="flex flex-row space-x-3 cursor-pointer">
            <ContactsIcon className="text-black" />
            <h3 className="text-black">Contact Information</h3>
          </div>
        </Link>
        <div className="flex flex-row space-x-3 cursor-pointer">
          <ReceiptIcon className="text-black" />
          <h3 className="text-black">Invoices Balances</h3>
        </div>
        <div>
          <h4 className="text-black text-sm">Pages</h4>
        </div>
        <div className="flex flex-row space-x-3 cursor-pointer">
          <AccountBoxIcon className="text-black" />
          <h3 className="text-black">Profile Form</h3>
        </div>
        <div className="flex flex-row space-x-3 cursor-pointer">
          <CalendarMonthIcon className="text-black" />
          <h3 className="text-black">Calendar</h3>
        </div>
        <div className="flex flex-row space-x-3 cursor-pointer">
          <QuizIcon className="text-black" />
          <h3 className="text-black">FAQ Page</h3>
        </div>
        <div>
          <h4 className="text-black text-sm">Charts</h4>
        </div>
        <div className="flex flex-row space-x-3 cursor-pointer">
          <BarChartIcon className="text-black" />
          <h3 className="text-black">Bar Chart</h3>
        </div>
        <div className="flex flex-row space-x-3 cursor-pointer">
          <PieChartIcon className="text-black" />
          <h3 className="text-black">Pie Chart</h3>
        </div>
        <div className="flex flex-row space-x-3 cursor-pointer">
          <ShowChartIcon className="text-black" />
          <h3 className="text-black">Line Chart</h3>
        </div>
      </div>
    </div>
  );
};

export default Menu;
