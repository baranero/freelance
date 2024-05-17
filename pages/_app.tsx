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
          Usługi przeciwpożarowe, instrukcja bezpieczeństwa pożarowego, operat ppoż., strefy zagrożenia wybuchem, ocena zagrożenia wybuchem, projekt SSP, DSO, oddymianie, oświetlenie awaryjne
        </title>
        <meta name="description" content="Oferujemy usługi inżynierii bezpieczeństwa pożarowego w Kaliszu oraz pobliskich miastach, takich jak Ostrów Wielkopolski, Kępno, Jarocin, Koźmin Wielkopolski, Pleszew, Sieradz, Konin, Turek i inne. Nasza oferta obejmuje instrukcje bezpieczeństwa pożarowego, operaty przeciwpożarowe, audyty budynków, projekty systemów sygnalizacji pożarowej, dźwiękowych systemów ostrzegawczych, systemów oddymiania, awaryjnego oświetlenia ewakuacyjnego, wyznaczanie stref zagrożenia wybuchem oraz oceny zagrożenia wybuchem." />
<meta name="keywords" content="inżynieria bezpieczeństwa pożarowego Kalisz, instrukcja bezpieczeństwa pożarowego Kalisz, operat ppoż. Kalisz, systemy sygnalizacji pożarowej Kalisz, dźwiękowe systemy ostrzegawcze Kalisz, awaryjne oświetlenie ewakuacyjne Kalisz, systemy oddymiania Kalisz, oceny zagrożenia przed wybuchem Kalisz, audyty przeciwpożarowe Kalisz, Ostrów Wielkopolski, Kępno, Jarocin, Koźmin Wielkopolski, Pleszew, Sieradz, Konin, Turek"/>

        <meta name="author" content="Jakub Baran" />
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
      <html lang="pl" />
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
