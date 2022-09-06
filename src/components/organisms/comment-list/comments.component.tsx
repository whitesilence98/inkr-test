import React from "react";

import classes from "./comments.module.scss";

import {CommentItem, CommentLoading} from "@components/molecules";

import {CommentProps} from "@models/comic";

interface IList {
   items: CommentProps[];
}

const CommentList = ({items}: IList): JSX.Element => {
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
      if (items.length) {
         setTimeout(() => setLoading(false), 1000);
      }
   }, [items]);

   if (!items.length) return <></>;

   if (loading)
      return (
         <div className={classes["root"]}>
            <CommentLoading />
         </div>
      );

   return (
      <div className={classes["root"]}>
         {items.map((item, index) => {
            return <CommentItem key={index.toString()} item={item} />;
         })}
      </div>
   );
};

export default CommentList;
