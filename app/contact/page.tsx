"use client"

import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'


export default function Home() {

  
 
      const router = useRouter(); 
      const [inputs, setInputs] = useState({});
      const [active, setActive] = useState(false) 
      const [value, setValue] = useState(''); 
  
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
          setInputs((prevState) => ({ ...prevState, [name]: value}));
      };
   
  


  return (
    <>


      <div className="custom-header-1">
        <div className="container-xl">
          <br />
          <h4 className="text-center text-white pt-3">GET IN TOUCH</h4>

        </div>
      </div>
      <div className="container-xl bg-white custom-page-1 mt-5">
        <div>
          <div className="pl-5 pt-4 pr-5">
            <p className="font-sinkinsans-700bold color-blue get-in-touch-title">
              Send us a message
            </p>
            <form onSubmit={handleSubmit}>
 
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        required
                      />
                    </div> 
                  </div>

                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        value={value} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <textarea
                        className="form-control form-control-text-area"
                        name="message"
                        placeholder="Message"
                        rows={9}
                        required
                        onChange={handleChange}
                        defaultValue={""}
                      />
                    </div>
                  </div>
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
        <div className="background-gray color-primary">
          <div className="pl-5 pr-5" style={{ paddingTop: "0.1px" }}>
            <div className="row contact-details">
              <div className="col-lg-6">
                 
                <div className="clearfix">
                  <img
                    src="https://www.securiteassurance.com/images/icon-location.svg"
                    alt="sa location"
                    className="float-left mr-3"
                  />
                  <div className="float-left">
                    Lebanon, Beirut <br />
                    Sin El Fil, Fouad Chehab Avenue, <br />
                    Gedco 3 Center, Block B <br />
                    P.O.Box: 16 6499
                  </div>
                </div>
              </div>
              <div className="col-lg-1"> 
              </div>
              <div className="col-lg-5">
                <div className="clearfix mb-sm-3">
                  <div className="icon">
                    <img
                      src="https://www.securiteassurance.com/images/icon-mobile.svg"
                      alt="sa mobile"
                      className="float-left mr-3"
                    />
                  </div>
                  <div className="float-left">+961 9 231 511</div>
                </div>
                <div className="clearfix mb-sm-3">
                  <div className="icon">
                    <img
                      src="https://www.securiteassurance.com/images/icon-telephone.svg"
                      alt="sa telephone"
                      className="float-left mr-3"
                    />
                  </div>
                  <div className="float-left">+961 9 232 735</div>
                </div>
                <div className="clearfix mb-sm-3">
                  <div className="icon">
                    <img
                      src="https://www.securiteassurance.com/images/icon-envelope.svg"
                      alt="sa mobile"
                      className="float-left mr-3"
                    />
                  </div>
                  <div className="float-left">email@email.com</div>
                </div>
              </div>
            </div>




            <div className="d-none">
              <p>
                Lebanon, Beirut
                <br />
                Sin El Fil, Fouad Chehab Avenue,
                <br />
                Gedco 3 Center, Blocks A&amp;B
                <br />
                P.O.Box: 15 5499
              </p>
              <p>
              +961 9 231 511
                <br />
                +961 9 232 735
              </p>
              <p>email@email.com</p>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div className="clearfix" />
      
    </>

  )
}
