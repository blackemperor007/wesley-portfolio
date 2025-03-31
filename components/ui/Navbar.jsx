"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import TransitionLink from "../utils/TransitionLink";

const NavBar = () => {
  const navlinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Works",
      path: "/works",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const pathname = usePathname();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ul className="w-full flex justify-center gap-4 items-center h-full">
        {
            navlinks.map((link,index) => {
                return (
                    <li key={index} className={`text-sm font-medium ${pathname === link.path ? "text-primarycolor" : "text-white"} hover:text-primarycolor transition-all ease-out duration-200`}><TransitionLink href={link.path}> {link.name} </TransitionLink></li>
                )
            })
        }
      </ul>
      <a href="#">
        <button className="bg-primarycolor transition-all ease-out duration-200 px-6 rounded-2xl hover:opacity-85 py-2 text-sm w-full whitespace-nowrap">
          Hire me!
        </button>
      </a>
    </div>
  );
};

export default NavBar;
