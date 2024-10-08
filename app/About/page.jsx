"use client";
import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="my-10" id="About">
        <div className="flex flex-col flex-wrap items-center justify-center gap-6 py-10">
          <p data-aos="fade-up" className="font-bold text-3xl sm:text-4xl">
            About Me
          </p>
          <p
            data-aos="fade-up"
            className=" px-4 sm:w-2/3  text-xl sm:text2xl leading-10 tracking-tight text-center"
          >
            I'm a MERN Stack Developer specializing in React, Node, Express,
            MongoDB and Tailwind. My coding wand crafts enchanting, user-focused
            web experiences, blending innovation and functionality into seamless
            interaction. Driven by a passion for the extraordinary, every line
            of code I write is a step towards redefining the ordinary.
          </p>
          <div className=" flex flex-wrap gap-3 items-center justify-center">
            <div data-aos="fade-up" data-aos-delay="200">
              <IoLogoJavascript
                className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150"
                size={50}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <FaReact
                className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150"
                size={50}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <FaNodeJs
                className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150"
                size={50}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <SiExpress
                className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150 "
                size={50}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="1000">
              <DiMongodb
                className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150"
                size={50}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="1200">
              <SiTailwindcss
                className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150"
                size={50}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="1400">
              <FaGithub
                className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150 "
                size={50}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
