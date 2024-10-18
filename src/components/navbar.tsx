import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen border flex justify-between items-center px-4 bg-white/5 border-b">
      <div className="flex justify-center items-center">
        <Image src={`/cybotix.png`} alt="logo" width={200} height={200} className="size-14" />
        <p className="text-2xl font-semibold">CYBOTIXX</p>
      </div>
      
    </div>
  );
};

export default Navbar;
