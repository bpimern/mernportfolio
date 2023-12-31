"use client";
import Image from "next/image";
import { logo } from "@/assets/images";
import Link from "next/link";
import { navigation } from "@/constants/data";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full h-20 bg-[#fcd4d1] sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0 relative">
        <Link href={"/"}>
          <Image src={logo} alt="Logo Image" className="w-24" />
        </Link>
        <ul className="hidden md:flex items-center text-sm uppercase gap-5 font-semibold text-zinc-600">
          {navigation.map((item) => (
            <Link key={item.title} href={item.href} target={item?.target}>
              <li
                className={`hover:text-black cursor-pointer duration-300 relative group overflow-hidden ${
                  pathname === item.href && "text-black"
                }`}
              >
                {item.title}
                <span
                  className={`h-[1px] w-full bg-black inline-flex absolute left-0 bottom-0 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300 ${
                    pathname === item.href && "translate-x-0"
                  }`}
                />
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
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute right-0 px-10 py-6 top-20 z-10  inline-flex md:hidden flex-col bg-black items-start text-sm uppercase gap-5 font-semibold text-zinc-200"
          >
            {navigation.map((item) => (
              <li
                key={item.title}
                onClick={() => {
                  router.push(item.href), setShow(false);
                }}
                className="hover:text-white cursor-pointer duration-300 relative group overflow-hidden"
              >
                {item.title}
                <span className="h-[1px] w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300" />
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Header;
