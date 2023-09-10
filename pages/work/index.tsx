import React from "react";
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Work = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary/30 pt-24 lg:flex xl:flex justify-center lg:items-center xl:items-center overflow-y-scroll xl:overflow-hidden">
      <div className="hidden bottom-0 right-[18px] lg:fixed xl:fixed lg:flex xl:flex">
        <Circles />
      </div>
      <div className="container h-full mx-auto mt-10">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              {t("works.title")} <span className="text-accent">.</span>
            </motion.h2>

          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <div className="hidden bottom-0 left-0 lg:fixed xl:fixed lg:flex xl:flex">
        <Bulb />
      </div>
    </div>
  );
};

export default Work;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "en";

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ["common"])),
    },
  };
};
