// components/Header.tsx
"use client";
import {useState} from "react";
import Link from "next/link";

export default function Header() {
  const [lang, setLang] = useState<"MN" | "EN">("MN");
  return (
    <header className='container bg-[#EDEDED] flex items-center justify-between p-4   mx-auto '>
      {/* Logo */}
      <div className='flex items-center space-x-2'>
        <img
          src='/viber_image_2025-06-11_11-39-59-813.png'
          alt='Logo'
          className='h-8'
        />
      </div>

      {/* Navigation */}
      <nav className='flex space-x-6 text-sm text-gray-700'>
        <Link href='#'>БАЙГАЛЬ</Link>
        <Link href='#'>МУЗЕЙ</Link>
        <Link href='#'>УРЛАГ, ӨВ СОЁЛ</Link>
      </nav>

      {/* Actions */}
      <div className='flex items-center space-x-4 text-sm text-gray-700'>
        <Link href='#'>ХАМТРАН АЖИЛЛАХ</Link>

        <div className='flex space-x-1'>
          <button
            onClick={() => setLang("MN")}
            className={`hover:underline ${
              lang === "MN" ? "text-blue-600 font-medium" : "text-gray-600"
            }`}>
            MN
          </button>
          <span>|</span>
          <button
            onClick={() => setLang("EN")}
            className={`hover:underline ${
              lang === "EN" ? "text-blue-600 font-medium" : "text-gray-600"
            }`}>
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
