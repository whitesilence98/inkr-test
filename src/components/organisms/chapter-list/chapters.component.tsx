import React from "react";

import {ChapterItem} from "@components/molecules";

import {Chapter} from "@models/comic";

interface IChapterListProps {
   items: Chapter[];
}

const ChapterList = ({items}: IChapterListProps): JSX.Element => {
   if (!items.length) return <></>;

   return (
      <>
         {/* <div
            style={{
               position: "fixed",
               top: 0,
               left: 0,
               height: "100vh",
               width: "100vw",
               background: "red",
               zIndex: 1000,
            }}>
            Chapter
         </div> */}
         {items.map((item, index) => {
            return <ChapterItem key={index.toString()} item={item} />;
         })}
      </>
   );
};

export default ChapterList;
