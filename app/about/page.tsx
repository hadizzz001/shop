"use client"
import { Hero2 } from '@/components'
import { useDrawerContext } from 'app/context/store';
import useLocalStorage from '@/hooks/useLocalStorage'
import { useState, useEffect } from 'react';

export default function Home() {
    // const { open, setOpen } = useDrawerContext()
    // const [value, setValue] = useLocalStorage("lang", "")
    // const [lang, setLang] = useState(value)

    return (
        <>

             
            <div className="custom-header-1">
                <div className="container-xl">
                    <br />
                    <h4 className="text-center text-white pt-3 mb-4 font-sinkinsans-700bold">
                        ABOUT US
                    </h4>
                    <br />
                    <br />
                </div>
            </div>
            <div className="container-xl bg-white custom-page-1 mb-5">
                <br />
                <div className="company-profile">
                    <h4 className="text-center font-sinkinsans-700bold color-blue mt-1 mb-4 font-size-19px">
                        OUR COMPANY PROFILE
                    </h4>
                    <p className="w-md-60 color-secondary font-sinkinsans-700bold line-height: 24px; mx-auto text-center font-size-14px"></p>
                    <p style={{ textAlign: "center", paddingLeft: 40 }}>
                        <strong>
                            <span style={{ fontSize: "12pt" }}>
                            Triple Win Solutions Sarl is located in Jeita, Lebanon. Triple Win Solutions Sarl is listed in the Insurance Companies Buiness Directory in Lebanon.
                            </span>
                        </strong>
                    </p>
                    <p />
                    <br />
                    <div className="row mt-2 company-profile-items">
                        <div className="col-md-2 col-6 text-center mb-4">
                            <img
                                src="https://crm.securiteapps.com/storage/AppSectionItem/image1566561309.png"
                                alt=""
                                style={{ width: 80, display: "inline" }}
                            />
                            <div className="text-muted font-size-13px mt-1">Capital</div>
                            <div className="color-gray font-size-13px">
                                <span className="font-sinkinsans-700bold">15 Mn USD</span>
                            </div>
                        </div>
                        <div className="col-md-2 col-6 text-center mb-4">
                            <img
                                src="https://crm.securiteapps.com/storage/AppSectionItem/image1566561551.png"
                                alt=""
                                style={{ width: 80, display: "inline" }}
                            />
                            <div className="text-muted font-size-13px mt-1">Assets</div>
                            <div className="color-gray font-size-13px">
                                <span className="font-sinkinsans-700bold">~50 Mn USD</span>
                            </div>
                        </div>
                        <div className="col-md-2 col-6 text-center mb-4">
                            <img
                                src="https://crm.securiteapps.com/storage/AppSectionItem/image1566561352.png"
                                alt=""
                                style={{ width: 80, display: "inline" }}
                            />
                            <div className="text-muted font-size-13px mt-1">Policies / year</div>
                            <div className="color-gray font-size-13px">
                                <span className="font-sinkinsans-700bold">
                                    <p>400 000</p>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-2 col-6 text-center mb-4">
                            <img
                                src="https://crm.securiteapps.com/storage/AppSectionItem/image1566561364.png"
                                alt=""
                                style={{ width: 80, display: "inline" }}
                            />
                            <div className="text-muted font-size-13px mt-1">Branches</div>
                            <div className="color-gray font-size-13px">
                                <span className="font-sinkinsans-700bold">10+</span>
                            </div>
                        </div>
                        <div className="col-md-2 col-6 text-center mb-4">
                            <img
                                src="https://crm.securiteapps.com/storage/AppSectionItem/image1566561380.png"
                                alt=""
                                style={{ width: 80 , display: "inline"}}
                            />
                            <div className="text-muted font-size-13px mt-1">
                                Brokers &amp; Agents
                            </div>
                            <div className="color-gray font-size-13px">
                                <span className="font-sinkinsans-700bold">2,000 +</span>
                            </div>
                        </div>
                        <div className="col-md-2 col-6 text-center mb-4">
                            <img
                                src="https://crm.securiteapps.com/storage/AppSectionItem/image1566561394.png"
                                alt=""
                                style={{ width: 80 , display: "inline"}}
                            />
                            <div className="text-muted font-size-13px mt-1">Our team</div>
                            <div className="color-gray font-size-13px">
                                <span className="font-sinkinsans-700bold">
                                    <p>350+</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
 
 
                 
 
                 
                <br />
                <div className="our-values mt-4" id="our-values-scrl">
                    <h4 className="text-center color-blue mb-4 font-sinkinsans-700bold font-size-19px">
                        OUR VALUES
                    </h4>
                    <div
                        className="row pl-5 pr-5 text-center"
                        style={{ display: "flex", flexWrap: "wrap" }}
                    >
                        <div
                            className="col-lg-4 mb-2 pl-0 pr-0 pb-3 pl-sm-4 pr-sm-4"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="background-gray h-100">
                                <div className="header background-light-blue list-inline p-1">
 
                                    <h5 className="list-inline-item text-white m-0">
                                        BE SERVICE FANATIC
                                    </h5>
                                </div>
                                <div className="body p-3">
                                    <p className="m-0 font-size-13px">
                                        Service is at the heart of our purpose. It&amp;rsquo;s the tool
                                        we have to improve the lives of people and put a smile on their
                                        faces. So be as service fanatic as possible, and use every
                                        opportunity you have to WOW clients and create a magnificient
                                        journey for them.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 mb-2 pl-0 pr-0 pb-3 pl-sm-4 pr-sm-4"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="background-gray h-100">
                                <div className="header background-light-blue list-inline p-1">
 
                                    <h5 className="list-inline-item text-white m-0">BE OPTIMISTIC</h5>
                                </div>
                                <div className="body p-3">
                                    <p className="m-0 font-size-13px">
                                        Triple Win Insurance is a place where big dreams are brought to
                                        life. So be optimistic about the future and believe, as
                                        optimists do, that doing good brings good and that our big
                                        dreams are possible because it will somehow make them so, and
                                        most times it does.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 mb-2 pl-0 pr-0 pb-3 pl-sm-4 pr-sm-4"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="background-gray h-100">
                                <div className="header background-light-blue list-inline p-1">
 
                                    <h5 className="list-inline-item text-white m-0">
                                        DELIVER RESULTS
                                    </h5>
                                </div>
                                <div className="body p-3">
                                    <p className="m-0 font-size-13px">
                                        Interdependent collaboration also needs individual independence,
                                        by which we mean: take responsibility for your bit, own it, and
                                        follow through on it. The point is that individual ownership
                                        supports collective responsibility. So commit &amp;amp; deliver.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row pl-5 pr-5 text-center"
                        style={{ display: "flex", flexWrap: "wrap" }}
                    >
                        <div
                            className="col-lg-4 mb-2 pl-0 pr-0 pb-3 pl-sm-4 pr-sm-4"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="background-gray h-100">
                                <div className="header background-light-blue list-inline p-1">
 
                                    <h5 className="list-inline-item text-white m-0">COLLABORATE</h5>
                                </div>
                                <div className="body p-3">
                                    <p className="m-0 font-size-13px">
                                        The goal is to always improve the culture, to have everyone work
                                        hard to make everyone else successful, to have people support
                                        and enable one another, and the best way to do so is to think in
                                        terms of “We” not “I”. We rise by lifting others.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 mb-2 pl-0 pr-0 pb-3 pl-sm-4 pr-sm-4"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="background-gray h-100">
                                <div className="header background-light-blue list-inline p-1">
 
                                    <h5 className="list-inline-item text-white m-0">
                                        COMMUNICATE PROPERLY
                                    </h5>
                                </div>
                                <div className="body p-3">
                                    <p className="m-0 font-size-13px">
                                        Change the language in a tribe and you have changed the tribe
                                        itself. Communication shapes cultures. That’s why we take extra
                                        care of what we say or write and make sure that it is in line
                                        with our values and the culture we want to shape and preserve.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 mb-2 pl-0 pr-0 pb-3 pl-sm-4 pr-sm-4"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="background-gray h-100">
                                <div className="header background-light-blue list-inline p-1">
 
                                    <h5 className="list-inline-item text-white m-0">
                                        LEARN AND EVOLVE
                                    </h5>
                                </div>
                                <div className="body p-3">
                                    <p className="m-0 font-size-13px">
                                        Let’s be honest, we all do mistakes and we all have room to
                                        improve and that’s perfectly fine. That’s why we’re reflective
                                        about why something didn’t work and always thrive to achieve a
                                        better version of ourselves.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                 
                <div className="management-team" id="mgmt-team-scrl">
                    <h4 className="text-center color-blue font-sinkinsans-700bold mt-3 font-size-19px">
                        MANAGEMENT TEAM
                    </h4>
                    <p className="w-md-60 color-secondary font-sinkinsans-semibold mx-auto text-center mb-0 font-size-14px">
                        Our team is our most important asset. They are leaders in their fields
                        and are passionate about bringing our vision to life
                    </p>
                    <br />
                    <div className="row pl-5 pr-5">
                        <div className="col-md-4 position-relative has-overlay-video">

                            <img
                                className="personal-img w-100 h-100"
                                src="https://crm.securiteapps.com/storage/AppSectionItem/image1587110212.png"
                                alt=""
                            />
                            <div className="title position-absolute">
                                Jeff Khawam
                                <br />
                                Chairman
                            </div>
                        </div>
                        <div className="col-md-4 position-relative ">
                            <img
                                className="personal-img w-100 h-100"
                                src="https://crm.securiteapps.com/storage/AppSectionItem/image1587110237.png"
                                alt=""
                            />
                            <div className="title position-absolute">
                                Anthony Khawam
                                <br />
                                CEO
                            </div>
                        </div>
 
 
 
 
 
 
 

                       
                        <div className="col-md-4 position-relative ">
                            <img
                                className="personal-img w-100 h-100"
                                src="https://crm.securiteapps.com/storage/AppSectionItem/image1634560378.jpg"
                                alt=""
                            />
                            <div className="title position-absolute">
                                Racha El Hout
                                <br />
                                Quality &amp; IA Manager
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </>

    )
}
