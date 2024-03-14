import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

import { appWithTranslation } from "next-i18next";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
        Jakub Baran | Usługi przeciwpożarowe, instrukcja bezpieczeństwa pożarowego, operat ppoż., projekt, uzgodnienie
        </title>
        <meta
          name="description"
          content="Inżynieria bezpieczeństwa pożarowego, instrukcje bezpieczeństwa pożarowego, operaty ppoż., audyty, uzgodnienia, systemy sygnalizacji poarowej, dźwiękowe systemy ostrzegawcze, awarayjne oświetlenie ewakuacyjne, systemy oddymiania, oceny zagrożenia przed wybuchem"
        />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="">
            <Transition />

            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default appWithTranslation(MyApp);
