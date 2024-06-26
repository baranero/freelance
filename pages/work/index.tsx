import React from "react";
import WorkSlider from "../../components/WorkSlider";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Work = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center lg:items-center xl:items-center ">

      <div className="container h-full mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-4">
          <div className="text-center flex xl:w-[24vw] flex-col lg:text-left mb-4 xl:mb-0">
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
            className="w-full xl:max-w-[65%] pb-24"
          >
            <WorkSlider />
          </motion.div>
        </div>
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
