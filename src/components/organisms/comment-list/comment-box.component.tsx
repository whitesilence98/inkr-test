import classes from "./comments.module.scss";

import {Avatar, Input} from "@components/_setting";
import {Button, NextImage} from "@components/atoms";

export const CommentBox = () => {
   return (
      <div className={classes["comment-box"]}>
         <div className={classes["header"]}>
            <Avatar
               size={32}
               src={<NextImage src="/images/user-avatar.png" height={32} width={32} alt="null" />}
            />
         </div>
         <div className={classes["content"]}>
            <Input placeholder="Add your comment" className={classes["content__input"]} />
            <Button type="primary">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  fill="none"
                  viewBox="0 0 14 15">
                  <path
                     fill="#000"
                     d="M13.803 7.047L.733.494a.251.251 0 00-.325.094.25.25 0 00-.03.189L1.725 6.28c.02.083.082.15.163.176l2.308.793-2.307.792a.245.245 0 00-.16.176l-1.35 5.511a.251.251 0 00.355.283l13.07-6.516a.258.258 0 00.112-.11.253.253 0 00-.113-.338zM1.92 12.163l.786-3.213 4.612-1.583a.125.125 0 000-.237L2.705 5.549l-.783-3.2 9.813 4.92-9.816 4.894z"></path>
               </svg>
               <span>Add Comment</span>
            </Button>
         </div>
      </div>
   );
};
