import { Button } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import {
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import { auth, provider } from "../configs/firebase.config";
import { signInWithPopup } from "firebase/auth";

type Props = {};

const SignIn = (props: Props) => {
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-signin">
      <div className="gap-4 flex flex-col lg:flex-row justify-around p-10 bg-white w-3/4 h-auto rounded-xl shadow-md">
        <div className="w-full flex flex-col items-center justify-center space-y-5">
          <h1 className="font-extrabold text-black text-4xl">Sign in</h1>{" "}
          <form action="" className="flex flex-col space-y-5 w-full">
            <div className="flex items-center space-x-3">
              <EmailIcon className="text-black" />{" "}
              <input
                className="w-full bg-white border-violet-600 border rounded-md p-3 text-black"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center space-x-3">
              <PasswordIcon className="text-black" />
              <input
                className="w-full bg-white border-violet-600 border rounded-md p-3 text-black"
                placeholder="Password"
                type="password"
              />
            </div>{" "}
            <Button
              variant="outlined"
              className=" border-violet-600 text-violet-600 p-3"
            >
              Sign in
            </Button>
          </form>
        </div>
        <div className="flex flex-col text-black p-5  justify-center w-full items-center">
          <h3 className="font-bold text-sm">Alternative way to sign in</h3>
          <GoogleLoginButton onClick={SignInWithGoogle} />
          <FacebookLoginButton onClick={() => alert("Login with Facebook ")} />
          <GithubLoginButton onClick={() => alert("Login with Github")} />
          <TwitterLoginButton onClick={() => alert("Login with Twitter")} />
        </div>
      </div>
    </div>
  );
};
export default SignIn;
