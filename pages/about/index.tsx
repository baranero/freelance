import React, { useState } from "react";
import { FaHtml5, FaCss3, FaReact, FaFigma } from "react-icons/fa";

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
import Image from "next/image";
import Profile from "../../components/Profile";

const About = () => {
  const [index, setIndex] = useState(0);

  const { t } = useTranslation();

  const aboutData: AboutDataItem[] = [
    {
      title: t("about.skills"),
      info: [
        {
          title: "Instrukcja bepieczeństwa pożarowego IBP",
          icons:
            "Zgodnie z §6 Rozporządzenia Ministra Spraw Wewnętrznych i Administracji w sprawie ochrony przeciwpożarowej budynków, innych obiektów budowlanych i terenów z dnia 21 marca 2023 r. (Dz. U. 2023 poz. 822) Właściciele, zarządcy lub użytkownicy obiektów bądź ich części stanowiących odrębne strefy pożarowe, przeznaczonych do wykonywania funkcji użyteczności publicznej, zamieszkania zbiorowego, produkcyjnych, magazynowych oraz inwentarskich, zapewniają i wdrażają instrukcję bezpieczeństwa pożarowego.",
        },
        {
          title: "Operat przeciwpożarowy",
          icons:
            "Zgodnie z art. 42 ust. 4b Ustawy o odpadach z dnia 10 sierpnia 2023 r. (Dz. U. 2023 poz. 1587) do wniosku o zezwolenie na zbieraniu odpadów oraz do wniosku na przetwarzanie odpadów dołącza się operat przeciwpożarowy, zawierający warunki ochrony przeciwpożarowej instalacji, obiektu lub jego części lub innego miejsca magazynowania odpadów, uzgodnione z komendantem powiatowym (miejskim) Państwowej Straży Pożarnej.",
        },
        {
          title: "Audyt przeciwpożarowy",
          icons:
            "Zgodnie z art. 3 ust. 2 Ustawy o ochronie przeciwpożarowej z 20 lutego 2024 r. (Dz. U. 2024 poz. 275) właściciel, zarządca lub użytkownik budynku, obiektu lub terenu ponoszą odpowiedzialność za naruszenie przepisów przeciwpożarowych, w trybie i na zasadach określonych w innych przepisach. ",
        },
        {
          title: "Ocena zagrożenia przed wybuchem",
          icons:
            "Zgodnie z §37 Rozporządzenia Ministra Spraw Wewnętrznych i Administracji w sprawie ochrony przeciwpożarowej budynków, innych obiektów budowlanych i terenów z dnia 21 marca 2023 r. (Dz. U. 2023 poz. 822) w obiektach i na terenach przyległych, gdzie są prowadzone procesy technologiczne z użyciem materiałów mogących wytworzyć mieszaniny wybuchowe lub w których materiały takie są magazynowane, dokonuje się oceny zagrożenia wybuchem.",
        },
      ],
    },
  ];

  return (
    <div className="bg-primary/30 min-h-screen h-full pt-8 lg:flex xl:flex lg:items-center xl:items-center md:overflow-hidden text-center xl:text-left">
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
      ></motion.div>
      <div className="xl:w-[80vw] mx-auto h-max flex flex-col items-start xl:flex-row  mt-10 gap-x-6">
        <div className="flex-1 flex flex-col mx-auto justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-6 mt-16 sm:text-5xl leading-28"
          >
            {t("about.titleFirst")}{" "}
            <span className="text-accent mb-6 mt-16 text-5xl leading-28">
              {t("about.titleSecond")}
            </span>
          </motion.h2>
          <Profile />
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[550px] xl:text-center mx-auto mt-6 mb-4 xl:mx-0 mb-6 xl:mb-2 px-4 xl:px-0"
          >
            mgr inż. Jakub Baran, magister inżynier pożarnictwa
          </motion.p>
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
          <div className="py-2 xl:py-20 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start pb-20">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  key={itemIndex}
                >
                  <Collapsible content={item.icons} title={item.title}></Collapsible>
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
