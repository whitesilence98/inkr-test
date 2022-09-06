import React from "react";

import classes from "./button.module.scss";

import {Button as AntdButton, ButtonProps} from "@components/_setting";

import ButtonRipple from "./ripple.component";

interface IButtonProps extends ButtonProps {
   loading?: boolean;
   onClick?: () => void;
}

const Button = (props: IButtonProps) => {
   const {children, color, disabled, loading, onClick, type, ...rest} = props;

   const handleClick = () => {
      if (onClick) {
         onClick();
      }
   };

   return (
      <div className={classes["button"]}>
         <AntdButton {...rest} disabled={disabled || loading} onClick={handleClick} type={type}>
            {loading ? <div className={classes["button_loading"]} /> : children}
            {!loading && <ButtonRipple color={type === "primary" ? color : "default"} />}
         </AntdButton>
      </div>
   );
};

Button.defaultProps = {
   color: "default",
   variant: "contained",
   fullWidth: false,
};

export {Button};
