import React, { useEffect, useState } from "react";
import SlideShow from "./Slideshow";
import Skills from "./Skills";
import Intro from "./Intro";
import Timeline from "./Timeline";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="w-screen">
      <Navbar isActive="1" />
      <div
        className={` transform transition duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <SlideShow />
        <Intro />
        <Skills />
        <Timeline />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
