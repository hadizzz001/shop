'use client'
import { footerLinksAr, footerLinksEn } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useDrawerContext } from 'app/context/store'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useState, useEffect } from 'react'
import { sendEmail } from '@/app/api/sendEmail/sendEmail'

const Footer = () => {
    const [isFoot1, setIsFoot1] = useState(true);
    const [isFoot2, setIsFoot2] = useState(true);
    const [isFoot3, setIsFoot3] = useState(true);


    const handleFoot = () => { 
        var d2 = document.getElementById("footId1");
        setIsFoot1(!isFoot1);
        if (d2) {
            if (isFoot1) {
                d2.className += " open"; 
            }
            else{
                d2.classList.remove("open"); 
            }
        }
    };

    const handleFoot2 = () => { 
        var d2 = document.getElementById("footId2");
        setIsFoot2(!isFoot2);
        if (d2) {
            if (isFoot2) {
                d2.className += " open"; 
            }
            else{
                d2.classList.remove("open"); 
            }
        }
    };

    const handleFoot3 = () => { 
        var d2 = document.getElementById("footId3");
        setIsFoot3(!isFoot3);
        if (d2) {
            if (isFoot3) {
                d2.className += " open"; 
            }
            else{
                d2.classList.remove("open"); 
            }
        }
    };

    return (
        <footer
            data-roybell=""
            data-location="footer"
            id="SiteFooter"
            className="SiteFooter hide"
        >
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        '.NewsletterSignupModalWrapper{z-index:9999999999999;display:none;position:fixed;top:0;right:0;bottom:0;left:0}.NewsletterSignupModalWrapper_Backdrop{opacity:0;transition:opacity .3s ease;position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.4);z-index:1}.NewsletterSignupModal{opacity:0;transition:opacity .3s ease;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);max-width:346px;max-height:477px;min-height:477px;width:calc(100vw - 40px);height:calc(100vh - 40px);z-index:2;background-color:#f4f4f4}.NewsletterSignupModal img{object-fit:cover;width:100%;position:absolute;bottom:-1px}.NewsletterSignupModal_Close{position:absolute;z-index:2;top:15px;right:11px;width:20px;height:20px;background:none;border:none;cursor:pointer;outline:none}.NewsletterSignupModal_Close:before,.NewsletterSignupModal_Close:after{content:\'\';position:absolute;width:23px;height:1px;background:#231f20;top:50%;left:50%}.NewsletterSignupModal_Close:before{transform:translate(-50%, -50%) rotate(45deg)}.NewsletterSignupModal_Close:after{transform:translate(-50%, -50%) rotate(-45deg)}.NewsletterSignupModal_Inner{padding:58px 18px 0 18px}.NewsletterSignupModal_Inner .NewsletterSignup_InputWrapper_Front{border:1px solid #ccc}.NewsletterSignupModal_Inner_Disclaimer a,.NewsletterSignupModal_Inner_Disclaimer a:hover,.NewsletterSignupModal_Inner_Disclaimer a:visited,.NewsletterSignupModal_Inner_Disclaimer a:focus{text-decoration:underline;color:#ea6a2b}@media (min-width: 1000px){.NewsletterSignupModal{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);max-width:800px;max-height:376px;min-height:auto;width:800px;height:376px;z-index:2}.NewsletterSignupModal_Inner_Preheading,.NewsletterSignupModal_Inner_Heading,.NewsletterSignupModal_Inner_Disclaimer{text-align:left}.NewsletterSignupModal img{max-height:550px;width:unset;height:112%;position:absolute;bottom:0}.NewsletterSignupModal_Inner{padding:0 70px 0 0;position:absolute;left:376px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center}.NewsletterSignupModal_Inner_Disclaimer{text-align:left}}@media (min-width: 1280px){.NewsletterSignupModal{max-width:1040px;max-height:490px;width:1040px;height:490px}.NewsletterSignupModal_Inner{left:490px}.NewsletterSignupModal_Inner_Heading{line-height:3.5rem;font-size:2.75rem}}.NewsletterSignupModalWrapper.active{display:block}.NewsletterSignupModalWrapper.show .NewsletterSignupModalWrapper_Backdrop,.NewsletterSignupModalWrapper.show .NewsletterSignupModal{opacity:1}.pageHeaderMenuOverlay.pageHeaderMenuOverlays--newsletter.open{display:none !important}.NewsletterSignupModal_Component{position:relative;font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;max-width:100% !important}.NewsletterSignupModal_Component .klaviyo_helptext{font-family:"PT Serif", serif;padding-top:10px}.NewsletterSignupModal_Component .klaviyo_gdpr_text{font-family:"PT Serif", serif;font-size:14px;line-height:1.3}.NewsletterSignupModal_Component label{color:#222}.NewsletterSignupModal_Component .klaviyo_field_group{display:flex;transform-style:preserve-3d;backface-visibility:hidden;transition:transform .4s ease, background-color .4s ease;height:42px;border-radius:4px;margin:0;background-color:#fff;border:1px solid #FFF;padding:3px;box-shadow:0 15px 15px -10px rgba(0,0,0,0.3)}.NewsletterSignupModal_Component .klaviyo_field_group .klaviyo_form_actions{text-align:left}.NewsletterSignupModal_Component input[type=checkbox]+label{display:inline;font-weight:normal;padding-left:5px}.NewsletterSignupModal_Component input[type=text],.NewsletterSignupModal_Component input[type=email]{font-family:Lato, sans-serif;font-size:12px;font-weight:700;border-radius:0px;border:none;outline:none;transition:background .1s ease}.NewsletterSignupModal_Component input[type=email]::placeholder{color:#b0b0b0;letter-spacing:0.5px}.NewsletterSignupModal_Component input[type=email]:focus+.klaviyo_form_actions .klaviyo_submit_button,.NewsletterSignupModal_Component input[type=email]:valid+.klaviyo_form_actions .klaviyo_submit_button{background:#ea6a2b}.NewsletterSignupModal_Component .klaviyo_submit_button{font-family:"Lato", sans-serif;font-size:12px;font-weight:700;background:#d7d7d7;text-align:center;padding:0 5px;min-width:64px;outline:none;border:0;border-radius:4px;color:#fff;text-transform:uppercase;letter-spacing:1.5px;cursor:pointer}.NewsletterSignupModal_Component .klaviyo_messages{margin-top:5px;font-family:"Lato", sans-serif;font-size:12px;font-weight:normal}.NewsletterSignupModal_Component .klaviyo_messages .error_message{display:flex;font-family:"Lato", sans-serif;font-size:12px;font-weight:700;color:#c43e22;letter-spacing:.5px;text-align:left;margin-top:10px}.NewsletterSignupModal_Component .klaviyo_messages .error_message:before{display:inline-block;content:"\\2191";font-size:10px;padding:0 5px}.NewsletterSignupModal_Component .klaviyo_messages .success_message{color:#ea6a2b;background-color:#fff;padding:9px;border-radius:3px;font-family:"Lato", sans-serif;font-size:12px;font-weight:700;text-align:center;box-shadow:0 15px 15px -10px rgba(0,0,0,0.3)}.NewsletterSignupModalWrapper.NewsletterSignupIPhoneSE .NewsletterSignupModal{background-image:url("https://bellroy-cms-images.imgix.net/4429/newsletter-sign-up-image-mobile.jpg?auto=format&fit=max")}@media (min-width: 1000px){.NewsletterSignupModalWrapper.NewsletterSignupIPhoneSE .NewsletterSignupModal{background-image:url("https://bellroy-cms-images.imgix.net/4430/iphone-sign-up-image-desktop.jpg?auto=format&fit=max")}}\n'
                }}
            />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        ".NewsletterSignupFooter{display:block;background:#f4f4f4;padding:20px 15px}.NewsletterSignupFooter_Component{margin:20px auto;min-height:42px;max-width:454px}.NewsletterSignupFooter_Disclaimer{max-width:454px;margin:0 auto}.NewsletterSignupFooter_Disclaimer a,.NewsletterSignupFooter_Disclaimer a:hover,.NewsletterSignupFooter_Disclaimer a:visited,.NewsletterSignupFooter_Disclaimer a:active{color:#ea6a2b}@media (min-width: 1280px){.NewsletterSignupFooter_Heading{line-height:2.5rem;font-size:1.75rem}}\n"
                }}
            />
            <div className="NewsletterSignupFooter">
                <h2 className="NewsletterSignupFooter_Heading br_text-2xl-serif br_text-center ">
                    Get exclusive access to new products, deals &amp; surprise treats.
                </h2>
                <div className="NewsletterSignupFooter_Component">
                    <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                            __html:
                                '\n      .NewsletterSignupFooter_Component {\n        position: relative;\n        font-family: "Lato", sans-serif;\n        -webkit-font-smoothing: antialiased;\n     text-align: center;      }\n\n      .NewsletterSignupFooter_Component .klaviyo_helptext {\n        font-family: "PT Serif", serif;\n        padding-top: 10px;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_gdpr_text {\n        font-family: "PT Serif", serif;\n        font-size: 14px;\n        line-height: 1.3;\n      }\n\n      .NewsletterSignupFooter_Component label {\n        color:#222;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_field_group {\n        display: inline-flex;\n        transform-style: preserve-3d;\n        backface-visibility: hidden;\n        transition: transform .4s ease, background-color .4s ease;\n        height: 42px;\n        border-radius: 4px;\n        margin: 0;\n        background-color: #fff;\n        border: 1px solid #FFF;\n        padding: 3px;\n        box-shadow: 0 17px 9px -15px rgb(0 0 0 / 50%);\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_field_group .klaviyo_form_actions {\n        text-align:left;\n       }\n\n      .NewsletterSignupFooter_Component input[type=checkbox] + label {\n        display: inline;\n        font-weight:normal;\n        padding-left:5px;\n      }\n\n      .NewsletterSignupFooter_Component input[type=text], .NewsletterSignupFooter_Component input[type=email] {\n        font-family: Lato, sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        border-radius: 0px;\n        border: none;\n        outline: none;\n        transition: background .1s ease;\n width: 250px;      }\n\n      .NewsletterSignupFooter_Component input[type=email]::placeholder {\n        color: #b0b0b0;\n        letter-spacing: 0.5px;\n      }\n\n      .NewsletterSignupFooter_Component input[type=email]:focus + .klaviyo_form_actions .klaviyo_submit_button,\n      .NewsletterSignupFooter_Component input[type=email]:valid + .klaviyo_form_actions .klaviyo_submit_button {\n        background: #ea6a2b;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_submit_button {\n        font-family: "Lato", sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        background: #d7d7d7;\n        text-align: center;\n        padding: 0 5px;\n        min-width: 64px;\n        outline: none;\n        border: 0;\n        border-radius: 4px;\n        color: #fff;\n        text-transform: uppercase;\n        letter-spacing: 1.5px;\n        cursor: pointer;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_messages {\n        margin-top: 5px;\n        font-family: "Lato", sans-serif;\n        font-size: 12px;\n        font-weight: normal;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_messages .error_message {\n        display: flex;\n        font-family: "Lato", sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        color: #c43e22;\n        letter-spacing: .5px;\n        text-align: left;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_messages .error_message:before {\n        display: inline-block;\n        content: "\\2191";\n        font-size: 10px;\n        padding: 0 5px;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_messages .success_message {\n        color: #ea6a2b;\n        background-color: #fff;\n        padding: 9px;\n        border-radius: 3px;\n        font-family: "Lato", sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        text-align: center;\n      }\n    '
                        }}
                    />
                    <form action={async formData => { await sendEmail(formData); }}
                    >

                        <div className="klaviyo_field_group">
                            <input
                                className="email-input"
                                type="email"
                                name="email"
                                id="k_id_email"
                                placeholder="Enter your email to register"
                                required
                            />
                            <div className="klaviyo_form_actions">
                                <button type="submit" className="klaviyo_submit_button" style={{ padding: "0.5em" }}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <p className="NewsletterSignupFooter_Disclaimer br_text-xs-sans-spaced br_text-grey-400 br_text-center">
                    You are signing up to receive product updates and newsletters. By
                    signing up, you are consenting to our{" "}
                    <a
                        href="/customer-care/privacy-policy"
                        data-auto-id="true"
                        id="page-footer-customer-care-privacy-policy-1"
                    >
                        privacy policy
                    </a>{" "}
                    but you can opt out at any time.
                </p>
            </div>
            <section className="SiteFooter__wrapper" id="footer">
                <nav className="SiteFooterSitemap">
                    <div
                        data-roybell=""
                        data-location="footerSocial"
                        className="SiteFooterSitemap__social column"
                    >
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    href="http://www.instagram.com/bellroy"
                                    data-auto-id="true"
                                    id="page-footer-http-www-instagram-com-bellroy-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 44 44"
                                        height="20px"
                                    >
                                        <title>Instagram</title>
                                        <path
                                            className="st0"
                                            d="M21.3,14.4c-3.8,0-6.9,3.1-6.9,6.9c0,3.8,3.1,6.9,6.9,6.9c3.8,0,6.9-3.1,6.9-6.9c0,0,0,0,0,0 C28.3,17.5,25.2,14.4,21.3,14.4C21.3,14.4,21.3,14.4,21.3,14.4z"
                                        />
                                        <path
                                            className="st0"
                                            d="M43.9,12.9c0-1.8-0.4-3.6-1-5.3c-0.6-1.5-1.4-2.8-2.5-3.9c-1.1-1.1-2.4-2-3.9-2.5c-1.7-0.6-3.5-1-5.3-1
              C28.7,0,28,0,22,0s-6.7,0-9.1,0.1c-1.8,0-3.6,0.4-5.3,1C6.1,1.7,4.8,2.6,3.7,3.7c-1.1,1.1-2,2.4-2.5,3.9c-0.6,1.7-1,3.5-1,5.3
              C0,15.3,0,16,0,22s0,6.7,0.1,9.1c0,1.8,0.4,3.6,1,5.3c0.6,1.5,1.4,2.8,2.5,3.9c1.1,1.1,2.4,2,3.9,2.5c1.7,0.6,3.5,1,5.3,1
              C15.3,44,16,44,22,44s6.7,0,9.1-0.1c1.8,0,3.6-0.4,5.3-1c1.5-0.6,2.8-1.4,3.9-2.5c1.1-1.1,2-2.4,2.5-3.9c0.6-1.7,1-3.5,1-5.3
              C44,28.7,44,28,44,22S44,15.3,43.9,12.9z M21.3,32c-5.9,0-10.7-4.8-10.7-10.7s4.8-10.7,10.7-10.7S32,15.4,32,21.3S27.2,32,21.3,32
              L21.3,32z M35.3,13.3c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3c1.8,0,3.3,1.5,3.3,3.3C38.7,11.8,37.2,13.3,35.3,13.3
              C35.3,13.3,35.3,13.3,35.3,13.3z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/bellroy.official"
                                    data-auto-id="true"
                                    id="page-footer-https-www-facebook-com-bellroy-official-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 44 44"
                                        height="20px"
                                        style={{ marginRight: "-10px" }}
                                    >
                                        <title>Facebook</title>
                                        <path
                                            className="st0"
                                            d="M14.3,44V23.9h6.5l1-7.8h-7.5v-5c0-2.3,0.6-3.8,3.7-3.8h4v-7C20.1,0.1,18.1,0,16.2,0c-5.8,0-9.7,3.7-9.7,10.3 v5.8H0v7.8h6.5V44H14.3z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.youtube.com/channel/UCy6VOdC_Wyzj4RLSlIXgP1Q"
                                    data-auto-id="true"
                                    id="page-footer-https-www-youtube-com-channel-ucy6vodc_wyzj4rlslixgp1q-1"
                                >
                                    <svg
                                        id="Layer_1"
                                        data-name="Layer 1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 176 124"
                                        height="19px"
                                    >
                                        <title>YouTube</title>
                                        <path
                                            d="M180.32,53.36A22.12,22.12,0,0,0,164.76,37.7C151,34,96,34,96,34s-55,0-68.76,3.7A22.12,22.12,0,0,0,11.68,53.36C8,67.18,8,96,8,96s0,28.82,3.68,42.64A22.12,22.12,0,0,0,27.24,154.3C41,158,96,158,96,158s55,0,68.76-3.7a22.12,22.12,0,0,0,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36ZM78,122.17V69.83L124,96Z"
                                            transform="translate(-8 -34)"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://au.linkedin.com/company/bellroy"
                                    data-auto-id="true"
                                    id="page-footer-https-au-linkedin-com-company-bellroy-1"
                                >
                                    <svg
                                        id="Layer_1"
                                        data-name="Layer 1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 658.14 662"
                                        height="20px"
                                    >
                                        <title>LinkedIn</title>
                                        <path d="M0,47.42C0,21.25,21.73,0,48.57,0H609.16C636,0,657.78,21.25,657.78,47.42V614.59c0,26.18-21.76,47.41-48.62,47.41H48.57C21.73,662,0,640.77,0,614.6V47.41Z" />
                                        <path
                                            fill="#231f20"
                                            d="M199.36,554.16V255.23H100V554.16h99.35ZM149.7,214.42c34.64,0,56.21-22.95,56.21-51.64-.65-29.33-21.57-51.65-55.55-51.65s-56.21,22.32-56.21,51.65c0,28.69,21.55,51.64,54.9,51.64h.65ZM254.36,554.16h99.35V387.24c0-8.92.65-17.86,3.27-24.24,7.18-17.86,23.53-36.34,51-36.34,36,0,50.33,27.41,50.33,67.6v159.9h99.35V382.76c0-91.81-49-134.54-114.38-134.54-53.59,0-77.13,30-90.2,50.36h.66V255.24H254.37c1.29,28,0,298.93,0,298.93Z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://pinterest.com/bellroy"
                                    data-auto-id="true"
                                    id="page-footer-https-pinterest-com-bellroy-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                        height="20px"
                                    >
                                        <title>Pinterest</title>
                                        <path
                                            className="st0"
                                            d="M23,0C10.3,0,0,10.2,0,23c0,9.5,5.8,18,14.6,21.5c-0.3-2.2-0.3-4.4,0.1-6.6c0.4-1.8,2.7-11.4,2.7-11.4
              c-0.5-1.1-0.7-2.2-0.7-3.4c0-3.2,1.9-5.6,4.2-5.6c2,0,2.9,1.5,2.9,3.2c0,2-1.3,4.9-1.9,7.7c-0.4,1.8,0.6,3.6,2.4,4.1
              c0.3,0.1,0.7,0.1,1,0.1c4.1,0,7.2-4.3,7.2-10.5c0-5.5-4-9.4-9.6-9.4c-5.5-0.2-10.2,4.1-10.4,9.6c0,0.1,0,0.3,0,0.4
              c0,1.9,0.6,3.7,1.7,5.2c0.2,0.2,0.2,0.4,0.1,0.7c-0.2,0.7-0.6,2.3-0.6,2.6s-0.3,0.5-0.8,0.3c-2.9-1.4-4.7-5.6-4.7-9
              c0-7.3,5.3-13.9,15.2-13.9c8,0,14.2,5.7,14.2,13.3c0,7.9-5,14.3-11.9,14.3c-2.3,0-4.5-1.2-5.3-2.6L19,39c-0.7,2.1-1.7,4.1-2.9,6
              c12.2,3.7,25-3.1,28.7-15.3c3.7-12.2-3.1-25-15.3-28.7C27.4,0.4,25.2,0,23,0z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.tiktok.com/@bellroy_official"
                                    data-auto-id="true"
                                    id="page-footer-https-www-tiktok-com-bellroy_official-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 2500 2500"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        xmlSpace="preserve"
                                        height="20px"
                                    >
                                        <title>TikTok</title>
                                        <path d="M2202.4 0H297.6C133.5 0 0 133.5 0 297.6v1904.8C0 2366.5 133.5 2500 297.6 2500h1904.8c164.1 0 297.6-133.5 297.6-297.6V297.6C2500 133.5 2366.5 0 2202.4 0m-237.8 1090.7c-13.7 1.3-27.4 2-41.1 2.1-150.4 0-290.7-75.8-373.2-201.7v686.7c0 280.3-227.2 507.6-507.6 507.6s-507.6-227.2-507.6-507.6 227.2-507.6 507.6-507.6c10.6 0 21 1 31.4 1.6V1322c-10.4-1.2-20.7-3.2-31.4-3.2-143.1 0-259 116-259 259s116 259 259 259c143.1 0 269.5-112.7 269.5-255.8l2.5-1166.3H1554c22.6 214.6 195.6 382.2 410.8 397.9v278" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a id="wechatModalTrigger" href="#" className="wechatButton">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 128 128"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        height="20px"
                                    >
                                        <g>
                                            <path
                                                d="M3.1,53.9c0-2.1,0-4.3,0-6.4c0.1-0.3,0.2-0.5,0.2-0.8c0.8-3.1,1.2-6.3,2.3-9.3c3.8-9.8,10.7-17,19.7-22.1
              C37,8.8,49.5,6.9,62.7,8.9c7.7,1.2,15,3.9,21.5,8.3c9.5,6.4,16.1,14.9,18.5,26.4c0.6,3,0.9,6,0.5,9.1c-0.5-0.1-0.9-0.2-1.2-0.4
              c-7-2.3-14.2-3-21.5-2.1C69,51.8,59.3,56.7,52,65.7c-5.1,6.2-7.7,13.4-7.4,21.5c0.1,1.8,0.3,3.6,0.5,5.4c-0.3,0-0.6,0-0.9-0.1
              c-4.9-0.8-9.6-2.1-14.2-4.1c-0.5-0.2-1.2-0.2-1.7,0.1c-4.9,2.1-9.8,4.2-14.7,6.3c-1.3,0.6-2.7,1.1-4.2,1.8c0.1-1.2,0.2-2.1,0.3-3.1
              c0.6-5.9,1.2-11.7,1.8-17.6c0.1-0.9-0.1-1.6-0.6-2.4C7.5,69,5.1,64,3.9,58.4C3.6,56.9,3.3,55.4,3.1,53.9z M29.2,31.9
              c-0.2,3.8,3,7.1,7,7.3c3.8,0.2,7.1-3,7.3-7c0.2-3.8-3-7.1-7-7.3C32.7,24.8,29.4,28,29.2,31.9z M77.2,32c0-3.9-3.2-7.1-7.1-7.1
              c-3.9,0-7.1,3.3-7.1,7.1c0,3.9,3.2,7.1,7.1,7.1C74,39.2,77.2,36,77.2,32z"
                                            />
                                            <path
                                                d="M119.8,121c-2.2-0.9-4.2-1.8-6.1-2.6c-2.6-1.1-5.3-2.3-7.9-3.4c-0.5-0.2-1.3-0.2-1.8,0c-11.7,4.8-23.5,4.8-35.1-0.3
              c-8.3-3.6-14.6-9.4-18.1-17.9c-3.3-8-2.8-15.9,1.2-23.6c4.5-8.5,11.7-13.8,20.7-16.9c5.7-2,11.6-2.6,17.5-2.1
              c11,1,20.6,5.2,27.7,13.9c8.2,10.1,9.1,23.6,1.3,34.5c-1.5,2.1-0.9,3.9-0.7,5.9C118.9,112.6,119.4,116.7,119.8,121z M73.9,77.5
              c2.9,0,5.4-2.4,5.4-5.3c0-2.9-2.4-5.4-5.3-5.4c-2.9-0.1-5.4,2.4-5.4,5.4C68.6,75.2,70.9,77.5,73.9,77.5z M99.5,77.5
              c3,0,5.3-2.4,5.3-5.3c0-2.9-2.4-5.4-5.4-5.4c-2.9,0-5.4,2.5-5.4,5.5C94.2,75.2,96.5,77.5,99.5,77.5z"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="http://carryology.com"
                                    data-auto-id="true"
                                    id="page-footer-http-carryology-com-1"
                                >
                                    <svg
                                        className="mobile-hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 86 26"
                                        height="20px"
                                    >
                                        <title>Carryology</title>
                                        <path d="M11.662 20.238c-.292 2.261-1.574 3.895-3.69 4.875-1.971.913-3.648.162-5.12-1.214-1.25-1.169-1.83-2.706-1.989-4.33-.359-3.669.402-7.121 2.386-10.266.998-1.583 2.396-2.694 4.198-3.147 1.571-.394 3.127-.224 4.1 1.29.986 1.534 1.123 3.224.288 4.871-.49.966-1.402 1.258-2.4.811-1.221-.547-.524-1.218-.173-2.028.466-1.077.86-2.587-.256-3.292-1.401-.885-2.402.451-3.076 1.5-2.285 3.556-2.73 7.531-1.935 11.564.577 2.927 2.941 3.438 5.125 1.299.707-.693 1.286-1.516 1.923-2.28l.619.347zM83.944 3.352c-.836.114-1.424.398-1.124 1.512.458 1.701-.454 3.133-1.177 4.569-.264.525-.633 1.261-1.263 1.064-.758-.237-.689-1.089-.587-1.772.139-.925.401-1.836.481-2.764.069-.807.269-1.848-1.005-1.942-1.381-.102-1.284.765-1.235 1.821.089 1.93-.467 3.641-2.682 4.721.148-1.774.195-3.303.425-4.804.182-1.19-.222-1.391-1.236-1.051-.371.125-.569.839-1.022.491-2.156-1.658-3.384.071-4.834 1.205-.984.77-1.821 1.473-3.116-.03-1.443-1.675-3.531-1.066-4.515 1.025-.392.834-.773 1.772-.781 2.667-.018 1.83-.974 2.73-2.784 3.452.138-1.502.213-2.765.379-4.017l1.014-7.08c.112-.847.202-1.923-1.004-1.933-1.135-.009-1.739.549-1.529 1.992.203 1.397-.081 2.884-.274 4.315-.27 1.998-1.879 2.626-3.492 1.429-1.858-1.379-3.87-.924-4.863 1.145-.766 1.596-.942 3.268-.335 4.962.78 2.176 2.986 2.712 4.69 1.127.906-.843 1.403-1.927 1.489-3.164.083-1.197.699-1.851 1.971-2.061 0 .548-.018 1.05.004 1.549.053 1.209-.914 2.742.502 3.531 1.457.812 2.471-.596 3.527-1.373.537-.395.8-.835 1.677-.263 2.314 1.512 3.972.852 5.163-1.744.365-.795.307-1.949 1.775-2.064.156 1.021.266 2.092 1.006 2.962.884 1.041 2.036.616 3.345.545l-1.039 1.196c-2.392 2.791-2.759 4.667-1.279 6.813.586.849 1.264 1.702 2.448 1.577 1.267-.134 1.54-1.237 1.801-2.211.555-2.074.506-4.219.646-6.345.163-2.471 1.771-3.351 3.847-2.172.953.541 1.801.266 2.668-.158 1.31.143.807.969.629 1.672-.161 1.61-.315 3.221-.484 4.83-.099.939.37 1.518 1.233 1.619.698.082 1.127-.511 1.13-1.134.028-4.861.358-9.694 1.074-14.504.111-.75-.395-1.323-1.264-1.205zM50.69 9.053c.322.014.63.153.671.693-.042.435-.512.44-.879.442-.276.002-.798-.222-.789-.301.057-.553.439-.859.997-.834zm.852 3.659c-.113.956-.416 1.965-1.558 1.93-.916-.028-1.006-.967-1.08-1.736-.127-1.314.818-.937 1.304-.908.861-.206 1.442-.195 1.334.714zm12.183-5.527c.5-.099.882.28.862.685-.02.43-.502.618-.947.669-.333.034-.747.067-.801-.34-.081-.601.366-.912.886-1.014zm1.018 3.792c-.102.852-.438 1.606-1.397 1.849-1.009-.098-1.092-.838-1.174-1.615-.102-.97.455-1.126 1.22-1.053.58.057 1.491-.345 1.351.819zm7.45 9.98c-1.412-2.121-.767-3.608.627-5.428.286 2.022.128 3.55-.627 5.428zm-.825-9.397c-1.336-.013-.923-1.348-1.164-1.987.126-1.459.187-3.25 1.5-3.35 1.288-.098 1.684 1.72 1.707 2.887.023 1.176-.605 2.464-2.043 2.45zm-9.402 5.41c-5.053.776-10.1 1.593-15.134 2.487-1.267.225-1.635-.011-1.593-1.339.083-2.652.407-5.269.786-7.886.133-.917.093-1.839-1.129-1.805-.958.026-1.503.431-1.166 1.664.432 1.581-.439 2.991-1.14 4.349-.285.552-.584 1.425-1.458 1.088-.676-.261-.465-1.041-.406-1.594.108-1.012.394-2.006.494-3.018.085-.863.076-1.83-1.191-1.8-1.137.027-1.188.643-1.123 1.71.152 2.505-.798 4.574-3.142 5.862-.755-1.024-.029-1.699.314-2.423.818-1.728.878-3.155-1.427-3.632-.366-.076-.635-.163-.74-.544-.266-.963-.653-1.966-1.884-1.449-1.158.485-1.32 1.555-1.188 2.787.237 2.201-1.477 5.206-3.343 6.12-.318-.853.248-1.469.554-2.146.767-1.697.935-3.173-1.395-3.681-.341-.074-.676-.072-.759-.492-.2-1.007-.596-1.982-1.819-1.494-1.154.46-1.364 1.537-1.253 2.781.214 2.398-1.14 4.183-2.532 6.45-.792-1.752-.393-2.993-.272-4.222.143-1.449-.703-2.472-1.818-3.019-1.101-.54-2.144.117-2.911 1.04-1.31 1.575-1.897 3.421-1.908 5.44-.014 2.632 1.31 3.358 3.596 2.064.551-.311.847-1.356 1.877-.507 1.576 1.299 2.729.277 3.517-1.075.768-1.317 1.365-2.741 1.943-4.156.334-.817.937-1.061 1.616-.812.878.321.276.972.12 1.487a7.998 7.998 0 0 1-.356.959c-.496 1.107-.606 2.221.451 3.014 1.145.859 2.259.395 3.259-.418 1.469-1.194 2.037-2.899 2.603-4.605.298-.897.576-2.055 1.822-1.546 1.304.533.147 1.429-.044 2.096-.337 1.177-.862 2.403.324 3.281 1.345.996 2.557.338 3.637-.694.363-.346.671-1.292 1.364-.552 1.277 1.365 2.67.855 4.035.205.405 2.255-.077 3.345-2.46 3.593-3.89.405-7.733 1.255-11.598 1.908-.789.133-1.749.348-1.602 1.267.196 1.224 1.208.507 1.867.395 3.78-.642 7.559-1.289 11.324-2.008 1.358-.259 2.421-.417 2.064 1.543-.159.87.175 1.615 1.133 1.631 1.108.018 1.111-.975 1.029-1.69-.221-1.925.799-2.434 2.472-2.714 6.267-1.046 12.514-2.213 19.016-3.379-1.467-1.34-3.009-.739-4.426-.521zm-43.858-1.7c-.107 1.577-.317 3.068-1.893 3.378-.884.174-.697-.979-.655-1.567.09-1.273.138-2.651 1.513-3.284.112-.05 1.465.596 1.035 1.473z"></path>
                                    </svg>
                                    <svg
                                        className="mobile-only"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 33 21.2"
                                        height="20px"
                                    >
                                        <title>Carryology</title>
                                        <path
                                            className="st1"
                                            d="M1.1,11.6l-0.9,0.8C0,12.6,0,12.8,0.1,13c0,0,0,0,0.1,0.1l1.6,1.3l1.1,0.8c0.2,0.1-0.1,0.3-0.8,1.2
              C1.5,17,0.7,18,0.7,18c-0.1,0.2-0.1,0.4,0.1,0.5c0,0,0,0,0.1,0l1.2,0.7l2.8-3.9C5,15.1,5,14.9,4.8,14.7L1.1,11.6z"
                                        />
                                        <path
                                            className="st1"
                                            d="M32.7,9.8l-4.5-3.9l-1,0.9C27,7,27,7.2,27.1,7.4c0,0,0.1,0.1,0.1,0.1c0,0,1.3,1.2,2,1.7l0.7,0.5
              c-0.3,0-0.7,0-1,0c-3.8,0.3-6.6,0.6-10.6,1.1c-0.2,0.5-0.2,1.1-0.1,1.7c6.7-1,8.9-1.4,10.1-1.5c0.7-0.1,1.3-0.1,2-0.1l-0.6,0.7
              c-0.6,0.8-1.2,1.5-1.7,2.4c-0.1,0.2-0.1,0.5,0.2,0.7c0,0,0,0,0.1,0l1.5,0.7l3.2-5C33.1,10.3,32.9,10,32.7,9.8z"
                                        />
                                        <path
                                            className="st1"
                                            d="M20.4,6.1l-0.2,0.1l0.1,0.2c0.4,0.7,1.1,1.1,1.9,1.2h0.1c2-0.2,2.4-2,2.2-3.8c-0.1-0.5-0.2-0.9-0.4-1.4l0,0V2.4
              c0,0,0,0,0-0.1l0,0V2.2l0,0c-0.6-1.4-2.1-2.3-3.7-2.2c-1.4,0-2.7,0.5-3.8,1.3c-2.4,1.8-4,4.4-4.5,7.3c-0.3,1.1-0.4,2.2-0.5,3.3
              c-1.6,0.3-2.3,0.5-2.6,0.5c-0.3,0.1-0.6,0.3-0.8,0.5L5.1,9.7l-0.9,1.1C4,11,4,11.3,4.2,11.5L5.7,13c0.5,0.5,1.1,1,1.1,1
              c0.2,0.2-0.1,0.4-0.7,1.5c-0.5,0.8-1.3,2.2-1.3,2.2c-0.1,0.2,0,0.5,0.2,0.7l1.2,0.8l2.6-4.8c0.3-0.1,1.2-0.2,2.8-0.6
              c0.1,1.3,0.4,2.5,0.9,3.7c1,2.1,3,3.5,5.3,3.6c0.8,0,1.5-0.2,2.2-0.5c1.4-0.7,2.5-1.9,3.1-3.2l0.1-0.2c0.3-0.5,0.7-1.2,0.5-1.8
              c-0.1-0.3-0.3-0.5-0.6-0.5c-0.4,0-0.7,0.5-1,1V16c-0.8,1.5-2.6,3-4.2,3c-0.8,0-1.6-0.3-2.1-1c-1.3-1.7-1.6-4.5-0.9-8.6
              c0.6-3.6,1.8-5.9,3.6-7.2c0.4-0.3,0.9-0.5,1.5-0.5c0.7,0,1.3,0.5,1.3,1.2c0,0,0,0.1,0,0.1C21.7,4.9,21.3,5.6,20.4,6.1z"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="column collapsable-section" id='footId1' onClick={handleFoot}>
                        <h4 >
                            HELP
                            <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 11 6"
                                xmlSpace="preserve"
                            >
                                <path
                                    className="st0"
                                    d="M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                />
                            </svg>
                        </h4>
                        <ul>
                            <li>
                                <a
                                    href="/faq"
                                    data-auto-id="true"
                                    id="page-footer-customer-care-1"
                                >
                                    FAQ
                                </a>
                            </li> 
                            <li>
                                <a
                                    href="/contact"
                                    data-auto-id="true"
                                    id="page-footer-customer-care-contact-us-1"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/customer-care/terms-conditions"
                                    data-auto-id="true"
                                    id="page-footer-customer-care-terms-conditions-1"
                                >
                                    Terms &amp; Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/customer-care/privacy-policy"
                                    data-auto-id="true"
                                    id="page-footer-customer-care-privacy-policy-2"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/customer-care/cookie-policy"
                                    data-auto-id="true"
                                    id="page-footer-customer-care-cookie-policy-1"
                                >
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="column collapsable-section" id='footId2' onClick={handleFoot2}>
                        <h4>
                            Shop Collections
                            <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 11 6"
                                xmlSpace="preserve"
                            >
                                <path
                                    className="st0"
                                    d="M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                />
                            </svg>
                        </h4>
                        <ul>
                            <li>
                                <a
                                    href="/search?type=Business Cards"
                                    data-auto-id="true"
                                    id="page-footer-collection-new-releases-1"
                                >
                                    Business Cards
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Reviews Cards"
                                    data-auto-id="true"
                                    id="page-footer-collection-bestsellers-1"
                                >
                                    
                                    Reviews Cards
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Social Media Cards"
                                    data-auto-id="true"
                                    id="page-footer-coming-soon-1"
                                >
                                    
                                    Social Media Cards
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Medical ID Cards"
                                    data-auto-id="true"
                                    id="page-footer-collection-premium-1"
                                >
                                    
                                    Medical ID Cards
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Pets Tags"
                                    data-auto-id="true"
                                    id="page-footer-collection-venture-1"
                                > 
                                    Pets Tags
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Reviews Tags"
                                    data-auto-id="true"
                                    id="page-footer-collection-for-tech-lovers-1"
                                >
                                    
                                    Reviews Tags
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Social Media Tags"
                                    data-auto-id="true"
                                    id="page-footer-collection-small-bags-1"
                                >
                                    
                                    Social Media Tags
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Medical ID Tags"
                                    data-auto-id="true"
                                    id="page-footer-collection-recycled-1"
                                >
                                    
                                    Medical ID Tags
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Review Stands"
                                    data-auto-id="true"
                                    id="page-footer-collection-slim-your-wallet-1"
                                > 
                                    Review Stands
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Menu Stands"
                                    data-auto-id="true"
                                    id="page-footer-collection-apex-1"
                                > 
                                    Menu Stands
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Business Cards Stickers"
                                    data-auto-id="true"
                                    id="page-footer-collection-materials-guide-1"
                                > 
                                    Business Cards Stickers 
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Reviews Stickers"
                                    data-auto-id="true"
                                    id="page-footer-products-category-outlet-1"
                                >
                                    Reviews Stickers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Social Media Stickers"
                                    data-auto-id="true"
                                    id="page-footer-collection-travel-1"
                                >
                                    
                                    Social Media Stickers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/search?type=Medical ID Stickers"
                                    data-auto-id="true"
                                    id="page-footer-collection-lite-1"
                                > 
                                    Medical ID Stickers
                                </a>
                            </li> 
                        </ul>
                    </div>
                    <div className="column collapsable-section" id='footId3' onClick={handleFoot3}>
                        <h4>
                            ABOUT
                            <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 11 6"
                                xmlSpace="preserve"
                            >
                                <path
                                    className="st0"
                                    d="M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                />
                            </svg>
                        </h4>
                        <ul>
                            <li>
                                <a
                                    href="/about-us"
                                    data-auto-id="true"
                                    id="page-footer-about-us-1"
                                >
                                    Our Story
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/our-materials"
                                    data-auto-id="true"
                                    id="page-footer-our-materials-1"
                                >
                                    Our Materials
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/responsible-business"
                                    data-auto-id="true"
                                    id="page-footer-responsible-business-1"
                                >
                                    Responsible Business
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/ambassadors"
                                    data-auto-id="true"
                                    id="page-footer-ambassadors-1"
                                >
                                    Ambassadors
                                </a>
                            </li>
                            <li>
                                <a href="/journal" data-auto-id="true" id="page-footer-journal-1">
                                    Journal
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/collaborations"
                                    data-auto-id="true"
                                    id="page-footer-collaborations-1"
                                >
                                    Collaborations
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/retailers"
                                    data-auto-id="true"
                                    id="page-footer-retailers-1"
                                >
                                    Find In-Store
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/affiliate-program"
                                    data-auto-id="true"
                                    id="page-footer-affiliate-program-1"
                                >
                                    Affiliate Program
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/corporate-gifting"
                                    data-auto-id="true"
                                    id="page-footer-corporate-gifting-1"
                                >
                                    Corporate Gifting
                                </a>
                            </li>
                            <li>
                                <a href="/press" data-auto-id="true" id="page-footer-press-1">
                                    Press
                                </a>
                            </li>
                            <li>
                                <a href="/careers" data-auto-id="true" id="page-footer-careers-1">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="/sitemap" data-auto-id="true" id="page-footer-sitemap-1">
                                    Sitemap
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="column ">  </div>
                </nav>
                <section className="SiteFooter__footNote">
                    <div className="SiteFooter__footNote__inner">
                        <div className="logo">

                            <a
                                href="https://greatplacetowork.com.au/gptwcertified/bellroy/"
                                data-auto-id="true"
                                id="page-footer-https-greatplacetowork-com-au-gptwcertified-bellroy-1"
                            >

                            </a>
                        </div>
                        <div className="text">
                            <div className="column">
                                <p className="question">
                                    Got a question?{" "}
                                    <span>
                                        Contact{" "}
                                        <a
                                            href="mailto:support@bellroy.com"
                                            data-auto-id="true"
                                            id="page-footer-mailto-support-bellroy-com-1"
                                        >
                                            support@bellroy.com
                                        </a>
                                    </span>
                                </p>
                            </div>
                            <div className="column">
                                <span className="copyright">
                                    All rights reserved © {(new Date().getFullYear())} Social Tap
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </footer>
    )
}

export default Footer