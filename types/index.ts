import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles ?: string;
    handleClick ?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
}


export interface TempProps{ 
    id: string;
    title:string;
    category:string;
    type:string;
    img: string;
}


 