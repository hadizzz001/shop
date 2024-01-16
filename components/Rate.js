"use client"
 
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component"; 

export default function Rate() {  
    const [inputs, setInputs] = useState({});
    const [active, setActive] = useState(false)
    const [values, setValues] = useState(0);

 

    useEffect(() => {
        setInputs((prevState) => ({ ...prevState, stars: values + "" }));
    }, [values]);

    const handleSubmit = (e) => {
        if (typeof window !== "undefined") {
            e.preventDefault();
            setActive(true)
            axios
                .post("/api/rate", inputs)
                .then((res) => { 

                    window.location.replace("/");
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setInputs({});
                    setActive(false)
                    // router.refresh()
                });
        }
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((prevState) => ({ ...prevState, [name]: value }));
    };


    const ratingChanged = (newRating) => {
        setValues(newRating)
    }






    return (
        <>

            <div className="custom-header-1">
                <div className="container-xl">
                    <br />
                    <h4 className="text-center text-white pt-3">Leave Review</h4>
                </div>
            </div>
            <div className="container-xl bg-white custom-page-1 mt-5">
                <div>
                    <div className="pl-5 pt-4 pr-5">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <input
                                                className="form-control"
                                                name="name"
                                                type="text"
                                                placeholder="Name"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <textarea
                                                className="form-control form-control-text-area"
                                                name="description"
                                                placeholder="Message"
                                                rows={9}
                                                required
                                                onChange={handleChange}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        color2={'#ffd700'}
                                        isHalf={false}
                                        onChange={ratingChanged} />
                                </div>

                            </div>
                            <div className="form-group row pt-2">
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-2 pr-5 pl-5 float-right">
                                        Send
                                    </button>
                                </div>
                            </div>
                            <br />
                        </form>
                    </div>
                </div>

            </div>
            <div className="clearfix" />

        </>

    )
}
