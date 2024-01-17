"use client";
import { fetchTemp } from '@/utils'
import { useState, useEffect } from "react";
import Test from 'components/Test'



const Body = () => { 
    return (


        <>











            <div className="container br_min-h-screen br_relative" style={{marginTop:"5em"}}>
                 
                <h1 className=" " style={{background:"transparent"}}>
                    <div className=" ">
                        <h1 style={{textAlign:"center",marginBottom:"2em"}} className="br_text-3xl-serif md:br_text-4xl-serif initial:br_text-grey-600">
                            FAQ'S
                        </h1>
                    </div>
                </h1>
                <div className="">
                    <div >
                        <div className="br_items-center md:br_hidden br_grid br_px-4 br_grid-cols-[repeat(3,1fr)] br_border-solid br_border-0 br_border-b br_border-grey-300">

                           
                        </div>

                        <div className="br_overflow-y-auto br_flex-grow br_pb-3 text-center">
                            <details className="br_pl-4 md:br_pl-8 br_pr-4">
                                <summary className="br_list-none br_cursor-pointer [&::-webkit-details-marker]:br_hidden [&::marker]:br_hidden">
                                    <h3 className="br_border-solid br_border-0 br_border-b br_border-grey-300 br_text-grey-600 br_text-base-sans-bold-stretched br_pb-2  br_justify-between br_items-end br_pt-4">
                                        What is FAQ's ?<br/>
                                        <div className="br_w-3 [details[open]_&]:br_rotate-180 br_transition-transform br_duration-200" style={{display:"inline-block"}}>
                                            <svg
                                                viewBox="0 0 11 6"
                                                width={11}
                                                height={6}
                                                className="br_stroke-none br_fill-current br_w-full br_h-full"
                                            >
                                                <path
                                                    className="st0"
                                                    d="M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                                />
                                            </svg>
                                        </div>
                                    </h3>
                                </summary>
                                <div className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti nulla tenetur optio voluptates culpa. Fugiat, cumque! Voluptate a ea quis, mollitia eum impedit sapiente? A quo earum veniam eligendi.
                                </div>
                            </details> 
                            <details className="br_pl-4 md:br_pl-8 br_pr-4">
                                <summary className="br_list-none br_cursor-pointer [&::-webkit-details-marker]:br_hidden [&::marker]:br_hidden">
                                    <h3 className="br_border-solid br_border-0 br_border-b br_border-grey-300 br_text-grey-600 br_text-base-sans-bold-stretched br_pb-2  br_justify-between br_items-end br_pt-4">
                                        How we use FAQ's ?<br/>
                                        <div className="br_w-3 [details[open]_&]:br_rotate-180 br_transition-transform br_duration-200" style={{display:"inline-block"}}>
                                            <svg
                                                viewBox="0 0 11 6"
                                                width={11}
                                                height={6}
                                                className="br_stroke-none br_fill-current br_w-full br_h-full"
                                            >
                                                <path
                                                    className="st0"
                                                    d="M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                                />
                                            </svg>
                                        </div>
                                    </h3>
                                </summary>
                                <div className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti nulla tenetur optio voluptates culpa. Fugiat, cumque! Voluptate a ea quis, mollitia eum impedit sapiente? A quo earum veniam eligendi.
                                </div>
                            </details> 
                            <details className="br_pl-4 md:br_pl-8 br_pr-4">
                                <summary className="br_list-none br_cursor-pointer [&::-webkit-details-marker]:br_hidden [&::marker]:br_hidden">
                                    <h3 className="br_border-solid br_border-0 br_border-b br_border-grey-300 br_text-grey-600 br_text-base-sans-bold-stretched br_pb-2  br_justify-between br_items-end br_pt-4">
                                        I want to learn more about FAQ's ?<br/>
                                        <div className="br_w-3 [details[open]_&]:br_rotate-180 br_transition-transform br_duration-200" style={{display:"inline-block"}}>
                                            <svg
                                                viewBox="0 0 11 6"
                                                width={11}
                                                height={6}
                                                className="br_stroke-none br_fill-current br_w-full br_h-full"
                                            >
                                                <path
                                                    className="st0"
                                                    d="M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                                />
                                            </svg>
                                        </div>
                                    </h3>
                                </summary>
                                <div className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti nulla tenetur optio voluptates culpa. Fugiat, cumque! Voluptate a ea quis, mollitia eum impedit sapiente? A quo earum veniam eligendi.
                                </div>
                            </details> 
                        </div>
                    </div>





                     
                </div>
            </div>


            <div>

            </div>








        </>








    )
}

export default Body