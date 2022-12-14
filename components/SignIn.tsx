import { Button } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import {
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { auth, db } from "../configs/firebase.config";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import PersonIcon from "@mui/icons-material/Person";

import { doc, setDoc } from "firebase/firestore";
import Head from "next/head";

type Props = {};

const SignIn = (props: Props) => {
  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const SignInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const SignInWithGitHub = () => {
    const provider = new GithubAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const Registration = () => {
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    if (!email && !password) {
      console.log("Email or Password are empty");
      return null;
    } else {
      createUserWithEmailAndPassword(auth, email, password).catch((error) => {
        const Message = error.message;
        const Code = error.code;
        // console.log(Message);
        // console.log(Code);
        Toast(Message);
      });
    }
  };

  const SignInWithEmail = () => {
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    if (!email && !password) {
      console.log("Email or Password are empty");
      return null;
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  };

  return (
    <div className=" flex flex-col lg:flex-row justify-center items-center lg:h-screen w-screen bg-signin">
      <Head>
        <title>Turbo SignIn</title>
      </Head>
      <div className="gap-4 flex flex-col lg:flex-row justify-around p-5 lg:p-10 m-5 lg:m-10 dark:bg-black bg-white w-5/6 lg:w-2/4 h-auto rounded-xl shadow-md ">
        <div className="w-full flex flex-col items-center justify-center space-y-2 lg:space-y-5">
          <h1 className="font-extrabold dark:text-white  text-black text-2xl lg:text-4xl">
            Sign in
          </h1>{" "}
          <form
            action=""
            className="flex flex-col space-y-2 lg:space-y-5 w-full"
          >
            <div className="flex items-center space-x-3">
              <EmailIcon className="text-black dark:text-white " />{" "}
              <input
                id="Email"
                className="w-full border dark:bg-black dark:text-white bg-white rounded-md p-3 text-black"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center space-x-3">
              <PasswordIcon className="text-black dark:text-white" />
              <input
                id="Password"
                className="w-full border dark:bg-black bg-white rounded-md p-3 dark:text-white text-black"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="flex flex-row w-full justify-center">
              <Button
                variant="outlined"
                className="p-3 w-3/4"
                onClick={SignInWithEmail}
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
        <div className="flex flex-col text-black p-0 lg:p-5  justify-center w-full items-center">
          <h3 className="font-bold text-sm">Alternative way to sign in</h3>
          <GoogleLoginButton onClick={SignInWithGoogle} />
          <FacebookLoginButton onClick={SignInWithFacebook} />
          {/* dont understand why authentificaiton with github is not working properly, will check settings in Github Developer Tools */}
          {/* <GithubLoginButton onClick={SignInWithGitHub} /> */}
        </div>
      </div>
      <div className="bg-white dark:bg-black h-auto w-5/6 lg:w-2/4 rounded-lg shadow-md p-5 m-5 lg:m-10 lg:p-10">
        <div className="w-full flex flex-col items-center justify-center space-y-2 lg:space-y-5">
          <h1 className="font-extrabold dark:text-white text-black text-2xl lg:text-4xl">
            Register
          </h1>{" "}
          {/* Creating new account */}
          <form className="flex flex-col space-y-2 lg:space-y-5 w-full">
            <div className="flex items-center space-x-3">
              <EmailIcon className="text-black dark:text-white" />{" "}
              <input
                id="regEmail"
                className="w-full dark:bg-black bg-white  border rounded-md p-3 dark:text-white text-black"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center space-x-3">
              <PasswordIcon className="text-black dark:text-white" />
              <input
                id="regPassword"
                className="w-full dark:bg-black bg-white border rounded-md p-3 dark:text-white text-black"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="flex flex-row w-full justify-center">
              <Button
                onClick={Registration}
                variant="outlined"
                className=" border-violet-600 text-violet-600 p-3 w-2/3"
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
