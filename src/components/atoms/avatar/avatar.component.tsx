import React from "react";

import {Avatar as AntdAvatar, AvatarProps} from "@components/_setting";

interface IAvatarProps extends AvatarProps {
   url?: string;
}

const Avatar = ({...props}: IAvatarProps) => {
   return <AntdAvatar {...props} />;
};

export {Avatar};
