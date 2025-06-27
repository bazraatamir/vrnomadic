"use client";
import dynamic from "next/dynamic";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import VirtualCulture from "./components/hero";

export default function HomePage() {
  return (
    <div className='w-full h-screen bg-[#EDEDED] overflow-hidden'>
      <section className='container h-screen mx-auto p-4 mt-16'>
        <VirtualCulture />
      </section>
    </div>
  );
}
