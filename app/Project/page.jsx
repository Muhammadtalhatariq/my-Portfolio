"use client";
import React from "react";
import Menu from "./Menu/Menu";

const page = () => {
  return (
    <div className="my-16">
      <p
        data-aos="fade-up"
        className="font-bold text-3xl sm:text-4xl flex justify-center pb-8"
        id="Project"
      >
        My Project
      </p>
      <Menu />
    </div>
  );
};

export default page;
