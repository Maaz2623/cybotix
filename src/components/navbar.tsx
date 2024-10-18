"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {


  return (
    <div className="w-full h-16 border flex justify-between items-center px-4 bg-white/5 border-b backdrop-blur-sm">
      <div className="flex justify-center items-center">
        <Image
          src={`/cybotix-dark.png`}
          alt="logo"
          width={200}
          height={200}
          className="size-14"
        />
        <p className="text-2xl font-semibold">CYBOTIXX</p>
      </div>
      <div>
        {navLinks.map((nav) => (
          <Link
            className="mx-2 cursor-pointer z-40 hover:underline"
            href={nav.link}
            key={nav.link}
          >
            {nav.label}
          </Link>
        ))}
      </div>
      <div className="w-[150px]"></div>
    </div>
  );
};

export default Navbar;
