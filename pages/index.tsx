import React from "react";
import {NextPage} from "next";

import {Seo} from "@components/atoms";
import {Home} from "@components/pages";

import {getAnime} from "@services/anime.services";

const SAMPLE_META = {
   title: "INKR TEST",
   siteName: "NKR TEST",
   description: "description",
   url: "url",
   image: "image",
   type: "website",
   robots: "follow, index",
};

export const getStaticProps = async () => {
   const {data} = await getAnime();
   return {
      props: {data},
   };
};

const HomePage: NextPage = () => {
   return (
      <>
         <Seo {...SAMPLE_META} />
         <Home />
      </>
   );
};

export default HomePage;
