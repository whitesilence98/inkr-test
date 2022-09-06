import React from "react";

import classes from "./icon-button.module.scss";

import {Button} from "../button";

const IconButton = ({...props}) => {
   return (
      <div className={classes["icon-button"]}>
         <Button {...props} />
      </div>
   );
};

export {IconButton};
