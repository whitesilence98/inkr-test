import {useState} from "react";

import classes from "./about.module.scss";

import {Button, Card} from "@components/atoms";
import {CreditList, ImageGallery, TagList} from "@components/organisms";

const TAGS = [
   {id: 1, name: "Horror"},
   {id: 2, name: "Psychological"},
   {id: 3, name: "Seinen"},
];

const CREDITS = [
   {
      image: {url: "1", alt: "1"},
      name: "Kodansha",
      role: "Publisher",
   },
   {
      image: {url: "1", alt: "1"},
      name: "Kodansha",
      role: "Publisher",
   },
   {
      image: {url: "1", alt: "1"},
      name: "Kodansha",
      role: "Publisher",
   },
];

const About = () => {
   const [state, setState] = useState(false);

   const handleShowMore = () => {
      setState(prev => !prev);
   };

   return (
      <Card title="About this" className={classes["root"]} loading={false}>
         <>
            <div className={classes["section"]}>
               <h5>Genres</h5>
               <TagList tags={[...TAGS]} />
            </div>
            <div className={classes["section"]}>
               <h5>Summary</h5>
               <p className="text-primary">
                  {`Kasane is an ugly girl who is severely bullied by her classmates because of her
               appearance; making things worse, Kasane's mother was a beautiful actress to whom
               Kasane is a dark contrast, even though she is as talented as her mother. However,
               there is nothing to do with this.`}
               </p>
               <div className={classes["gallery"]}>
                  <ImageGallery
                     images={[
                        {url: "1", alt: "1"},
                        {url: "1", alt: "1"},
                        {url: "1", alt: "1"},
                        {url: "1", alt: "1"},
                        {url: "1", alt: "1"},
                     ]}
                  />
               </div>
            </div>
         </>
         {state ? (
            <>
               <div className={classes["section"]}>
                  <h5>Credits</h5>
                  <CreditList credits={CREDITS} />
               </div>
               <div className={classes["section"]}>
                  <h5>Other Facts</h5>
                  <div className={classes["facts"]}>
                     <p className="text-primary">Last Updated</p>
                     <p className={classes["facts__divider"]}>:</p>
                     <p>2 days ago</p>
                  </div>
                  <div className={classes["facts"]}>
                     <p className="text-primary">Age Rating</p>
                     <p className={classes["facts__divider"]}>:</p>

                     <p>All Ages</p>
                  </div>
                  <div className={classes["facts"]}>
                     <p className="text-primary">Color</p>
                     <p className={classes["facts__divider"]}>:</p>

                     <p>Full Color</p>
                  </div>
                  <div className={classes["facts"]}>
                     <p className="text-primary">Origin Media</p>
                     <p className={classes["facts__divider"]}>:</p>

                     <p>Digital</p>
                  </div>
                  <div className={classes["facts"]}>
                     <p className="text-primary">Style Origin</p>
                     <p className={classes["facts__divider"]}>:</p>

                     <p>Chinese Comics (Manhua)</p>
                  </div>
                  <div className={classes["facts"]}>
                     <p className="text-primary">Other Names</p>
                     <p className={classes["facts__divider"]}>:</p>

                     <p>威鸣神斗</p>
                  </div>
               </div>
            </>
         ) : (
            <Button onClick={handleShowMore}>Show More</Button>
         )}
      </Card>
   );
};

export default About;
