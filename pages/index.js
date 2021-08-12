import Head from "next/head";
import Header from "../components/Header";
import MainAlert from "../components/MainAlert";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import HeroOrder from "../components/HeroOrder";
import Staff from "../components/Staff";
import BottomNotice from "../components/BottomNotice";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Starbucks</title>
        <link rel="icon" href="/main.svg" />
      </Head>
      <Header />
      <div className="lg:mx-10 ">
        <MainAlert />
        <Hero />
        <Hero2 />
        <Hero3 />
        <HeroOrder />
        <Staff />
        <BottomNotice />
        <Footer />
      </div>
    </div>
  );
}
