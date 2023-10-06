import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { navigation } from "@/constants/data";

const Header = () => {
  return (
    <div className="w-full h-20 bg-designColor/30">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo Image" className="w-24" />
        </Link>
        <ul className="flex items-center text-sm uppercase gap-5 font-semibold text-zinc-600">
          {navigation.map((item) => (
            <Link key={item.title} href={item.href}>
              <li className="hover:text-black cursor-pointer duration-300 relative group overflow-hidden">
                {item.title}
                <span className="h-[1px] w-full bg-black inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300" />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
