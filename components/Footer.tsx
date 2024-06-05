import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
import LanguageSwitcher from "./LanguageSwitcher";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col pt-12 pb-4 bg-slate-300/60 sm:text-left text-center sm:px-20 px-4 items-center">
    <footer
      className="flex sm:flex-row flex-col gap-x-10 gap-y-6 text-sm
    "
    >
      <Link className="flex flex-col items-center" href={"/"}>
        <Image src={"/logo.webp"} width={80} height={100} alt="Logo" priority={true} />
        <h1 className="text-2xl text-center">
          Fire Protection <span className="text-accent">Solutions</span>
        </h1>
      </Link>
      <div>
        <ul>
          <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/"}>
              Strona Główna
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/about"}>
              O mnie
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Usługi
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/work"}>
              Realizacje
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/contact"}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Pozostańmy w kontakcie</h3>
        <div className="flex items-center sm:justify-start justify-center gap-x-4 mt-4">
            <AiOutlineMail className="" size={20} />
            <a href="mailto:jakub.baran2@gmail.com">jakub.baran2@gmail.com</a>
        </div>
        <div className="flex items-center sm:justify-start justify-center gap-x-4 mt-2">
            <BsFillTelephoneFill className="" size={20} />
            <a href="tel:+4879078993">+48 790 782 993</a>
        </div>
      </div>
      <div>
        <h3>Usługi</h3>
        <ul className="mt-3">
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Instrukcja Bezpieczeństwa Pożarowego
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              IBP
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Operat przeciwpożarowy
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Operat ppoż.
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Składowanie odpadów
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Audyt przeciwpożarowy obiektu
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Audyt ppoż.
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Ocena zagrożenia wybuchem
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Strefy zagrożenia wybuchem
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Projekt Systemu Sygnalizacji Pożarowej
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Projekt Awaryjnego Oświetlenia Ewakuacyjnego
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Projekt oddymiania grawitacyjnego klatek schodowych
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Inżynieria bezpieczeństwa pożarowego
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Usługi przeciwpożarowe
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Usługi ppoż.
            </Link>
            </li>
        </ul>
      </div>
      <div>
        <h3>Gdzie działam?</h3>
        <ul className="mt-3">
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Kalisz
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Pleszew
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Ostrów Wielkopolski
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Konin
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Turek
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Krotoszyn
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Sieradz
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Jarocin
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Ostrzeszów
            </Link>
            </li>
            <li>
            <Link className="hover:text-accent transition-all duration-300" href={"/services"}>
              Turek
            </Link>
            </li>
            
        </ul>
      </div>
    </footer>
    <div className="mt-8 text-sm">
    &#169; {currentYear} | Fire Protection Solutions
    </div>
    </div>
  );
};

export default Footer;
