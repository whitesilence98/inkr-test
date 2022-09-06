import React from "react";

import {Card} from "@components/atoms";
import {CommentBox, CommentList} from "@components/organisms";

const ITEMS = [
   {
      name: "a",
      date: "a",
      likes: 1,
      comment: 2,
      avatar: "a",
   },
];

const Comments = () => {
   return (
      <Card title="12 Comments">
         <CommentList items={ITEMS} />
         <CommentBox />
      </Card>
   );
};

export default Comments;
