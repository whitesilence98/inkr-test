import classes from "./credits.module.scss";

import {Avatar} from "@components/atoms";

import {Credit} from "@models/comic";

interface ICreditListProps {
   credits: Credit[];
}

const CreditList = ({credits}: ICreditListProps): JSX.Element => {
   if (!credits.length) return <></>;
   return (
      <div className={classes["root"]}>
         {credits.map((credit, index) => (
            <div key={index.toString()} className={classes["item"]}>
               <Avatar size={40} src={credit.image.url} className={classes["item__avatar"]} />
               <div className={classes["item__content"]}>
                  <p>{credit.name}</p>
                  <p className="text-primary">{credit.role}</p>
               </div>
            </div>
         ))}
      </div>
   );
};

export {CreditList};
