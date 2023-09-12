import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiAmazonaws,
  SiPrisma,
} from "react-icons/si";

type AboutDataItem = {
  title: string;
  info: {
    title: string;
    icons: string;
  }[];
};


import AvatarRam from "../../components/AvatarRam";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { IconType } from "react-icons/lib";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Collapsible from "../../components/Collapsible";

const About = () => {
  const [index, setIndex] = useState(0);

  const { t } = useTranslation();

  

  const aboutData: AboutDataItem[] = [
    {
      title: t("about.skills"),
      info: [
        {
          title: "Strony internetowe",
          icons: "Tworzenie stron internetowych z wykorzystaniem WordPress i innych zaawansowanych systemów zarządzania treścią. Moja oferta to profesjonalne projekty, łatwa obsługa, oraz optymalizacja SEO dla Twojej witryny. Wyróżnij się online z moją pomocą!"
        },
        {
          title: "Sklepy internetowe",
          icons: "Tworzę sklepy internetowe z użyciem WooCommerce, najlepszego narzędzia e-commerce w WordPress. Moja oferta to perfekcyjne rozwiązania dla Twojego biznesu online. Zyskaj przewagę konkurencyjną dzięki moim profesjonalnym sklepom internetowym i zapewnij swoim klientom niezapomniane zakupy online.",
        },
        {
          title: "Aplikacje webowe",
          icons: "Jako specjalista w tworzeniu aplikacji webowych, oferuję innowacyjne rozwiązania dopasowane do Twoich potrzeb. Moje aplikacje webowe łączą wydajność, bezpieczeństwo i responsywność, gwarantując użytkownikom niezrównane doświadczenia online. Wybierz mnie, aby przekształcić swoje pomysły w działające aplikacje webowe!",
        },
        {
          title: "UI/UX Design",
          icons: "Zapewniam kompleksowe usługi UI/UX Design, które podnoszą jakość interakcji użytkowników z Twoją stroną lub aplikacją. Moje projekty łączą estetykę, intuicyjność i funkcjonalność, co przekłada się na zwiększoną konwersję i satysfakcję klientów. Optymalizuj swoją obecność online z profesjonalnym designem UI/UX!",
        },
        {
          title: "SEO",
          icons: "Optymalizacja stron internetowych to klucz do osiągnięcia wyższej widoczności w wynikach wyszukiwania. Specjalizuję się w skutecznych strategiach SEO, pomagając Twojej witrynie awansować na wyższe pozycje. Zwiększ ruch organiczny i zdobądź nowych klientów dzięki moim usługom SEO.",
        },
      ],
    },
  ];

  return (
    <div className="bg-primary/30 min-h-screen h-full pt-24 lg:flex xl:flex lg:items-center xl:items-center md:overflow-hidden text-center xl:text-left">
      <div className="hidden bottom-0 right-[18px] lg:fixed xl:fixed lg:flex xl:flex">
        <Circles />
      </div>
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="hidden xl:flex w-full h-max max-w-[437px] max-h-[437px] -bottom-2 absolute lg:right-[8%]"
      >
      </motion.div>
      <div className="xl:w-[80vw] mx-auto h-max flex flex-col items-start xl:flex-row  mt-10 gap-x-6">
        <div className="flex-1 flex flex-col mx-auto justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            {t("about.titleFirst")}{" "}
            <span className="text-accent">{t("about.titleSecond")}</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[550px] xl:text-justify mx-auto xl:mx-0 mb-6 xl:mb-2 px-4 xl:px-0"
          >
            {t("about.descriptionFirst")}
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[550px] xl:text-justify mx-auto xl:mx-0 mb-6 xl:mb-2 px-4 xl:px-0"
          >
            {t("about.descriptionSecond")}
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[550px] xl:text-justify mx-auto xl:mx-0 mb-6 xl:mb-2 px-4 xl:px-0"
          >
            {t("about.descriptionThird")}
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[550px] xl:text-justify mx-auto xl:mx-0 mb-6 xl:mb-2 px-4 xl:px-0"
          >
            {t("about.descriptionFourth")}
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col h-max w-full mt-12 xl:max-w-[48%]"
        >
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start pb-32">
            {aboutData[index].info.map((item, itemIndex) => {
              
              return (
                <div
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  key={itemIndex}
                >
                  
                  <Collapsible content={item.icons} title={item.title}>
                  </Collapsible>
                  
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "en";

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ["common"])),
    },
  };
};
