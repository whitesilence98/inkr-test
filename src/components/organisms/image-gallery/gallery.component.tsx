import classes from "./gallery.module.scss";

import {Image as AntdImage} from "@components/_setting";
import {Image} from "@components/atoms";

import {ImageProps} from "@models/common";

interface IGalleryProps {
   images: ImageProps[];
}

const ImageGallery = ({images}: IGalleryProps) => {
   return (
      <div className={classes["image-gallery"]}>
         <AntdImage.PreviewGroup>
            {images.map((image, index) => (
               <Image
                  key={index.toString()}
                  height={126}
                  src="https://i1.inkr.com/p/2022/7/25/3/925287-271.png/1600.webp"
                  alt={image.alt}
               />
            ))}
         </AntdImage.PreviewGroup>
      </div>
   );
};

export {ImageGallery};
