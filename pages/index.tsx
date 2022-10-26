import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo App</title>
      </Head>

      <NavigationBar />
      <div>Hello Igors</div>
    </div>
  );
}
