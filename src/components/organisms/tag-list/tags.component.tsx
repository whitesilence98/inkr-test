import React from "react";

import classes from "./tags.module.scss";

import {Tag} from "@models/comic";

interface ITagsProps {
   tags: Tag[];
}

const TagList = ({tags}: ITagsProps): JSX.Element => {
   if (!tags.length) return <></>;

   return (
      <div className={classes["tags"]}>
         {tags.map((tag, index) => (
            <div key={index.toString()} className={classes["tags__item"]}>
               <p>{tag.name}</p>
            </div>
         ))}
      </div>
   );
};

export {TagList};
