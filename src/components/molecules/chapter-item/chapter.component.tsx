import {memo, useMemo} from "react";

import classes from "./chapter.module.scss";

import {NextImage, Pricing} from "@components/atoms";

import {Chapter} from "@models/comic";

interface IChapterItemProps {
   item: Chapter;
   isLastRead?: boolean;
}

const ChapterItem = memo(({item, isLastRead = false}: IChapterItemProps): JSX.Element => {
   const paidComponent = useMemo(() => {
      if (item.isPaid) return <Pricing value={<p className="text-secondary">5</p>} />;
      return <p className="text-secondary">FREE</p>;
   }, [item.isPaid]);

   return (
      <div className={classes["chapter"]}>
         <NextImage
            height={62}
            width={78}
            src={item.image.url}
            alt={item.image.alt}
            imgClassName={classes["image"]}
         />
         <div className={classes["content"]}>
            <p>{item.name}</p>
            {isLastRead && <p className="text-secondary">Last read 2 days ago</p>}
         </div>
         {!isLastRead && <div className={classes["description"]}>{paidComponent}</div>}
      </div>
   );
});

ChapterItem.displayName = "ChapterItem";

export {ChapterItem};
