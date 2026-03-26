"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AdminSidebarHeaders() {
  return (
    <Link
      href="/admin"
      className="
        flex items-center gap-1
        w-full
        px-4 py-4
        bg-accent-light
        transition-all duration-200
      "
    >
      {/* Logo box */}
      <div className=" p-2.5 rounded-xl ">
        <Image
          src="/logo/onlylogo-removebg-preview.png"
          alt="Sadai Vandar Logo"
          width={35}
          height={35}
          className="object-contain"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-[20px] font-semibold text-primary">
          Sadai Vandar
        </span>
        <span className="text-[11px] tracking-wide text-neutral uppercase">
          Admin Console
        </span>
      </div>
    </Link>
  );
}