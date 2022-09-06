import * as React from "react";

import classes from "./detail.module.scss";

import About from "./about";
import ChaptersList from "./chapters-list";
import Comment from "./comment";
import GetApp from "./get-app";
import PricingPromotion from "./pricing-promotion";
import RelatedComic from "./related-manga";
import Summary from "./summary";

const MangaDetail = () => {
   return (
      <div className={classes["root"]}>
         <div className={classes["main"]}>
            <Summary />
            <PricingPromotion />
            <ChaptersList />
         </div>
         <div className={classes["side"]}>
            <About />
            <RelatedComic />
            <Comment />
            <GetApp />
         </div>
      </div>
   );
};

export default MangaDetail;
