"use client";
import React, { useState } from "react";
import Link from "next/link";
import { color, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  const navItems = [
    {
      name: "Talha",
      path: "#Talha",
      aosdelay: "2",
    },
    {
      name: "About",
      path: "#About",
      aosdelay: "200",
    },
    {
      name: "Project",
      path: "#Project",
      aosdelay: "400",
    },
    {
      name: "Skills",
      path: "#Skills",
      aosdelay: "600",
    },
    {
      name: "Contact",
      path: "#Contact",
      aosdelay: "800",
    },
  ];

  return (
    <div
      //  data-aos="fade-down"
      className="flex items-center justify-center m-10"
    >
      <div className="bg-white w-96 p-2 rounded-2xl fixed z-50">
        <ul className="flex list-none">
          {navItems.map((item) => (
            <li
             data-aos='fade-down'
             data-aos-delay={item.aosdelay}
              className=" mr-auto "
              key={item.path}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
