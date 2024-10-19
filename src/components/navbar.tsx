"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ThemeSwitcher from "./theme-switcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full md:fixed top-0 left-0 h-16 border flex justify-between z-40 items-center px-4 bg-white/5 border-b backdrop-blur-sm">
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
      <div className="hidden md:flex">
        {navLinks.map((nav) => (
          <Link
            className="mx-4 cursor-pointer font-semibold z-40 hover:underline"
            href={nav.link}
            key={nav.link}
          >
            {nav.label}
          </Link>
        ))}
      </div>
      <ThemeSwitcher />
      <Menu
        className="md:hidden block hover:cursor-pointer size-8"
        onClick={() => setOpen(true)}
      />
      <Sheet open={open} onOpenChange={handleClose}>
        <SheetContent>
          <div className="flex flex-col mt-10 gap-y-4">
            {navLinks.map((nav) => (
              <Link
                className="mx-2 cursor-pointer z-40 text-2xl hover:underline"
                href={nav.link}
                key={nav.link}
                onClick={() => setOpen(false)}
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
