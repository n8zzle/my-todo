import Menu from "../components/Menu";

import Features from "./Features";

export default function Home() {
  const MenuPage = () => {};
  return (
    <div className="flex flex-col sm:flex-row h-screen w-screen overflow-hidden">
      <Menu />
      <Features />
    </div>
  );
}
