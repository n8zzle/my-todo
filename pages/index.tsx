import Menu from "../components/Menu";
import Project from "../components/Project";
import SignIn from "../components/SignIn";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const signInToast = () => {
    toast.success("😊 Succesfully Signed in! 😊", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div
      className="flex flex-col sm:flex-row h-screen w-screen"
      onLoad={signInToast}
    >
      <ToastContainer />
      <Menu />
      <Project />
    </div>
  );
}
