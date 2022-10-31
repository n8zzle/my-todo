import Menu from "../components/Menu";
import Project from "../components/Project";
import SignIn from "../components/SignIn";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-screen">
      {/* 
      <Menu />
      <Project />
      */}
      <SignIn />
    </div>
  );
}
