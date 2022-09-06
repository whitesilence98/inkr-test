import React, {useEffect, useState} from "react";
import clsx from "clsx";

import classes from "./ripple.module.scss";

interface IState {
   ripples: {
      x?: number;
      y?: number;
      size?: number;
      length?: number;
   }[];
}

const ButtonRipple = ({color}: {color: string}) => {
   const [state, setState] = useState<IState>({
      ripples: [],
   });

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const handleRipple = (e: any) => {
      try {
         const ele = e.currentTarget.getBoundingClientRect();
         const size = ele.width > ele.height ? ele.width : ele.height;
         const x = e.pageX - ele.x - size / 2;
         const y = e.pageY - ele.y - size / 2;
         const id = Math.random().toString();
         setState(prevState => ({
            ...prevState,
            ripples: [...prevState.ripples, {x, y, size, id}],
         }));
      } catch (e) {
         // eslint-disable-next-line no-console
         console.log("WinLog 🐳🐳🐳 ~ e", e);
      }
   };

   const onRippleRemove = () => {
      setState(prevState => ({
         ...prevState,
         ripples: [],
      }));
   };

   useEffect(() => {
      if (state.ripples.length > 0) {
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         let timeoutId: any = null;
         if (state.ripples.length > 0) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
               onRippleRemove();
            }, 1000);
         }
         return () => clearTimeout(timeoutId);
      }
   }, [state.ripples.length]);

   return (
      <div onClick={handleRipple} className={classes["button_ripple"]}>
         {state.ripples.map((r, index) => (
            <span
               key={index.toString()}
               style={{left: r.x, top: r.y, height: r.size, width: r.size}}
               className={clsx(
                  classes["button_ripple_item"],
                  classes[`button_ripple_item--${color}`],
               )}></span>
         ))}
      </div>
   );
};

ButtonRipple.defaultProps = {color: "default"};

export default ButtonRipple;
