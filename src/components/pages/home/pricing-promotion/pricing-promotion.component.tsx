import React from "react";

import classes from "./pricing-promotion.module.scss";

import {Card, Pricing} from "@components/atoms";

const PricingPromotion = () => {
   return (
      <Card title={`Pricing & Promotion`}>
         <div className={classes["table"]}>
            <div className={classes["flex"]}>
               <div className={classes["top"]}>
                  <p className="text-secondary">FREE</p>
                  <h5>3 chapters</h5>
               </div>
               <div className={classes["top"]}>
                  <p className="text-secondary">LOCKED</p>
                  <div className={classes["top__lock"]}>
                     <h5>7 chapters</h5>
                     <span className="text-secondary">(</span>
                     <Pricing
                        size={10}
                        value={<span className="text-secondary">5 / chapter</span>}
                     />
                     <span className="text-secondary">)</span>
                  </div>
               </div>
            </div>
            <div className={classes["flex"]}>
               <div className={classes["center"]}>
                  <div className={classes["title"]}>
                     <h5>Total Price</h5>
                     <p className="text-secondary">Instant access to all chapters • No Ad </p>
                  </div>
                  <div className={classes["pricing-wrapper"]}>
                     <Pricing size={16} value={<h5 className="bold">35</h5>} />
                  </div>
               </div>
            </div>
            <div className={classes["flex"]}>
               <div className={classes["bottom"]}>
                  <div className={classes["title"]}>
                     <div className={classes["purple"]}>
                        <h5 className={classes["purple__text"]}>Save money with INKR Extra</h5>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width={16}
                           height={16}
                           fill="none"
                           viewBox="0 0 16 16">
                           <path
                              fill="#844CFF"
                              fillRule="evenodd"
                              d="M12.324 10.751l2.161-6.25a.347.347 0 00-.005-.215.38.38 0 00-.132-.178.449.449 0 00-.45-.044L10.397 5.91 8.362 2.696a.393.393 0 00-.151-.143.44.44 0 00-.419 0 .393.393 0 00-.15.143L5.62 5.909 2.12 4.064a.447.447 0 00-.463.033.38.38 0 00-.137.183.347.347 0 00-.002.222L3.68 10.75h8.645zm-.253 1.375H3.798v1.375h8.273v-1.375z"
                              clipRule="evenodd"></path>
                        </svg>
                     </div>
                     <p className="text-secondary">
                        Instant access to all chapters • No Ad • Extra saving
                     </p>
                  </div>
                  <div>
                     <div className={classes["sale"]}>
                        <div className={classes["sale__percent"]}>
                           <h4>50%</h4>
                        </div>
                        <div className={classes["sale__price"]}>
                           <Pricing
                              size={16}
                              value={
                                 <>
                                    <span>35</span>
                                    <h5 className="bold">18</h5>
                                 </>
                              }
                           />
                        </div>
                     </div>
                     <span className={classes["saving-note"]}>Saving rates may vary</span>
                  </div>
               </div>
            </div>
         </div>
         <div className={classes["learn-more"]}>
            <p>Want to read for free? Learn more </p>
         </div>
      </Card>
   );
};

export default PricingPromotion;
