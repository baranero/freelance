import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

import { appWithTranslation } from "next-i18next";
import Head from "next-head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Usługi przeciwpożarowe, instrukcja bezpieczeństwa pożarowego, operat ppoż., strefy zagrożenia wybuchem, ocena zagrożenia wybuchem, projekt SSP, DSO, oddymianie, oświetlenie awaryjne
        </title>
        <meta
          name="description"
          content="Oferuję usługi inżynierii bezpieczeństwa pożarowego, w tym instrukcje bezpieczeństwa pożarowego, operaty przeciwpożarowe, audyty budynków, projekty systemów sygnalizacji pożarowej, dźwiękowych systemów ostrzegawczych, systemów oddymiania, awaryjnego oświetlenia ewakuacyjnego, wyznaczanie stref zagrożenia wybuchem oraz oceny zagrożenia wybuchem."
        />
        <meta name="keywords" content="inżynieria bezpieczeństwa pożarowego, instrukcja bezpieczeństwa pożarowego, operat ppoż., systemy sygnalizacji pożarowej, dźwiękowe systemy ostrzegawcze, awaryjne oświetlenie ewakuacyjne, systemy oddymiania, oceny zagrożenia przed wybuchem, audyty przeciwpożarowe" />
        <meta name="author" content="Jakub Baran" />
        <meta property="og:title" content="Usługi przeciwpożarowe, instrukcja bezpieczeństwa pożarowego, operat ppoż., strefy zagrożenia wybuchem, ocena zagrożenia wybuchem, projekt SSP, DSO, oddymianie, oświetlenie awaryjne" />
        <meta property="og:description" content="Oferuję usługi inżynierii bezpieczeństwa pożarowego, w tym instrukcje bezpieczeństwa pożarowego, operaty przeciwpożarowe, audyty budynków, projekty systemów sygnalizacji pożarowej, dźwiękowych systemów ostrzegawczych, systemów oddymiania, awaryjnego oświetlenia ewakuacyjnego, wyznaczanie stref zagrożenia wybuchem oraz oceny zagrożenia wybuchem." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jakubbaran.pl" />
        <link rel="canonical" href="https://jakubbaran.pl" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Jakub Baran",
            "url": "https://jakubbaran.pl",
            "description": "Oferuję usługi inżynierii bezpieczeństwa pożarowego, w tym instrukcje bezpieczeństwa pożarowego, operaty przeciwpożarowe, audyty budynków, projekty systemów sygnalizacji pożarowej, dźwiękowych systemów ostrzegawczych, systemów oddymiania, awaryjnego oświetlenia ewakuacyjnego, wyznaczanie stref zagrożenia wybuchem oraz oceny zagrożenia wybuchem.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+48790782993",
              "contactType": "Customer Service"
            },
          })}
        </script>
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="">
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default appWithTranslation(MyApp);
