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
          Jakub Baran | Strony internetowe, sklepy internetowe, aplikacje
          webowe, SEO
        </title>
        <meta
          name="description"
          content="Tworzę responsywne strony internetowe, sklepy internetowe oraz aplikacje webowe. Specjalizuję się również w optymalizacji SEO."
        />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />

            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default appWithTranslation(MyApp);
