import React from "react";
import ParticleContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import AvatarGorilla from "../components/AvatarGorilla";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MasonryGrid from "../components/MasonryGrid";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex sm:flex-row flex-col">
      <div className="w-full">
        <div className="text-center flex flex-col justify-center xl:text-left h-max xl:max-w-[80vw] mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 z-10 sm:pr-20 mb-6 sm:text-4xl text-3xl leading-[3.25rem]"
          >
            {t("home.welcomeFirst")} <br />
            {t("home.welcomeSecond")}<br/>
            <span className="text-accent">{t("home.welcomeThird")}</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" z-10 sm:pr-20   mx-auto xl:mx-0 mb-6 xl:mb-8 text-center xl:text-justify"
          >
            {t("home.description")}
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:hidden relative"
          >
            <ProjectsBtn />
          </motion.div>
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
      <MasonryGrid/>
      {/* <div className="w-[1200px] h-full fixed right-0 bottom-0">
        <div className="bg-none opacity-10 xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute translate-z-0"></div>

      </div> */}
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
