import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className=" my-16" id="Skills">
      <div className="flex flex-col flex-wrap items-center">
        <p data-aos="fade-up" className="font-bold text-3xl sm:text-4xl">
          MY Skills
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-4 pt-10 rounded-3xl justify-center  sm:w-1/2">
          <button
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex gap-2 rounded-2xl p-4 bg-slate-200 hover:bg-slate-400 duration-700 hover:scale-110 hover:rounded-full text-lg"
          >
            <FaHtml5 size={30} /> HTML
          </button>
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex  hover:bg-slate-400 hover:scale-110 hover:rounded-full gap-2 rounded-2xl p-4 bg-slate-200 text-lg"
          >
            <FaCss3 size={30} /> CSS
          </button>
          <button
            data-aos="fade-up"
             data-aos-delay="600"
            className="flex gap-2 rounded-2xl p-4 bg-slate-200 text-lg  hover:bg-slate-400 hover:scale-110 hover:rounded-full "
          >
            <IoLogoJavascript size={30} /> Javascript
          </button>
          <button
            data-aos="fade-up"
             data-aos-delay="800"
            className="flex gap-2 rounded-2xl p-4 bg-slate-200 text-lg  hover:bg-slate-400 hover:scale-110 hover:rounded-full "
          >
            <FaReact size={30} /> React
          </button>
          <button
            data-aos="fade-up"
             data-aos-delay="1000"
            className="flex gap-2 rounded-2xl p-4 bg-slate-200 text-lg  hover:bg-slate-400 hover:scale-110 hover:rounded-full "
          >
            <SiTailwindcss size={30} /> Tailwind
          </button>
          <button
            data-aos="fade-up"
             data-aos-delay="1200"
            className="flex gap-2 rounded-2xl p-4 bg-slate-200 text-lg  hover:bg-slate-400 hover:scale-110 hover:rounded-full"
          >
            <TbBrandNodejs size={30} /> NodeJs
          </button>
          <button
            data-aos="fade-up"
              data-aos-delay="1400"
            className="flex gap-2 rounded-2xl p-4 bg-slate-200 text-lg  hover:bg-slate-400 hover:scale-110 hover:rounded-full "
          >
            <SiExpress size={30} /> Express
          </button>
          <button
            data-aos="fade-up"
             data-aos-delay="1600"
            className="flex gap-2 rounded-2xl p-4 bg-slate-200 text-lg  hover:bg-slate-400 hover:scale-110 hover:rounded-full "
          >
            <DiMongodb size={20} /> MongoDB
          </button>
          <button
            data-aos="fade-up"
             data-aos-delay="1800"
            className="flex gap-2 rounded-2xl p-4 bg-slate-200 text-lg  hover:bg-slate-400 hover:scale-110 hover:rounded-full"
          >
            <FaGithub size={30} /> Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
