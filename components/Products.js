import { useState, useEffect } from "react";
import Link from 'next/link'

function Products() {
    const [showtab, setShowtab] = useState(1);
    const [allTemp, setTemp] = useState()

    const handletab = (e) => {
        setShowtab(e);
    }












    return (


        <div className="sywProductTabs" id="syw-product-tabs">
            <div className="sywProductTabs-title br_text-2xl-serif md:br_text-3xl-serif center" style={{ textAlign: "center" }}>
                <span>Explore our curated collection!</span>
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '.productTabs{margin:25px 0 0 0;padding:0 10px 10px;background:#FFF}.productTabs__tabs{display:flex;flex-direction:row;justify-content:center;background:#fff}.productTabs__tabs__tab{flex:0 1 auto;max-width:320px;width:50%;width:33%;height:230px;position:relative;margin:0 0 -1px 0;transition:margin .3s ease;cursor:pointer}.productTabs__arrow{position:absolute;bottom:60px;right:50%;height:15px;width:15px;border-top:2px solid #ea6a2b;border-right:2px solid #ea6a2b;opacity:0;transform:rotate(135deg) translate(-50%);transition:opacity .3s ease}.productTabs__tabContent{position:absolute;top:0;left:0;right:0;bottom:0;z-index:10}.productTabs__tabContent__title{top:100px;left:0;right:0;z-index:13;transition:top .3s ease;color:#999;text-align:center;position:absolute;padding:10px 10px 0;transition:color .3s ease}.productTabs__tabContent__image{position:absolute;background-position:center center;background-repeat:no-repeat;background-size:contain;z-index:11;top:0;left:50%;transform:translateX(-50%);width:105px;height:105px;border-radius:50%;transition:background-image .3s ease}.productTabs__tabContent__image_tab_1{background-image:url("https://res.cloudinary.com/duppvjinz/image/upload/v1705952516/dfll4wwwtpt2myso4sys.webp?auto=format&fit=max")}.productTabs__tabContent__image_tab_2{background-image:url("https://bellroy-cms-images.imgix.net/3838/icon-inactive-note-sleeve.jpg?auto=format&fit=max")}.productTabs__tabContent__image_tab_3{background-image:url("https://res.cloudinary.com/duppvjinz/image/upload/v1705952516/akxxwxewhxemx6x2tqb8.webp?auto=format&fit=max")}.productTabs__tabs__tab.tab-active .productTabs__tabContent__image_tab_1{background-image:url("https://bellroy-cms-images.imgix.net/3831/icon-active-card-sleeve.jpg?auto=format&fit=max")}.productTabs__tabs__tab.tab-active .productTabs__tabContent__image_tab_2{background-image:url("https://res.cloudinary.com/duppvjinz/image/upload/v1705952516/izipljt6kfdtdcu2xqsk.webp?auto=format&fit=max")}.productTabs__tabs__tab.tab-active .productTabs__tabContent__image_tab_3{background-image:url("https://bellroy-cms-images.imgix.net/3833/icon-active-folio.jpg?auto=format&fit=max")}.productTabs__tabContent__title span{font-size:14px;letter-spacing:1px;line-height:20px;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-weight:700}.productTabs__tabContent__title p{font-size:12px;line-height:18px;color:#444;font-family:\'PT Serif\', sans-serif;-webkit-font-smoothing:antialiased;letter-spacing:0;font-weight:300}.productTabs__tabs__tab.tab-active .productTabs__arrow{opacity:1}.productTabs__tabs__tab.tab-active .productTabs__tabContent__title, .productTabs__tabContent__title{color:#000}.productTabs__content{display:block;height:0;overflow:hidden}.productTabs__content.tab-active{display:block;height:auto;overflow:auto}@media (max-width: 500px){.productTabs__tabContent__title span{font-size:13px;line-height:1.45px}.productTabs__tabs__tab{height:200px}.productTabs__arrow{bottom:25px}}@media (min-width: 768px){.productTabs__tabs__tab{height:230px}.productTabs__tabContent__image{border-radius:unset;width:180px;height:180px}.productTabs__tabContent__title{padding:25px 10px 0}.sywProductTabs-title{padding:60px 0 20px}}@media (min-width: 769px){.productTabs__tabContent__title{top:150px}.productTabs__tabContent__title span{font-size:14px}.productTabs__tabContent__title p{font-size:14px}.productTabs__arrow{bottom:50px}.productTabs__tabs__tab.tab-active{margin:0 0 -1px 0;opacity:1}}@media (min-width: 1300px){.productTabs__tabs__tab{height:250px}.productTabs__arrow{bottom:50px}.productTabs__tabContent__title{padding:30px 10px 0}}.productStylesGrid--center{grid-template-columns:repeat(auto-fill, minmax(350px, 1fr)) [row-end];justify-content:center;max-width:1280px;margin:0 auto}@media (min-width: 700px){.ProductDetail_ProductTilePanes_PaneInfo_Details{text-align:center}.ProductDetail_ProductTilePanes_PaneInfo_ImageWrapper{min-height:285px}}.ShopAndShare__buttonContainer{display:none}\n'
                }}
            />
            <div className="productTabs">


                <div className="productTabs__tabs">
                    <div className="productTabs__tabs__tab tab-active" data-tab="tab_2" onClick={() => handletab(1)}>
                        <div className="productTabs__arrow"></div>
                        <div className="productTabs__tabContent">
                            <div className="productTabs__tabContent__image productTabs__tabContent__image_tab_2"></div>
                            <div className="productTabs__tabContent__title">
                                <span>Cards</span>
                                <br />
                                <div className={showtab === 1 ? "block" : "hidden"}>
                                    <svg style={{ display: "inline" }} width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#0005"></path></g></svg>
                                </div>
                                <p />
                            </div>
                        </div>
                    </div>
                    <div className="productTabs__tabs__tab" data-tab="tab_1" onClick={() => handletab(2)}>
                        <div className="productTabs__arrow"></div>
                        <div className="productTabs__tabContent">
                            <div className="productTabs__tabContent__image productTabs__tabContent__image_tab_1"></div>
                            <div className="productTabs__tabContent__title">
                                <span>
                                    Tags
                                </span>
                                <br />
                                <div className={showtab === 2 ? "block" : "hidden"}>
                                    <svg style={{ display: "inline" }} width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#0005"></path></g></svg>
                                </div>
                                <p />

                            </div>
                        </div>
                    </div>
                    <div className="productTabs__tabs__tab" data-tab="tab_3" onClick={() => handletab(3)}>
                        <div className="productTabs__arrow"></div>
                        <div className="productTabs__tabContent">
                            <div className="productTabs__tabContent__image productTabs__tabContent__image_tab_3"></div>
                            <div className="productTabs__tabContent__title">
                                <span>Stands</span>
                                <br />
                                <div className={showtab === 3 ? "block" : "hidden"}>
                                    <svg style={{ display: "inline" }} width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#0005"></path></g></svg>
                                </div>
                                <p />
                            </div>
                        </div>
                    </div>
                    <div className="productTabs__tabs__tab" data-tab="tab_4" onClick={() => handletab(4)}>
                        <div className="productTabs__arrow"></div>
                        <div className="productTabs__tabContent">
                            <div className="productTabs__tabContent__image productTabs__tabContent__image_tab_4"></div>
                            <div className="productTabs__tabContent__title">
                                <span>Stickers</span>
                                <br />
                                <div className={showtab === 4 ? "block" : "hidden"}>
                                    <svg style={{ display: "inline" }} width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#0005"></path></g></svg>
                                </div>
                                <p />
                            </div>
                        </div>
                    </div>
                </div>













                <div class="tab-content text-dark" id="pills-tabContent">



                    {/* start tab 1*/}
                    <div className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"} >
                        <div className="productTabs">


                            <div className="productTabs__content tab-active" data-tab="tab_2">
                                <div className="productStylesGrid--center">

                                    <div className="br_flex-1">
                                        <div className="br_@container">
                                            <div
                                                className="br_group/tile-grid br_grid br_grid-flow-dense br_gap-1 br_py-1 br_grid-cols-2 sm:br_grid-cols-[repeat(auto-fill,minmax(400px,1fr))] sm:br_px-1 lg:br_grid-cols-[repeat(auto-fill,minmax(400px,1fr))] supports-[container-type]:sm:br_grid-cols-2 supports-[container-type]:sm:@[640px]:br_grid-cols-[repeat(auto-fill,minmax(250px,1fr))] supports-[container-type]:lg:@[1024px]:br_grid-cols-[repeat(auto-fill,minmax(285px,1fr))]"
                                                data-test-id="range-grid-tiles"
                                            >






                                                <Link href="/search?type=Business Cards">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706616165/iz0k3r2kovmnorizaaxw.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                                Business Cards


                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </Link>









                                                <Link href="/search?type=Reviews Cards">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706616165/ybufon0r8culqhhgiesf.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                                Reviews Cards
                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>

                                                </Link>










                                                <Link href="/search?type=Social Media Cards">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706616165/vcksftyynug5e5kilqmi.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                                Social Media Cards
                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>

                                                </Link>













                                                <Link href="/search?type=Medical ID Cards">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706616165/ltelwy1fcjhrvdvixk0o.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                                Medical ID Cards
                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>

                                                </Link>





















                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* close tab 1*/}


                    {/* start tab 2*/}

                    <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade show"} >
                        <div className="productTabs">


                            <div className="productTabs__content tab-active" data-tab="tab_2">
                                <div className="productStylesGrid--center">
                                    {/* LB */}

                                    <div className="br_flex-1">
                                        <div className="br_@container">
                                            <div
                                                className="br_group/tile-grid br_grid br_grid-flow-dense br_gap-1 br_py-1 br_grid-cols-2 sm:br_grid-cols-[repeat(auto-fill,minmax(400px,1fr))] sm:br_px-1 lg:br_grid-cols-[repeat(auto-fill,minmax(400px,1fr))] supports-[container-type]:sm:br_grid-cols-2 supports-[container-type]:sm:@[640px]:br_grid-cols-[repeat(auto-fill,minmax(250px,1fr))] supports-[container-type]:lg:@[1024px]:br_grid-cols-[repeat(auto-fill,minmax(400px,1fr))]"
                                                data-test-id="range-grid-tiles"
                                            >


                                                <Link href="/search?type=Pets Tags">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706617956/yrlw8ktmwnwacx6s779l.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                                Pets Tags


                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </Link>





                                                <Link href="/search?type=Reviews Tags">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706617868/kp5auqulgwk5ncysn3yz.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                                Reviews Tags


                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </Link>







                                                <Link href="/search?type=Social Media Tags">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706617868/utkczqpjdsew2sldmzi1.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                                Social Media Tags


                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </Link>






















                                                <Link href="/search?type=Medical ID Tags">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706617868/dhylvxa6apvz8an9n3v8.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                                Medical ID Tags


                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </Link>











                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* close tab 2*/}


                    {/* start tab 3*/}
                    <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade show"} >
                        <div className="productTabs">


                            <div className="productTabs__content tab-active" data-tab="tab_2">
                                <div className="productStylesGrid--center">

                                    <div className="br_flex-1">
                                        <div className="br_@container">
                                            <div
                                                className="br_group/tile-grid br_grid br_grid-flow-dense br_gap-1 br_py-1 br_grid-cols-2 sm:br_grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:br_px-1 lg:br_grid-cols-[repeat(auto-fill,minmax(285px,1fr))] supports-[container-type]:sm:br_grid-cols-2 supports-[container-type]:sm:@[640px]:br_grid-cols-[repeat(auto-fill,minmax(250px,1fr))] supports-[container-type]:lg:@[1024px]:br_grid-cols-[repeat(auto-fill,minmax(400px,1fr))]"
                                                data-test-id="range-grid-tiles"
                                            >


                                                <Link href="/search?type=Review Stands">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706618069/vk4gzhgwsevm9zrpbxny.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                            Review Stands


                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </Link>










                                                <Link href="/search?type=Menu Stands">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706623399/gzonaqpkl2ly8qhh77pk.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                            Menu Stands


                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </Link>










                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* close tab 3*/}

                    {/* start tab 3*/}
                    <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade show"} >
                        <div className="productTabs">


                            <div className="productTabs__content tab-active" data-tab="tab_2">
                                <div className="productStylesGrid--center">
                                    {/* LB */}

                                    <div className="br_flex-1">
                                        <div className="br_@container">
                                            <div
                                                className="br_group/tile-grid br_grid br_grid-flow-dense br_gap-1 br_py-1 br_grid-cols-2 sm:br_grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:br_px-1 lg:br_grid-cols-[repeat(auto-fill,minmax(400px,1fr))] supports-[container-type]:sm:br_grid-cols-2 supports-[container-type]:sm:@[640px]:br_grid-cols-[repeat(auto-fill,minmax(250px,1fr))] supports-[container-type]:lg:@[1024px]:br_grid-cols-[repeat(auto-fill,minmax(400px,1fr))]"
                                                data-test-id="range-grid-tiles"
                                            >


                                                <Link href="/search?type=Business Cards Stickers">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1703231646/ndx87vphxoaizuh6bcvo.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                                Business Cards Stickers


                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </Link>




                                                <Link href="/search?type=Reviews Stickers">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706618751/pl9llivjqpsdkh7eamis.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                            Reviews Stickers


                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </Link>






                                                <Link href="/search?type=Social Media Stickers">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706618751/poc6nhmw7qqxh21apxpc.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                            Social Media Stickers


                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </Link>





 








                                                <Link href="/search?type=Medical ID Stickers">
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
                                                                                        loading="lazy"
                                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                                        src="https://res.cloudinary.com/duppvjinz/image/upload/v1706618750/enrzxifc1e5twto7qyfi.png"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">

                                                                            Medical ID Stickers 


                                                                            </h3>
                                                                        </div>

                                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                                            <p className="br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none">
                                                                                <span className="br_text-base-sans-bold-cta-uppercase ">
                                                                                    View More &gt;
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </Link>









                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* close tab 3*/}


                </div>
            </div>
        </div>




    );
}
export default Products;