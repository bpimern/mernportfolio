"use client";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { navigation } from "@/constants/data";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full h-20 bg-designColor/30">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0 relative">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo Image" className="w-24" />
        </Link>
        <ul className="hidden md:flex items-center text-sm uppercase gap-5 font-semibold text-zinc-600">
          {navigation.map((item) => (
            <Link key={item.title} href={item.href}>
              <li className="hover:text-black cursor-pointer duration-300 relative group overflow-hidden">
                {item.title}
                <span className="h-[1px] w-full bg-black inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300" />
              </li>
            </Link>
          ))}
        </ul>
        <div
          onClick={() => setShow(!show)}
          className="inline-flex md:hidden cursor-pointer text-zinc-600 hover:text-black duration-200"
        >
          {show ? <X /> : <Menu />}
        </div>
        {show && (
          <ul className="absolute right-0 px-10 py-6 top-20 z-10 flex flex-col bg-black items-start text-sm uppercase gap-5 font-semibold text-zinc-200">
            {navigation.map((item) => (
              <Link key={item.title} href={item.href}>
                <li className="hover:text-white cursor-pointer duration-300 relative group overflow-hidden">
                  {item.title}
                  <span className="h-[1px] w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300" />
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
