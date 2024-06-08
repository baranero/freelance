import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between xl:justify-center">
      <div className="">
        <div className="flex mx-auto flex-col text-center justify-center items-center gap-y-2 py-2">
          <Link className="flex items-center" href={"/"}>
            <Image className="w-14" src={"/logo.png"} width={80} height={100} alt="Logo" />
            <h1 className="sm:text-2xl text-lg">
              Fire Protection <span className="text-accent">Solutions</span>
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
