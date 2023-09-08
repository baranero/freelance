import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  return (
    <header className="backdrop-blur-md md:backdrop-blur-none lg:backdrop-blur-none xl:backdrop-blur-none absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="mx-auto">
        <div className="flex flex-col w-[80vw] lg:flex-row justify-between items-center gap-y-2 py-2">
          <Link href={"/"}>
            <Image
              src={"/download.svg"}
              width={220}
              height={48}
              alt="Logo"
              priority={true}
            />
          </Link>

          <div className="flex items-center justify-between">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
