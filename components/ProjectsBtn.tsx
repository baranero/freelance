import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <button className="mx-auto xl:mx-0 z-10 bg-slate-300 group rounded-full px-6 border border-slate-400 hover:bg-slate-200 transition-all duration-300">
      <Link href={"/services"} className="relative flex justify-center items-center bg-cover bg-center bg-no-repeat  p-4">
        <span className="text-lg group-hover:scale-110 transition-all duration-300">Usługi &nbsp;</span>
        <HiArrowRight className="text-lg group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </button>
  );
};

export default ProjectsBtn;
