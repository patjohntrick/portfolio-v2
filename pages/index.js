import Head from "next/head";
import Hero from "../components/home/Hero";
import Profile from "../components/home/Profile";
import Project from "../components/home/Project";

export default function Home() {
  return (
    <div className=" bg-theme ">
      <Head>
        <title>John Patrick Resurreccion | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Floating /> */}
      <Hero />
      <Profile />
      <Project />
    </div>
  );
}
