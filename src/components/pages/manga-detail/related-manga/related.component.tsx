import React from "react";

import {Card} from "@components/atoms";
import {RelatedList} from "@components/organisms";

const ITEMS = [
   {
      id: 1,
      name: "Title Name 1",
      readed: 45600,
      author: "PREQUEL",
      exclusived: true,
      image: {
         url: "http://placecorgi.com/200",
         alt: "chap 1 of manga abc",
      },
   },
   {
      id: 2,
      name: "Title Name 2",
      readed: 45600,
      author: "PREQUEL",
      exclusived: true,
      image: {
         url: "http://placecorgi.com/200",
         alt: "chap 1 of manga abc",
      },
   },
   {
      id: 3,
      name: "Title Name 3",
      readed: 45600,
      author: "PREQUEL",
      exclusived: true,
      image: {
         url: "http://placecorgi.com/200",
         alt: "chap 1 of manga abc",
      },
   },
];

const RelatedComic = () => {
   return (
      <Card title="Related Titles" noPadding>
         <RelatedList items={ITEMS} />
      </Card>
   );
};

export default RelatedComic;
