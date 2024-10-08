"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.webp";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
const page = () => {
  return (
    <div className="m-6 mt-20" id="Talha">
      <div className="flex flex-col flex-wrap items-center justify-center gap-6 py-10">
        <div>
          <Image
            data-aos="zoom-in"
            className="rounded-[50%] items-center justify-center flex border-solid border-8 border-white "
            src={logo}
            width={150}
            height={150}
            alt="logo"
          />
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="1000"
          className="font-bold text-2xl sm:text-4xl"
        >
          Muhammad <strong className="text-green-700">Talha</strong>
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="1200"
          className="  text-red-900 text-2xl sm:text-4xl "
        >
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Frontend Developer",
              2000,
              "Web Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="1400"
          className="px-3 text-center text-xl"
        >
          Passionate coder redefining ordinary with innovative code.
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="1600"
          className="px-3 text-center text-xl items-center "
        >
          My main stack includes React, Node.js, Express.js, MongoDB, Tailwind
          and among other key technologies.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="2000"
          className=" flex flex-col sm:flex-row flex-wrap justify-center gap-3"
        >
          <a
            href="/Talha.pdf"
            download={true}
            className=" flex items-center px-6 py-2 gap-4 bg-slate-400 hover:bg-slate-500 text-white cursor-pointer rounded-2xl border-solid border-4 border-white"
            variant="contained"
          >
            Downlord CV
            <HiOutlineDownload size={20} />
          </a>
          <a
            data-aos="fade-up"
            data-aos-delay="2200"
            href="#Contact"
            className=" flex  items-center px-6 py-2 gap-3 cursor-pointer bg-white hover:bg-slate-200  rounded-2xl border-solid border-4 border-white"
            variant="outlined"
          >
            Contact me here
            <FaArrowRight size={20} />
          </a>

          <div className="flex justify-center">
            <a
              data-aos="fade-up"
              data-aos-delay="2400"
              href="https://www.linkedin.com/in/muhammad-talha-708166284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-125"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              data-aos="fade-up"
              data-aos-delay="2600"
              href="https://github.com/Muhammadtalhatariq/"
              target="_blank"
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-125"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
