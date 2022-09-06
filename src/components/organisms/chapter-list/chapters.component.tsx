import React from "react";

import {ChapterItem, ChapterLoading} from "@components/molecules";

import {Chapter} from "@models/comic";

interface IChapterListProps {
   items: Chapter[];
}

const ChapterList = ({items}: IChapterListProps): JSX.Element => {
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
      if (items.length) {
         setTimeout(() => setLoading(false), 1000);
      }
   }, [items]);

   if (!items.length) return <></>;

   if (loading)
      return (
         <>
            {new Array(2).fill(1).map((_, index) => (
               <ChapterLoading key={index.toString()} />
            ))}
         </>
      );

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
