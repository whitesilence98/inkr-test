import React from "react";

import {RelatedItem, RelatedLoading} from "@components/molecules";

import {Related} from "@models/comic";

interface IRelatedListProps {
   items: Related[];
}

const RelatedList = ({items}: IRelatedListProps): JSX.Element => {
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
      if (items.length) {
         setTimeout(() => setLoading(false), 1000);
      }
   }, [items]);

   if (!items.length) return <></>;

   if (loading) return <RelatedLoading />;

   return (
      <>
         {items.map((item, index) => {
            return <RelatedItem key={index.toString()} item={item} />;
         })}
      </>
   );
};

export default RelatedList;
