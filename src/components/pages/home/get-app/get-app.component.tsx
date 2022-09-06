import React from "react";
import QRCode from "react-qr-code";

import classes from "./get-app.module.scss";

import {Card} from "@components/atoms";

const QR_CODE =
   "https://apps.apple.com/app/apple-store/id1500548154?pt=121114486&ct=m:web;s:web_inkr;n:none&mt=8";

const About = () => {
   return (
      <Card className={classes["root"]} loading={false}>
         <div className={classes["main"]}>
            <div className={classes["content"]}>
               <h5>Get The App</h5>
               <p>
                  Love this title? Scan the QR code to continue reading right on your mobile
                  devices.
               </p>
            </div>
            <div className={classes["qr-code"]}>
               <QRCode value={QR_CODE} size={100} />
            </div>
         </div>
      </Card>
   );
};

export default About;
