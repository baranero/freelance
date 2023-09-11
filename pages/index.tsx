import React from "react";

import ParticleContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import AvatarGorilla from "../components/AvatarGorilla";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import { GetStaticProps } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary/60">
      <div className="w-full h-full lg:h-[100vh] xl:h-[100vh] lg:pb-0 xl:pb-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-max px-4 xl:max-w-[80vw] mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 z-10 mb-6 mt-36"
          >
            {t("home.welcomeFirst")} <br />
            {t("home.welcomeSecond")}<br/>
            <span className="text-accent">{t("home.welcomeThird")}</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm z-10 xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-8 text-center xl:text-justify"
          >
            {t("home.description")}
          </motion.p>
          <div className="flex justify-center xl:hidden relative mb-28">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full fixed right-0 bottom-0">
        <div className="bg-none opacity-10 xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute translate-z-0"></div>
        <ParticleContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[660px] max-h-[660px] bottom-40 absolute lg:right-[12%]"
        >
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "pl";

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ["common"])),
    },
  };
};
