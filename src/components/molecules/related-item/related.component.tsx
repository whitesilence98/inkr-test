import {memo} from "react";

import classes from "./related.module.scss";

import {NextImage} from "@components/atoms";

import {Related} from "@models/comic";

import {formatNumberOfView} from "@utils/number.utils";

interface IRelatedItemProps {
   item: Related;
}

const RelatedItem = memo(({item}: IRelatedItemProps): JSX.Element => {
   return (
      <div className={classes["chapter"]}>
         <NextImage
            height={120}
            width={80}
            src={item.image.url}
            alt={item.image.alt}
            imgClassName={classes["image"]}
         />
         <div className={classes["content"]}>
            <h5>{item.name}</h5>
            {item.exclusived && (
               <div className={classes["content__exclusive"]}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="none"
                     viewBox="0 0 16 16">
                     <path
                        fill="#844CFF"
                        fillRule="evenodd"
                        d="M12.324 10.751l2.161-6.25a.347.347 0 00-.005-.215.38.38 0 00-.132-.178.449.449 0 00-.45-.044L10.397 5.91 8.362 2.696a.393.393 0 00-.151-.143.44.44 0 00-.419 0 .393.393 0 00-.15.143L5.62 5.909 2.12 4.064a.447.447 0 00-.463.033.38.38 0 00-.137.183.347.347 0 00-.002.222L3.68 10.75h8.645zm-.253 1.375H3.798v1.375h8.273v-1.375z"
                        clipRule="evenodd"></path>
                  </svg>
                  <h5>EXCLUSIVE</h5>
               </div>
            )}
            <p className="text-primary">{item.author}</p>
            <p className="text-primary">{formatNumberOfView(item.readed)}</p>
         </div>
      </div>
   );
});

RelatedItem.displayName = "RelatedItem";

export {RelatedItem};
