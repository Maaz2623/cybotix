"use client"
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { LoaderIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {

    const router = useRouter()

    let loading = false

  return (
    <div className="w-full md:fixed top-0 left-0 h-16  flex justify-between z-40 items-center px-4 bg-transparent">
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
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
            <Button disabled={loading} onClick={() => {
                loading = true
                router.push(`/sign-in`)
            }} className="" variant={`secondary`}>{loading ? (
                <LoaderIcon className="size-4 animate-spin text-white" />
            ) : (
                "Sign In"
            )}</Button>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
