import React, { useState } from "react";
import { HiHome, HiUser, HiRectangleGroup, HiViewColumns, HiEnvelope } from "react-icons/hi2";
import { IoClose, IoMenu } from "react-icons/io5";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSTransition } from "react-transition-group";

const Nav = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navData = [
    { name: t("navbar.home"), path: "/", icon: <HiHome /> },
    { name: t("navbar.about"), path: "/about", icon: <HiUser /> },
    { name: t("navbar.services"), path: "/services", icon: <HiRectangleGroup /> },
    // { name: t("navbar.work"), path: "/work", icon: <HiViewColumns /> },
    { name: t("navbar.contact"), path: "/contact", icon: <HiEnvelope /> },
  ];

  const router = useRouter();
  const pathname = router.pathname;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-max">
      <div className="flex justify-between items-center p-4 sm:hidden">
        <button
          className="text-2xl md:hidden relative"
          onClick={handleToggle}
          aria-label="Mobile Menu"
        >
          <CSSTransition in={!isOpen} timeout={300} classNames="icon" unmountOnExit>
            <IoMenu size={40} className="text-accent z-20" />
          </CSSTransition>
          <CSSTransition in={isOpen} timeout={300} classNames="icon" unmountOnExit>
            <IoClose size={40} className="text-accent fixed z-20 top-10 right-8" />
          </CSSTransition>
        </button>
      </div>
      <CSSTransition in={isOpen} timeout={300} classNames="menu" unmountOnExit>
        <div className={`fixed inset-0 bg-slate-200 z-10 md:hidden`}>
          <div className="flex flex-col items-center pt-20">
            {navData.map((link, index) => (
              <Link
                className={`${
                  link.path === pathname && "text-accent"
                } px-4 py-2 font-normal items-center group hover:text-accent transition-all duration-300`}
                key={index}
                href={link.path}
                onClick={handleLinkClick}
              >
                <div className="flex items-center space-x-2 justify-center">
                  <span>{link.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </CSSTransition>
      <div className="hidden md:flex md:flex-row items-center">
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } px-4 py-2 font-normal items-center group hover:text-accent transition-all duration-300`}
            key={index}
            href={link.path}
          >
            <div className="flex items-center space-x-2 justify-center">
              <span>{link.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
