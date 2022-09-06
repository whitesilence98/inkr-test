import {AppProps} from "next/app";

import "antd/dist/antd.css";
import "@styles/globals.css";
import "@components/molecules/loading/loading-module.scss";

import {PageLoading} from "@components/molecules";
import Layout from "@components/layout";

import i18n from "@utils/i18n.utils";

i18n.init(); //run i18n

function MyApp({Component, pageProps}: AppProps) {
   return (
      <Layout>
         <PageLoading overlay />
         <Component {...pageProps} />
      </Layout>
   );
}

export default MyApp;
