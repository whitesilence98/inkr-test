import React from "react";

import {RelatedItem} from "@components/molecules";

import {Related} from "@models/comic";

interface IRelatedListProps {
   items: Related[];
}

const RelatedList = ({items}: IRelatedListProps): JSX.Element => {
   if (!items.length) return <></>;

   return (
      <>
         {items.map((item, index) => {
            return <RelatedItem key={index.toString()} item={item} />;
         })}
      </>
   );
};

export default RelatedList;
