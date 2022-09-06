import React from "react";

import classes from "./pricing.module.scss";

interface IPricingProps {
   size?: number;
   value?: React.ReactNode;
}

const Pricing = ({size = 16, value}: IPricingProps) => {
   return (
      <div className={classes["pricing"]}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 16 16">
            <path
               fill="#FFD60A"
               fillRule="evenodd"
               d="M8 16A8 8 0 108 0a8 8 0 000 16zm-.001-1.95a6.05 6.05 0 100-12.1 6.05 6.05 0 000 12.1zm0 .672a6.723 6.723 0 100-13.445 6.723 6.723 0 000 13.446zm.21-10.2l.955 1.938c.03.06.087.102.154.112l2.138.31c.167.025.234.23.113.348l-1.47 1.433a.408.408 0 00-.118.361l.347 2.024a.204.204 0 01-.295.215L8.12 10.257a.204.204 0 00-.19 0l-1.912 1.006a.204.204 0 01-.296-.215l.366-2.13a.204.204 0 00-.06-.18L4.483 7.23a.204.204 0 01.113-.348l2.138-.31a.204.204 0 00.153-.112l.956-1.937a.204.204 0 01.366 0z"
               clipRule="evenodd"></path>
         </svg>
         {value}
      </div>
   );
};

export {Pricing};
