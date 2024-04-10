"use client"
import { Test, CarCard } from 'components'
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { useRouter } from 'next/navigation';
import axios from "axios";
import { useSearchParams } from 'next/navigation'
import { fetchTemp4, fetchTemp1 } from '@/utils'
import Dropzone1 from '../../components/Dropzone1'
import Dropzone from '../../components/Dropzone'
import Dropzonee from '../../components/Dropzonee'
import { useCart } from '../context/CartContext';
import { useBooleanValue } from '../context/CartBoolContext';
import { useMyContext } from '../context/PDFContext';


const page = () => {
  const [translateXValue, setTranslateXValue] = useState(0);
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(true);
  const [allTemp1, setTemp1] = useState()
  const [allTemp2, setTemp2] = useState()
  const [value, setValue] = useState('');
  const [inputs, setInputs] = useState({});
  const [imgz, setImgs] = useState('');
  const [imgzz, setImgss] = useState('');
  let b
  let b2
  const searchParams = useSearchParams()
  const search = searchParams.get('id')
  const custom = searchParams.get('custom')
  let content, ttype, imgs, title, price, desc, cat
  const { cart, addToCart } = useCart();
  const { isBooleanValue, setBooleanValue } = useBooleanValue();
  const targetRef = useRef(null);
  const [errors, setErrors] = useState({});
  const isInCart = cart?.some((item) => item.id === search);
  const specificItem = cart?.find((cartItem) => String(cartItem.id) === String(search));
  const { myString, stringSaved, saveString, deleteString } = useMyContext();

  useEffect(() => {
    setInputs((prevState) => ({ ...prevState, imgz: imgz[0], imgzz: imgzz[0] }));
  }, [imgz , imgzz])


  function setCart() {
    addToCart(allTemp1, inputs, 1);
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    handleClickc()
  }




  if (stringSaved) {
    setInputs({ pdf: myString })
    deleteString()
    addToCart(allTemp1, inputs, 1);
    window.location.replace(`/product?id=${search}&custom=1`);
  }







  const a = async () => {
    b = await fetchTemp4(search)
    setTemp1(b)

  }
  useEffect(() => {
    a()
  }, [])

  if (allTemp1) {
    imgs = allTemp1.img
    ttype = allTemp1.type
    cat = allTemp1.category
    title = allTemp1.title
    price = allTemp1.price
    desc = allTemp1.description
  }



  const a2 = async () => {
    b2 = await fetchTemp1(cat)
    setTemp2(b2)
  }
  useEffect(() => {
    a2()
    if (custom == 1) {
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [cat])








  const sv = -8.3333333;

  const handleClick = (idx) => {
    setTranslateXValue(idx * sv);
  };


  const handleClick1 = () => {
    var d2 = document.getElementById("specID");
    setIsActive1(!isActive1)
    if (d2) {
      if (isActive1) {
        d2.className += " DynamicAccordion_Tab--open";
        d2.classList.remove("DynamicAccordion_Tab--closed");

      }
      else {
        d2.className += " DynamicAccordion_Tab--closed";
        d2.classList.remove("DynamicAccordion_Tab--open");
      }
    }
  };


  const handleClick2 = () => {
    var d2 = document.getElementById("shipID");
    setIsActive2(!isActive2)
    if (d2) {
      if (isActive2) {
        d2.className += " DynamicAccordion_Tab--open";
        d2.classList.remove("DynamicAccordion_Tab--closed");

      }
      else {
        d2.className += " DynamicAccordion_Tab--closed";
        d2.classList.remove("DynamicAccordion_Tab--open");
      }
    }
  };




  function handleClickc() {
    var cartb = document.getElementById("cartid");
    var cartb2 = document.getElementById("cartid2");
    setBooleanValue(!isBooleanValue);
    if (cartb && cartb2) {
      if (isBooleanValue) {
        cartb2.className += " MiniCart_Cart-visible";
      }
      else {
        cartb2.classList.remove("MiniCart_Cart-visible");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(allTemp1, inputs, 1);
  };

  const handleChange = (e) => {
    if (e.target.name == "contactnumber") {
      const numericValue = e.target.value.replace(/[^0-9]/g, '');
      setValue(numericValue);
    }

    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };



  const hasAdditionalInfo = (item) => {
    return item?.additionalInfo && Object.keys(item.additionalInfo).length > 0;
  };



  const handleImgChange = (url) => {
    if (url) {
      setImgs(url);
    }
  }




  const handleImgChangee = (url) => {
    if (url) {
      setImgss(url);
    }
  }



  useEffect(() => {
    const newErrors = {};
    cart?.forEach((item) => {
      if (!hasAdditionalInfo(item)) {
        newErrors[item.id] = 'Info is missing';
      }
    });
    setErrors(newErrors);
  }, [cart]);



  console.log(cart);



  if (ttype == 'Business Cards') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">
          <div className="form-group ">
            <div className="">
              <input
                className="form-control"
                name="fullname"
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="companyname"
                type="text"
                placeholder="Company Name"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="contactnumber"
                type="text"
                value={value}
                placeholder="Mobile"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group  pt-2">
            <div className="">
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
          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="website"
                type="text"
                placeholder="Website"
                onChange={handleChange}
                required
              />
            </div>
          </div>



          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>




          <div className="form-group  pt-2">
            <div className="">
              <p>Choose Back picture</p>
              <Dropzonee HandleImagesChange={handleImgChangee} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>


          
        </div>
        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  } else if (ttype == 'Reviews Cards') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">
          <div className="form-group ">
            <div className="">


              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name="plateform"
                  value="Google"
                  checked={inputs.plateform === "Google"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                  required
                />
                Google
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name="plateform"
                  value="TripAdvisor"
                  checked={inputs.plateform === "TripAdvisor"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                TripAdvisor
              </label>


              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name="plateform"
                  value="TrustPilot"
                  checked={inputs.plateform === "TrustPilot"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                TrustPilot
              </label>


            </div>
          </div>







          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="link"
                type="text"
                placeholder="Direct Business Review Link"
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <p>Choose Back picture</p>
              <Dropzonee HandleImagesChange={handleImgChangee} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>
        </div>

        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  } else if (ttype == 'Social Media Cards') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">
          <div className="form-group ">
            <div className="">
              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="Instagram"
                  checked={inputs.plateform === "Instagram"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                  required
                />
                Instagram
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="Facebook"
                  checked={inputs.plateform === "Facebook"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                Facebook
              </label>


              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="X"
                  checked={inputs.plateform === "X"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                X
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="TikTok"
                  checked={inputs.plateform === "TikTok"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                TikTok
              </label>



              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="LinkedIn"
                  checked={inputs.plateform === "LinkedIn"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                LinkedIn
              </label>
            </div>
          </div>

          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="link"
                type="text"
                placeholder="Social Media Link"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <p>Choose Back picture</p>
              <Dropzonee HandleImagesChange={handleImgChangee} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>
        </div>
        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  } else if (ttype == 'Medical ID Cards') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">

          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="patientname"
                type="text"
                placeholder="Full Name of patient"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="contactname"
                type="text"
                placeholder="Emergency Contact Name"
                onChange={handleChange}
                required
              />
            </div>
          </div>



          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="contactnumber"
                type="text"
                value={value}
                placeholder="Emergency Contact Number"
                onChange={handleChange}
                required
              />
            </div>
          </div>





          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="age"
                type="text"
                placeholder="Age"
                onChange={handleChange}
                required
              />
            </div>
          </div>



          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="condition"
                type="text"
                placeholder="Medical Condition"
                onChange={handleChange}
                required
              />
            </div>
          </div>



          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="allergies"
                type="text"
                placeholder="Allergies"
                onChange={handleChange}
                required
              />
            </div>
          </div>



          <div className="form-group  pt-2">
            <div className="">

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='gender'
                  value="Male"
                  checked={inputs.gender === "Male"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                  required
                />
                Male
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='gender'
                  value="Female"
                  checked={inputs.gender === "Female"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                Female
              </label>

            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <p>Choose Back picture</p>
              <Dropzonee HandleImagesChange={handleImgChangee} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>


        </div>
        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  } else if (ttype == 'Pets Tags') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">

          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="ownername"
                type="text"
                placeholder="Name of Owner"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="contactnumber"
                value={value}
                type="text"
                placeholder="Owner Contact Number"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Owner Email"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="owneraddress"
                type="text"
                placeholder="Owner Address"
                onChange={handleChange}
                required
              />
            </div>
          </div>




          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>





        </div>
        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  } else if (ttype == 'Reviews Tags') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">
          <div className="form-group ">
            <div className="">


              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="Google"
                  checked={inputs.plateform === "Google"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                  required
                />
                Google
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="TripAdvisor"
                  checked={inputs.plateform === "TripAdvisor"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                TripAdvisor
              </label>


              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="TrustPilot"
                  checked={inputs.plateform === "TrustPilot"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                TrustPilot
              </label>


            </div>
          </div>







          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="link"
                type="text"
                placeholder="Direct Business Review Link"
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>
        </div>

        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  } else if (ttype == 'Social Media Tags') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">
          <div className="form-group ">
            <div className="">
              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="Instagram"
                  checked={inputs.plateform === "Instagram"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                  required
                />
                Instagram
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="Facebook"
                  checked={inputs.plateform === "Facebook"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                Facebook
              </label>


              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="X"
                  checked={inputs.plateform === "X"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                X
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="TikTok"
                  checked={inputs.plateform === "TikTok"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                TikTok
              </label>



              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="LinkedIn"
                  checked={inputs.plateform === "LinkedIn"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                LinkedIn
              </label>
            </div>
          </div>

          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="link"
                type="text"
                placeholder="Social Media Link"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>


        </div>
        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  } else if (ttype == 'Medical ID Tags') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">

          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="patientname"
                type="text"
                placeholder="Full Name of patient"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="age"
                type="text"
                placeholder="Age"
                onChange={handleChange}
                required
              />
            </div>
          </div>



          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="condition"
                type="text"
                placeholder="Medical Condition"
                onChange={handleChange}
                required
              />
            </div>
          </div>



          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="allergies"
                type="text"
                placeholder="Allergies"
                onChange={handleChange}
                required
              />
            </div>
          </div>



          <div className="form-group  pt-2">
            <div className="">

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='gender'
                  value="Male"
                  checked={inputs.gender === "Male"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                  required
                />
                Male
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='gender'
                  value="Female"
                  checked={inputs.gender === "Female"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                Female
              </label>

            </div>
          </div>






          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="contactname"
                type="text"
                placeholder="Emergency Contact Name"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="contactnumber"
                type="text"
                value={value}
                placeholder="Emergency Contact Number"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>

        </div>
        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  } else if (ttype == 'Review Stands') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">
          <div className="form-group ">
            <div className="">


              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="Google"
                  checked={inputs.plateform === "Google"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                  required
                />
                Google
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="TripAdvisor"
                  checked={inputs.plateform === "TripAdvisor"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                TripAdvisor
              </label>


              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="TrustPilot"
                  checked={inputs.plateform === "TrustPilot"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                TrustPilot
              </label>


            </div>
          </div>







          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="link"
                type="text"
                placeholder="Direct Business Review Link"
                onChange={handleChange}
                required
              />
            </div>

          </div>


          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>
        </div>

        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  } else if (ttype == 'Menu Stands') {
    content = <Dropzone1 className='mt-10 border border-neutral-200 p-16' />;
  } else if (ttype == 'Business Cards Stickers') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">

          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="ownername"
                type="text"
                placeholder="Name of Owner"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                value={value}
                name="contactnumber"
                type="text"
                placeholder="Owner Contact Number"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Owner Email"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="owneraddress"
                type="text"
                placeholder="Owner Address"
                onChange={handleChange}
                required
              />
            </div>
          </div>



          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>





        </div>
        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  } else if (ttype == 'Reviews Stickers') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">
          <div className="form-group ">
            <div className="">


              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="Google"
                  checked={inputs.plateform === "Google"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                  required
                />
                Google
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name="plateform"
                  value="TripAdvisor"
                  checked={inputs.plateform === "TripAdvisor"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                TripAdvisor
              </label>


              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name="plateform"
                  value="TrustPilot"
                  checked={inputs.plateform === "TrustPilot"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                TrustPilot
              </label>


            </div>
          </div>







          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="link"
                type="text"
                placeholder="Direct Business Review Link"
                onChange={handleChange}
                required
              />
            </div>

          </div>


          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>
        </div>

        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  } else if (ttype == 'Social Media Stickers') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">
          <div className="form-group ">
            <div className="">
              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="Instagram"
                  checked={inputs.plateform === "Instagram"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                  required
                />
                Instagram
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="Facebook"
                  checked={inputs.plateform === "Facebook"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                Facebook
              </label>


              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="X"
                  checked={inputs.plateform === "X"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                X
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="TikTok"
                  checked={inputs.plateform === "TikTok"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                TikTok
              </label>



              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='plateform'
                  value="LinkedIn"
                  checked={inputs.plateform === "LinkedIn"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                LinkedIn
              </label>
            </div>
          </div>

          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="link"
                type="text"
                placeholder="Social Media Link"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>


        </div>
        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  } else if (ttype == 'Medical ID Stickers') {
    content = <form onSubmit={handleSubmit}>

      <div className="">
        <div className=""></div>
        <div className="">

          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="patientname"
                type="text"
                placeholder="Full Name of patient"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="age"
                type="text"
                placeholder="Age"
                onChange={handleChange}
                required
              />
            </div>
          </div>



          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="condition"
                type="text"
                placeholder="Medical Condition"
                onChange={handleChange}
                required
              />
            </div>
          </div>



          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="allergies"
                type="text"
                placeholder="Allergies"
                onChange={handleChange}
                required
              />
            </div>
          </div>



          <div className="form-group  pt-2">
            <div className="">

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='gender'
                  value="Male"
                  checked={inputs.gender === "Male"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                  required
                />
                Male
              </label>

              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name='gender'
                  value="Female"
                  checked={inputs.gender === "Female"}
                  onChange={handleChange}
                  style={{ marginRight: "1em" }}
                />
                Female
              </label>

            </div>
          </div>






          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="contactname"
                type="text"
                placeholder="Emergency Contact Name"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <input
                className="form-control"
                name="contactnumber"
                type="text"
                value={value}
                placeholder="Emergency Contact Number"
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="form-group  pt-2">
            <div className="">
              <p>Choose front picture</p>
              <Dropzone HandleImagesChange={handleImgChange} className='mt-10 border border-neutral-200 p-16  ' />

            </div>
          </div>

        </div>
        <div className=""></div>

      </div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span className="ProvidersSingleProduct--selected">
            <button type="submit" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} >
              <span>ADD TO CART</span>
            </button>
          </span>
        </div>
        <div className=""></div>
      </div>
      <br />
    </form>;
  }







  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\n.uploadcare--widget__button, .uploadcare--widget__button:hover {\n\tpadding: 10px;\n\tbackground-color: #d7d7d7; \n  color: #212529;\n  width:100%;\n}\n\n.uploadcare--widget__button:hover {\n\tbackground-color: #c1c1c1;\n  \n}\n\n\n"
        }}
      />




      <div className="ProductDetailWrapper">
        <div className="BreadcrumbsWrapper">
          <div className="br_flex br_px-6 xl:br_px-0 br_text-xs-sans-bold-stretched br_text-[12px] br_text-grey-400 br_h-12 br_items-center">

          </div>
        </div>
        <bellroy-product-detail
          data-filter-dimensions-style="WSSB,WSSB-CHA-213,WSSD-MIB-124,WSSB-BSH-102"
          data-default-sku="WSSB-BLACK"
          style={{}}
          data-updated-url="null"
        >
          <div className="ProductDetail">
            <div className="Layout br_contents">
              <unsafe-html style={{ display: "none" }} />
              <events-enabled data-events="custom.product.view" />
              <div className="Layout_TwoColumns br_edition-">
                <section style={{ position: "relative" }}>
                  <span className="ProvidersIfSelectedProductMatchesFilter">
                    <div className="HtmlProductGallery">
                      <div className="HtmlProductGallery_GalleryWrapper">
                        <div
                          className="HtmlProductInfiniteGallery"
                          id="InfiniteGallery0"
                          style={{ width: "auto", height: "100%" }}
                        >
                          <style
                            type="text/css"
                            dangerouslySetInnerHTML={{
                              __html:
                                "#InfiniteGallery0 .HtmlProductInfiniteGallery { }#InfiniteGallery0 .HtmlProductInfiniteGallery__Wrapper { position:relative;overflow:hidden;width:100%;height:100%}#InfiniteGallery0 .HtmlProductInfiniteGallery__Slides { position:absolute;top:0;width:1200%;height:100%;display:grid;grid-template-columns:repeat(12, 1fr);transition:transform 300ms ease;cursor:grab}#InfiniteGallery0 .HtmlProductInfiniteGallery__Slides--dragging { transition:none}#InfiniteGallery0 .HtmlProductInfiniteGallery__Slides_Slide { max-width:100%;max-height:100%;overflow:hidden;position:relative;user-drag:none;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}"
                            }}
                          />
                          <div className="HtmlProductInfiniteGallery__Wrapper">
                            <div
                              className="HtmlProductInfiniteGallery__Slides "
                              style={{ transform: `translateX(${translateXValue}%)` }}
                            >

                              {imgs && imgs?.length > 0 ? (

                                imgs.map((item) => (
                                  <div>
                                    <div className="HtmlProductInfiniteGallery__Slides_Slide">
                                      <div className="Slide Slide--image">
                                        <img
                                          src={item}
                                          style={{ maxWidth: "100%", height: "auto" }}
                                        />
                                      </div>
                                    </div>

                                  </div>



                                ))
                              ) : (

                                <div className='container'>
                                  <h2 className='text-black text-xl dont-bold'>...</h2>

                                </div>

                              )

                              }



                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="HtmlProductGallery_Thumbnails">

                        {imgs && imgs?.length > 0 ? (
                          imgs.map((item, idx) => (
                            <button onClick={() => handleClick(idx)} className="Thumbnail Thumbnail--image">
                              <img
                                src={item}
                              />
                            </button>
                          ))
                        ) : (

                          <div className='container'>
                            <h2 className='text-black text-xl dont-bold'>...</h2>

                          </div>

                        )

                        }
                      </div>
                    </div>
                  </span>
                </section>
                <section className="ProductSelector">
                  <span className="ProvidersSingleProduct--selected">
                    <h1>
                      {title}
                      <span
                        className="ProductSelector_EditionLabel"
                        style={{ margin: "0 0 0 3px" }}
                      />
                    </h1>
                  </span>
                  <div className="ApexPriceAndFreeShippingWrapper">
                    <span className="ProvidersSingleProduct--selected">
                      <div className="br_flex">
                        <span className="price">
                          <span className="price_value">${price}</span>
                        </span>
                      </div>
                    </span>
                    <div>
                      <div className="FreeShippingMessage FreeShippingMessage--empty" />
                    </div>
                  </div>
                  <hr />
                  <div className="ProductSelector_IntroBlurb">
                    <span className="ProvidersIfSelectedProductMatchesFilter">
                      <p>
                        {desc}
                      </p><br/>
                    </span>
                  </div>

                  <div className="bagsFeaturesGrid__gridWrapper">



                    {isInCart ? (
                      specificItem && (!specificItem.additionalInfo || Object.keys(specificItem.additionalInfo).length === 0) ? (
                        content
                      ) : (
                        <p style={{ color: "#4acb4a", textAlign: "center", fontSize: "2em", fontWeight: "bolder" }}>Done!</p>
                      )

                    ) : (
                      content
                    )}

                  </div>


                  {/* <div>
                    <div className="ShipsInDays">
                      <span className="ShipsInDays_Message">
                        <unsafe-html>
                          Ships within <strong>2 business days</strong>.
                        </unsafe-html>
                      </span>
                    </div>
                  </div> */}

                  <span className="ProvidersIfSelectedProductMatchesFilter">

                  </span>
                  <div
                    className="DynamicAccordion"
                    data-behaviour="tabs"
                    id="dynamic_tabs_misc"
                  >
                    <div id='specID' className="DynamicAccordion_Tab DynamicAccordion_Tab--closed">
                      <label className="DynamicAccordion_Tab_Header">
                        <input onClick={handleClick1}
                          className="DynamicAccordion_Tab_Header_ToggleCheckbox"
                          type="checkbox"
                        />
                        SPECIFICATIONS
                      </label>
                      <div className="DynamicAccordion_Tab_Details">
                        <div className="Specifications_Content">
                          <div className="Specifications_Content_">
                            <div>
                              <span>Dimensions: 95 x 80mm</span>
                            </div>
                          </div>
                          <div className="Specifications_Content_">
                            <div>
                              <span className="ProvidersIfSelectedProductMatchesFilter">
                                <p>
                                  Materials: The leathers we use are premium hides tanned under
                                  gold-rated Leather Working Group environmental
                                  protocols, then dyed through so they age gracefully.
                                  The woven fabrics we use are sustainably produced
                                  and chosen for their durability and lightweight
                                  performance.
                                </p>

                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id='shipID' className="DynamicAccordion_Tab DynamicAccordion_Tab--closed">
                      <label className="DynamicAccordion_Tab_Header">
                        <input onClick={handleClick2}
                          className="DynamicAccordion_Tab_Header_ToggleCheckbox"
                          type="checkbox"
                        />
                        Shipping and Returns
                      </label>
                      <div className="DynamicAccordion_Tab_Details">
                        <p>
                          We offer regular or express shipping to most addresses
                          worldwide. Shipping cost and delivery times are calculated
                          at checkout. Note: P.O. box deliveries will automatically be
                          sent by regular shipping.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <span className="ProvidersIfSelectedProductMatchesFilter">
                <content-block slug="product-page-wssb">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".bagsFeaturesGrid{margin:0 auto;padding:30px 5%;background:#111622}.bagsFeaturesGrid__gridWrapper{max-width:1150px;margin:0 auto}.bagsFeaturesGrid__title{-webkit-font-smoothing:antialiased;text-align:center;padding:0 0 25px;margin:0 auto;color:#fff}.bagsFeaturesGrid__feature{background:inherit;display:grid;grid-template-s:auto;align-items:center;padding:5px 0}.bagsFeaturesGrid__feature--text{-webkit-font-smoothing:antialiased;text-align:center;padding:15px 0 20px;grid-:2}.bagsFeaturesGrid__feature--text a{color:inherit}.bagsFeaturesGrid__feature--text h3{color:#fff;padding-bottom:10px}.bagsFeaturesGrid__feature--text p{color:#eee}.bagsFeaturesGrid__feature--image{position:relative;width:100%;min-height:62vw}@media (min-width: 811px){.bagsFeaturesGrid__feature--image{min-height:28vw}}@media (min-width: 1460px){.bagsFeaturesGrid__feature--image{min-height:409px}}.bagsFeaturesGrid__feature--image img{width:100%;display:block}.bagsFeaturesGrid__feature--image--logo{position:absolute;bottom:3.5%;right:8%;width:15vw}.bagsFeaturesGrid__feature--image--logo img{width:100%}.bagsFeaturesGrid__feature--text--logo{width:100px;padding-top:30px}.bagsFeaturesGrid__feature--text--logo img{width:100%}@media (min-width: 811px){.bagsFeaturesGrid{padding:75px 10%}.bagsFeaturesGrid__title{padding:0 0 60px}.bagsFeaturesGrid__feature{display:grid;grid-template-columns:1fr 1fr;grid-template-s:auto;padding:30px 0}.bagsFeaturesGrid__feature--image--logo{width:7vw}.bagsFeaturesGrid__feature .left{padding-right:15%}.bagsFeaturesGrid__feature .right{padding-left:15%}.bagsFeaturesGrid__feature--text{-webkit-font-smoothing:antialiased;text-align:left;padding:0;grid-:auto}}\n"
                    }}
                  />
                  {/* <div ref={targetRef} id='Customization' className="bagsFeaturesGrid">
                    <div className="bagsFeaturesGrid__gridWrapper">
                      <h2 className="bagsFeaturesGrid__title br_text-3xl-serif">
                        Customization
                      </h2>


                      {isInCart ? (
                        specificItem && (!specificItem.additionalInfo || Object.keys(specificItem.additionalInfo).length === 0) ? (
                          content
                        ) : (
                          <p style={{ color: "#4acb4a", textAlign: "center", fontSize: "2em", fontWeight: "bolder" }}>Done!</p>
                        )

                      ) : (
                        content
                      )}

                    </div>
                  </div> */}

                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title{height:auto;text-align:center;padding-bottom:10px}.ProductTile-SliderContainer--YMAL.ProductTile-SliderContainer{padding:40px 0 10px;background-color:#e9e9e9 ;display:flex;flex-direction:column;align-items:center}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev-ar,.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next-ar{height:25px;width:25px;border-top:2px solid #999;border-right:2px solid #999}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next-ar{transform:rotate(45deg);margin:0 15px 0 0}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev-ar{transform:rotate(225deg);margin:0 0 0 15px}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev,.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next{height:430px;width:80px;cursor:pointer;background-color:transparent;transition:opacity .3s ease;display:none;border:none;padding:0;appearance:none;-webkit-appearance:none}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev[disabled],.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next[disabled]{opacity:0;pointer-events:none}@media (min-width: 700px){.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev,.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next{display:flex;align-items:center;justify-content:center}}@media (min-width: 811px){.ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title{padding-bottom:30px}}.ProductTile-SliderContainer--YMAL .productRangeSlider{display:flex;align-items:center;max-width:1340px;width:100%;padding:5px;justify-content:space-between;margin:0 auto;min-height:145px}\n"
                    }}
                  />
                  <div
                    className="ProductTile-SliderContainer ProductTile-SliderContainer--YMAL"
                    data-product-list-category="ymal-slider"
                  >
                    <div className="ProductTile-SliderContainer-Title br_text-3xl-serif br_text-[#333]">
                      You might also like:
                    </div>












                    {allTemp2 && allTemp2?.length > 0 ? (
                      <section style={{ maxWidth: "100%" }}>

                        <Swiper
                          spaceBetween={50}
                          loop
                          modules={[Autoplay]}
                          autoplay={{
                            delay: 2000,
                            stopOnLastSlide: false,
                            reverseDirection: true
                          }}

                          breakpoints={{
                            150: {
                              slidesPerView: 1,
                            },
                            768: {
                              slidesPerView: 4,
                            },
                          }}
                        >
                          <div className='home__cars-wrapper'>
                            {allTemp2.map((temp) => (

                              <SwiperSlide key={temp.id}><CarCard temp={temp} /></SwiperSlide>

                            ))}
                          </div>
                        </Swiper>


                      </section>
                    ) : (
                      <div className='home___error-container'>
                        <h2 className='text-black text-xl dont-bold'>...</h2>

                      </div>
                    )

                    }




















                  </div>
                </content-block>
              </span>
            </div>
          </div>
        </bellroy-product-detail>
      </div>




    </>

  )
}

export default page