"use client";

import { useState } from "react";
import { MainNav } from "./main-nav";
import Image from "next/image";
import heinzLogo from "@/assets/heinz-logo.svg";
import { cn } from "@/lib/utils";

export const SideNav = () => {
  return (
    <div
      className={
        "p-6 flex flex-col h-screen max-w-min sm:max-w-[200px] border-r items-center"
      }
    >
      <p className="text-xl mt-10 tracking-tighter text-primary">
        TIAGO<span className="font-extrabold ">INABA</span>
      </p>
      <MainNav />
    </div>
  );
};
