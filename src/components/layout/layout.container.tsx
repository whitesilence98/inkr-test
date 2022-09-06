import * as React from "react";

import classes from "./layout.module.scss";

import ThemeProvider from "@context/theme.context";

import ThemeButton from "./float-icon";

export default function Layout({children}: {children: React.ReactNode}) {
   return (
      <ThemeProvider>
         <div className={classes["root"]}>{children}</div>
         <ThemeButton />
      </ThemeProvider>
   );
}
