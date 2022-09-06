import {memo} from "react";
import clsx from "clsx";

import classes from "./comment.module.scss";

import {Avatar, NextImage} from "@components/atoms";

import {CommentProps} from "@models/comic";

interface ICommentItem {
   item: CommentProps;
}

const CommentItem = memo(({item}: ICommentItem): JSX.Element => {
   return (
      <div className={classes["comment"]}>
         <div className={classes["header"]}>
            <Avatar
               size={32}
               src={
                  <NextImage src="/images/comment-avatar.png" height={32} width={32} alt="null" />
               }
            />
            <div className={classes["content"]}>
               <p className={clsx(classes["user-name"], "text-secondary")}>Han Solo</p>
               <span className="text-dimmer">Commented on Chapter 35 • 24 min. ago</span>
               <p className={classes["comment"]}>
                  I had no idea such a sequel was coming as I thought the show had ended and Kyoto
                  Animation took a hard hit from the tragedy but currently 4 episodes in as of
                  writing this review, and I love every second of it.
               </p>
               <div className={classes["wrapper"]}>
                  <div className={classes["action"]}>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 12 12">
                        <path
                           fill="#fff"
                           fillOpacity="0.85"
                           d="M11.008 6.291c.225-.297.35-.661.35-1.04 0-.602-.337-1.17-.878-1.488a.906.906 0 00-.46-.125H6.81l.08-1.646A1.434 1.434 0 006.493.93 1.428 1.428 0 005.451.482c-.696 0-1.312.468-1.497 1.14l-1.15 4.164H1.071a.428.428 0 00-.429.429v4.875c0 .237.192.429.429.429h8.053a.89.89 0 00.355-.073 1.722 1.722 0 00.976-2.081 1.723 1.723 0 00.277-1.536 1.723 1.723 0 00.275-1.538zm-9.4 4.263V6.751h1.084v3.803H1.607zm8.523-4.727l-.294.254.186.34a.765.765 0 01-.17.942l-.293.254.186.34a.765.765 0 01-.17.942l-.293.254.186.34a.761.761 0 01-.358 1.06H3.55V6.708L4.882 1.88a.59.59 0 01.565-.433.476.476 0 01.478.498l-.128 2.657h4.21a.775.775 0 01.386.649c0 .22-.096.43-.262.576z"></path>
                     </svg>
                     <span className="text-secondary">61</span>
                  </div>
                  <div className={classes["action"]}>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 12 12">
                        <path
                           fill="#fff"
                           fillOpacity="0.85"
                           d="M5.357 6.001a.643.643 0 101.286 0 .643.643 0 00-1.286 0zm2.679 0a.643.643 0 101.286 0 .643.643 0 00-1.286 0zm-5.357 0a.643.643 0 101.285 0 .643.643 0 00-1.285 0zm8.855-2.325A6.003 6.003 0 006 .001h-.027A5.986 5.986 0 000 6.029c.005.93.225 1.847.643 2.677v2.036a.616.616 0 00.616.616h2.037c.83.418 1.747.638 2.677.643h.028c.803 0 1.58-.155 2.313-.46a5.953 5.953 0 001.913-1.274A5.987 5.987 0 0012 6.028a5.977 5.977 0 00-.466-2.352zM9.51 9.542A4.956 4.956 0 016 10.983h-.023a5.002 5.002 0 01-2.318-.582l-.112-.06H1.66V8.454l-.06-.113a5 5 0 01-.583-2.318A4.951 4.951 0 012.459 2.49a4.945 4.945 0 013.52-1.472H6a4.958 4.958 0 013.525 1.458 4.956 4.956 0 011.459 3.547A4.963 4.963 0 019.51 9.542z"></path>
                     </svg>
                     <span className="text-secondary">12</span>
                  </div>
                  <p className={clsx(classes["button"], "text-secondary")}>Reply</p>
               </div>
            </div>
         </div>
      </div>
   );
});

CommentItem.displayName = "CommentItem";

export {CommentItem};
