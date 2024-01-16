"use client";

import { useState } from "react";
import Image from "next/image";
import { TempProps } from "@/types"; 
import Link from "next/link";

interface CarCardProps {
  temp: TempProps;
}



const CarCard = ({ temp }: CarCardProps) => {
  const { id,title,category, type, img } = temp; 
  

  return (
    <div className="br_grid br_grid-cols-1 supports-subgrid:br_row-span-4 supports-subgrid:br_grid-rows-[subgrid]" >
    <div className="Layout br_contents">
 
        <center>
            <span className="br_contents br_edition-">
                <div className="">
                    <div className="initial:br_row-span-1 br_col-start-1 br_row-start-1 br_relative">
                        <div className="br_aspect-[4/5] sm:br_aspect-square">
                            <div className="br_w-full br_h-full br_relative br_flex br_items-center br_justify-center">
                                <img
                                    className="br_w-full br_h-full br_object-center br_object-contain br_mx-auto br_max-h-64 sm:br_max-h-72 sm:br_px-4"
                                    alt="Slim Sleeve - Cocoa-Java"
                                    loading="lazy"
                                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                    src={img[0]} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                        <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">
                            <a
                                href={`/product?id=${id}`}
                                className="br_text-current br_no-underline"
                            >
                                {title}
                                <span
                                    className="br_absolute br_inset-0 br_z-10" 
                                />
                            </a>
                        </h3>
                        <div className="br_text-base-sans-bold-spaced br_text-grey-600 br_inline-flex br_flex-wrap br_gap-x-2 br_items-baseline apex:br_text-white group-[.centered]/tile:br_justify-center">
                            {type}
                        </div>
                    </div>

                    <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                        <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                            <span className="br_text-base-sans-bold-cta-uppercase ">
                                Shop now &gt;
                            </span>
                        </p>
                    </div>
                </div>
            </span>
        </center>
    </div>
</div>
  )
}

export default CarCard