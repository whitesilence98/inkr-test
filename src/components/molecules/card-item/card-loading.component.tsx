import React from "react";
import clsx from "clsx";

import classes from "./card.module.scss";

export const CardLoading = () => {
   return (
      <div className={classes["root"]}>
         <div className={clsx(classes["card"], classes["loading"])}>
            <div className={classes["image"]}></div>
            <div className={classes["content"]}>
               <h4 />
               <div className={classes["description"]}></div>
            </div>
         </div>
      </div>
   );
};
