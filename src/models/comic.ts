import {ImageProps} from "./common";

export interface Chapter {
   name: string;
   isPaid: boolean;
   image: ImageProps;
}

export interface CommentProps {
   name: string;
   date: string;
   likes: number;
   comment: number;
   avatar: string;
}

export interface Tag {
   id: number;
   name: string;
}

export interface Related {
   id: number;
   name: string;
   readed: number;
   author: string;
   exclusived: boolean;
   image: ImageProps;
}

export interface Credit {
   image: ImageProps;
   name: string;
   role: string;
}
