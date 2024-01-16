"use client";
import { fetchTemp } from '@/utils'
import { useState, useEffect } from "react";
import Test from 'components/Test'



const Body = () => {
    const [allTemp, setTemp] = useState()
    const [isActive1, setIsActive1] = useState(true);

    const a = async () => {
        const b = await fetchTemp()
        setTemp(b)
    }
    useEffect(() => {
        a()
    }, [])




    const checkboxesData = [
        { id: 1, label: 'Cards' },
        { id: 2, label: 'Tags' },
        { id: 3, label: 'Stands' },
        { id: 4, label: 'Stickers' },
        { id: 5, label: 'Business Cards' },
        { id: 6, label: 'Reviews Cards' },
        { id: 7, label: 'Social Media Cards' },
        { id: 8, label: 'Medical ID Cards' },
        { id: 9, label: 'Pets Tags' },
        { id: 10, label: 'Reviews Tags' },
        { id: 11, label: 'Social Media Tags' },
        { id: 12, label: 'Medical ID Tags' },
        { id: 13, label: 'Review Stands' },
        { id: 14, label: 'Menu Stands' },
        { id: 15, label: 'Business Cards Stickers' },
        { id: 16, label: 'Reviews Stickers' },
        { id: 17, label: 'Social Media Stickers' },
        { id: 18, label: 'Medical ID Stickers' },
    ];


    const [checkedIndices, setCheckedIndices] = useState([]);
    const [checkedLabels, setCheckedLabels] = useState([]);

    const handleCheckboxChange = (index, label) => {
        if (checkedIndices.includes(index)) {
            setCheckedIndices(checkedIndices.filter((i) => i !== index));
            setCheckedLabels(checkedLabels.filter((l) => l !== label));
        } else {
            setCheckedIndices([...checkedIndices, index]);
            setCheckedLabels([...checkedLabels, label]);
        }
    };





    const handleClick1 = () => {
        var d2 = document.getElementById("filterId1");
        setIsActive1(!isActive1);
        if (d2) {
            if (isActive1) {
                d2.className += " br_-translate-y-full br_opacity-100";
                d2.classList.remove("br_translate-y-0");
                d2.classList.remove("br_opacity-0");
            }
        }
    };



    const handleClick2 = () => {
        var d3 = document.getElementById("filterId1");
        setIsActive1(!isActive1);
        if (d3) {
            if (!isActive1) {
                d3.className += " br_translate-y-0 br_opacity-0";
                d3.classList.remove("br_-translate-y-full");
                d3.classList.remove("br_opacity-100");
            }
        }
    };





    const uncheckedCheckboxes = checkboxesData.filter(
        (checkbox, index) => !checkedIndices.includes(index)
    );

    checkedIndices?.forEach((item) => {
        const imageElement = document.getElementById(`id_${item + 1}`);
        if (imageElement) {
            imageElement.src = 'https://res.cloudinary.com/duppvjinz/image/upload/v1701685867/eprldb0uad9klcw2ki5z.png';
        }
    });

    uncheckedCheckboxes?.forEach((item) => {
        const imageElement = document.getElementById(`id_${item.id}`);
        if (imageElement) {
            imageElement.src = 'https://res.cloudinary.com/duppvjinz/image/upload/v1701541407/jhvrodq8u9e8vjlwe964.png';
        }
    });


    return (


        <>











            <div className="br_min-h-screen br_relative">
                 
                <header className="br_text-grey-600 br_bg-grey-100 br_p-3 br_pt-11 md:br_py-20 br_flex md:br_justify-center" style={{background:"transparent"}}>
                    <div className="br_text-left md:br_max-w-[600px] lg:br_max-w-[800px] md:br_text-center br_flex br_flex-col br_gap-2  md:br_gap-4 md:br_items-center">
                        <h1 className="br_text-3xl-serif md:br_text-4xl-serif initial:br_text-grey-600">
                            FAQ'S
                        </h1>
                    </div>
                </header>
                <div className="">
                    <div id='filterId1' className="br_text-grey-500 br_fixed br_top-full br_h-full br_bottom-0 br_left-0 br_right-0  br_z-[9999] br_mt-0 br_flex br_flex-col br_justify-between br_transition-opacity br_duration-300 md:br_mt-14 md:br_flex-[0_0_280px] md:br_z-[9980]  br_translate-y-0 br_opacity-0 md:br_opacity-100 md:br_block md:br_relative md:br_h-auto md:br_transform-none">
                        <div className="br_items-center md:br_hidden br_grid br_px-4 br_grid-cols-[repeat(3,1fr)] br_border-solid br_border-0 br_border-b br_border-grey-300">

                            <div className="br_text-base-sans-bold-stretched br_tracking-cta br_text-grey-600 br_my-4 br_py-2 br_px-0 br_border-none br_bg-transparent"></div>
                            <h3 className="br_text-2xl-serif br_text-center br_text-grey-600">Filters</h3>
                            <button onClick={handleClick2} className=" br_justify-end br_border-none br_bg-transparent br_cursor-pointer br_p-0">
                                <span className="br_w-6 br_h-6 br_rotate-45">
                                    <svg
                                        width={14}
                                        height={14}
                                        viewBox="0 0 14 14"
                                        className="br_fill-none br_stroke-current br_w-full br_h-full"
                                    >
                                        <path strokeLinecap="square" d="M0 7 14 7M7 0 7 14" />
                                    </svg>
                                </span>
                            </button>
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
                                <div className="br_my-2 md:br_my-4 md:br_h-full  br_w-full br_gap-x-5 br_columns-2 md:br_columns-1">
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
                                <div className="br_my-2 md:br_my-4 md:br_h-full  br_w-full br_gap-x-5 br_columns-2 md:br_columns-1">
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
                                <div className="br_my-2 md:br_my-4 md:br_h-full  br_w-full br_gap-x-5 br_columns-2 md:br_columns-1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti nulla tenetur optio voluptates culpa. Fugiat, cumque! Voluptate a ea quis, mollitia eum impedit sapiente? A quo earum veniam eligendi.
                                </div>
                            </details> 
                        </div>
                    </div>





                    <div className="br_flex-1" onClick={handleClick1}>
                        <div className="br_flex br_justify-between br_items-center br_gap-4 br_mb-2 br_px-4 br_my-4 md:br_justify-end">
                            <div className="br_flex br_gap-4 br_items-center md:br_hidden">
                                <button className="br_leading-5 br_text-base-sans-bold-stretched br_px-4 br_py-2 br_rounded br_border br_border-solid br_flex br_gap-2 br_justify-center br_items-center br_whitespace-nowrap br_bg-transparent br_text-grey-600 br_border-grey-300">
                                    <svg width={16} height={14}>
                                        <g fill="currentColor" fillRule="nonzero">
                                            <path d="M4.699 0c-.94 0-1.739.588-1.997 1.395H.564A.541.541 0 000 1.939c0 .305.258.545.587.545h2.138C2.96 3.29 3.783 3.88 4.722 3.88c.964 0 1.763-.589 2.021-1.395h8.67c.329 0 .587-.24.587-.545 0-.305-.258-.544-.587-.544h-8.67C6.461.588 5.663 0 4.699 0zm.023 1.09c.494 0 .917.37.917.85 0 .479-.423.85-.917.85-.493 0-.916-.371-.916-.85 0-.48.423-.85.916-.85z" />
                                            <path d="M11.77 4.848c-.939 0-1.738.589-1.996 1.395H.587c-.352 0-.587.24-.587.545 0 .305.258.545.587.545h9.187c.235.806 1.057 1.394 1.997 1.394.963 0 1.762-.588 2.02-1.394h1.622c.329 0 .587-.24.587-.545 0-.305-.258-.545-.587-.545H13.79c-.258-.806-1.057-1.395-2.02-1.395zm.024 1.09c.494 0 .917.37.917.85s-.423.85-.917.85c-.493 0-.916-.37-.916-.85s.4-.85.916-.85z" />
                                            <path d="M7.518 9.697c-.94 0-1.738.588-1.997 1.395H.587c-.352 0-.587.24-.587.544 0 .305.258.545.587.545h4.958c.235.806 1.057 1.395 1.997 1.395.963 0 1.762-.589 2.02-1.395h5.85c.33 0 .588-.24.588-.545 0-.305-.258-.544-.587-.544H9.539c-.259-.807-1.057-1.395-2.02-1.395zm.024 1.09c.493 0 .916.37.916.85 0 .479-.423.85-.916.85-.494 0-.916-.371-.916-.85a.902.902 0 01.916-.85z" />
                                        </g>
                                    </svg>
                                    Filters
                                </button>
                            </div>
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