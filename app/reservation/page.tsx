"use client"

import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

const page = () => {
    const router = useRouter(); 
    const [inputs, setInputs] = useState({});
    const [active, setActive] = useState(false)
    const searchParams = useSearchParams()
    const [value, setValue] = useState('');

    const type = searchParams.get('type')?.toLowerCase()

    const handleSubmit = (e: any) => {
        e.preventDefault(); 
        setActive(true)
        axios
            .post("/api/order", inputs)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setInputs({});
                setActive(false)
                router.push('/thank');
            });
    };

    const handleChange = (e: any) => { 
        if(e.target.name == "phone"){ 
            const numericValue = e.target.value.replace(/[^0-9]/g, ''); 
            setValue(numericValue);
        }

        const name = e.target.name;
        const value = e.target.value;
        setInputs((prevState) => ({ ...prevState, [name]: value, type: type + "" }));
    };
 





    return (
        <div className="container-body"> 

            <div className="container-xl clearfix">
                <div className="wizard-header p-0">
                    <h4 className="wizard-title">
                        Leave your contact details below and we will call you back!
                    </h4>
                </div>
                <div id="wizard-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="first_name">
                                    First Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder="First Name"
                                    className="form-control"
                                    name="firstname"
                                    defaultValue=""
                                    id="first_name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="last_name">
                                    Last Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Last Name"
                                    className="form-control"
                                    name="lastname"
                                    id="last_name"
                                    defaultValue=""
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="email">
                                    Email <span className="text-danger">*</span>
                                </label>
                                <input
                                    autoComplete="off"
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    defaultValue=""
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="phone_number">
                                    Mobile Number <span className="text-danger">*</span>
                                </label>
                                <input
                                    autoComplete="off"
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="form-control"
                                    name="phone"
                                    id="phone_number"
                                    defaultValue=""
                                    value={value} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <br />
                        <div className="row">
                            <div className="col-md-12 text-right">
                                <button
                                    id="submit"
                                    type="submit"
                                    className="btn btn-3 btn-blue ml-3"
                                    disabled={active}
                                    style={{background: "rgb(115, 27, 26)",color: "white"}}
                                >
                                    Submit
                                </button>
                            </div>
                        </div> 
                    </form>
                </div>
            </div>
            <div className="clearfix" />
            <br />
            <br />
        </div>

    )
}

export default page