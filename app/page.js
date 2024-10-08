"use client"
import React from 'react'
import Talha from "./Talha/page";
import About from "./About/page";
import Project from "./Project/page";
import Skills from "./Skills/page";

import Contact from "./Contact/page";
import AOS from "aos";
import "aos/dist/aos.css";

export default function page() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Talha />
      <About />
      <Project />
      <Skills />
      <Contact />
    </>
  );
}
