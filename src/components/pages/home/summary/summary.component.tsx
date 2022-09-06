import React from "react";
import clsx from "clsx";

import classes from "./summary.module.scss";

import {Button, Card, IconButton, NextImage} from "@components/atoms";
import {TagList} from "@components/organisms";

const TAGS = [
   {id: 1, name: "18+"},
   {id: 2, name: "NEW"},
   {id: 3, name: "TRENDING"},
   {id: 4, name: "BESTSELLER"},
   {id: 5, name: "MANGA"},
];

const Summary = () => {
   return (
      <Card className={classes["root"]}>
         <div className={classes["main"]}>
            <NextImage
               src="http://placecorgi.com/260/180"
               alt="abc"
               height={280}
               width={170}
               layout="responsive"
               imgClassName={classes["image"]}
            />
            <div className={classes["content-wrapper"]}>
               <div className={classes["content"]}>
                  <div className={classes["content__title"]}>
                     <h2>Kasane</h2>
                     <div style={{display: "flex", gap: 10}}>
                        <IconButton>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 14 14">
                              <path
                                 fill="currentColor"
                                 fillOpacity="0.85"
                                 d="M11.286 9.714c-.51 0-.979.179-1.347.477l-3.7-2.677a2.87 2.87 0 000-1.028l3.7-2.677a2.145 2.145 0 003.49-1.666C13.428.96 12.467 0 11.285 0a2.145 2.145 0 00-2.06 2.737L5.713 5.282a2.856 2.856 0 10-2.284 4.575c.934 0 1.763-.448 2.284-1.14l3.515 2.545A2.145 2.145 0 0011.286 14c1.182 0 2.142-.96 2.142-2.143 0-1.182-.96-2.143-2.142-2.143zm0-8.5a.929.929 0 11-.001 1.858.929.929 0 010-1.858zM3.428 8.571A1.574 1.574 0 011.857 7c0-.866.705-1.571 1.571-1.571C4.295 5.429 5 6.134 5 7s-.705 1.571-1.572 1.571zm7.858 4.215a.93.93 0 110-1.858.93.93 0 010 1.858z"></path>
                           </svg>
                        </IconButton>
                        <IconButton>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="2"
                              height="13"
                              viewBox="0 0 2 13">
                              <path
                                 fill="currentColor"
                                 fillOpacity="0.85"
                                 d="M0 1.984a1 1 0 102 0 1 1 0 00-2 0zm0 5a1 1 0 102 0 1 1 0 00-2 0zm0 5a1 1 0 102 0 1 1 0 00-2 0z"></path>
                           </svg>
                        </IconButton>
                     </div>
                  </div>
                  <h5 className={clsx(classes["content__author"], "text-primary")}>By Kodansha</h5>
                  <h5 className={clsx(classes["content__chapter"], "text-primary")}>
                     Drama • 10 Chapters
                  </h5>
                  {/* <p className={classes["content__static"]}>Drama • 10 Chapters</p> */}
                  <div className={classes["content__genres"]}>
                     <TagList tags={[...TAGS]} />
                  </div>
               </div>
               <Button type="primary">Read First Chapter for FREE</Button>
            </div>
         </div>
      </Card>
   );
};

export default Summary;
