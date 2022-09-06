import * as React from "react";

import classes from "./home.module.scss";

import {CardList} from "@components/organisms";

const Home = ({animeList}: any) => {
   return (
      <div className={classes["root"]}>
         <CardList items={animeList} />
      </div>
   );
};

export default Home;
