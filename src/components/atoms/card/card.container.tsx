import React from "react";
import clsx from "clsx";

import classes from "./card.module.scss";

import {Card as AntdCard, CardProps} from "@components/_setting";

interface ICardProps extends CardProps {
   className?: string;
   children?: React.ReactNode;
   noPadding?: boolean;
   title?: string;
}

const Card = ({children, className, noPadding = false, title, ...props}: ICardProps) => {
   return (
      <div className={clsx(classes["card"], className)}>
         <AntdCard bordered={false} {...props} title={null}>
            <div className={clsx(classes["wrapper"], {[classes["wrapper--noPadding"]]: noPadding})}>
               <h4 className={classes["title"]}>{title}</h4>
               {children}
            </div>
         </AntdCard>
      </div>
   );
};

export {Card};
