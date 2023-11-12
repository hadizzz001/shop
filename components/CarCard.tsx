"use client";

import { useState } from "react";
import Image from "next/image";
import { TempProps } from "@/types";
import CustomButton from "./CustomButton";
import Link from "next/link";

interface CarCardProps {
  temp: TempProps;
}



const CarCard = ({ temp }: CarCardProps) => {
  const { id,title, description, img } = temp;

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {title}
        </h2>
      </div>
      <p className="flex mt-6 text-[36px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          {description}
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={img} alt="template" sizes="100vw" fill priority className="object-contain" />
      </div>
 
    </div>
  )
}

export default CarCard