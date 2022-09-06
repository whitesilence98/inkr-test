import React from "react";

import classes from "./float-icon.module.scss";

import {useTheme} from "@context/theme.context";

const ThemeButton = () => {
   const {handleToggle} = useTheme();

   return (
      <div onClick={handleToggle} className={classes["dark-light"]}>
         <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
         </svg>
      </div>
   );
};

export default ThemeButton;
