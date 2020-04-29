import React, { useState, useEffect } from 'react';
import { ReCaptcha } from 'react-recaptcha-google';
// import styled from 'styled-components';

// import Headerimg from '../images/Headerimg.jpg';
// import Courseimg from '../images/course.jpg';
// import Registerimg from '../images/register.png';
import Urban from '../images/urbanpro.png';

import { validString, validNumber, validEmail, validAlpha } from '../common/validation/Regex';

import sendform from '../actions/sendform';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// API CALL
import CapApi from '../api/CapApi';

import '../App.css';
import '../styles/contact.css';
import '../styles/contact_responsive.css';

function Contact() {

    const [last_name, setName] = useState();
    const [email, setEmail] = useState();
    const [capToken, setcapToken] = useState();
    const [captchaDemo, setcaptchaDemo] = useState(false);

    const [aboutList, setAboutList] = useState({});

    function handleName(event) {
        if (validString.test(event.target.value)) {
            setName(event.target.value);
        }
    }
    function handleEmail(event) {
        if (validEmail.test(event.target.value)) {
            setEmail(event.target.value);
        }
    }

    function onLoadRecaptcha() {
        if (captchaDemo) {
            captchaDemo.reset();
            // captchaDemo.execute();
        }
    }

    async function verifyCallback(newrecaptchaToken) {
        // Here you will get the final recaptchaToken!!!  
        // console.log(recaptchaToken, "<= your recaptcha token")
        setcapToken(newrecaptchaToken);
        // check(recaptchaToken, 'http://training.sargatechnology.com/contact');
        try {
            const result = await CapApi.check({ recaptchaToken: newrecaptchaToken, remoteAddress: 'http://training.sargatechnology.com/contact' });
            console.log(result);
        } catch (error) {
            console.log("error");
        }
    }

    function formcontactvalidate(event) {
        event.preventDefault();
        var flag1 = 0, flag2 = 0, flag3 = 0;
        var sn = document.getElementById('last_name_contact');
        sn = sn.value;
        if (!validString.test(sn)) {
            document.getElementById("last_name_contact").style.border = "2px solid #ff000069";
            flag1 = 1;
        }
        else {
            document.getElementById("last_name_contact").style.border = "2px solid #ff000000";
            document.getElementById("last_name_contact").style.borderBottom = "1px solid #b2b2b2";
            flag1 = 0;
        }
        var se = document.getElementById('email_contact');
        se = se.value;
        if (!validEmail.test(se)) {
            document.getElementById("email_contact").style.border = "2px solid #ff000069";
            flag2 = 1;
        }
        else {
            document.getElementById("email_contact").style.border = "2px solid #ff000000";
            document.getElementById("email_contact").style.borderBottom = "1px solid #b2b2b2";
            flag2 = 0;
        }


        var se = document.getElementById('Message__c_contact');
        se = se.value;
        if (se == "") {
            document.getElementById("Message__c_contact").style.border = "2px solid #ff000069";
            flag3 = 1;
        }
        else {
            document.getElementById("Message__c_contact").style.border = "2px solid #ff000000";
            document.getElementById("Message__c_contact").style.borderBottom = "1px solid #b2b2b2";
            flag3 = 0;
        }
        if (flag1 === 0 && flag2 === 0 && flag3 === 0) {
            // document.getElementById("contact_form").submit();
            let form = document.getElementById("contact_form");
            if (!form) return;
            sendform(form);
            toast.success("Form Saved !");
            form.reset();
        }
    }

    return (
        <div className=" pg-width">
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover />
            <div className="course-home">
                {/* <div className="breadcrumbs_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="breadcrumbs_list d-flex flex-row align-items-center justify-content-start">
                                <li><a href="/">home</a></li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
            <div className="language course-bg">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="language_title text-center">Contact Us</div>
                            <div className="language_breadcrumb text-center">
                                <ul className="breadcrumbs_list  text-center align-items-center justify-content-start">
                                    <li><a href="/">home</a></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact">
                <div className="container">
                    <div className="row row-lg-eq-height">
                        <div className="col-lg-6">
                            <div className="contact_map">
                                <div className="map">
                                    <div id="google_map" className="google_map">
                                        <div className="map_container">
                                            <div id="map">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.97119780653!2d77.613933!3d12.908647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb5400d3744b45435!2sNubes%20Elite%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1569074099754!5m2!1sen!2sin" style={{ width: '100%' }} height="400" frameborder="0" allowfullscreen=""></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="contact_details mt-5">
                                <div className="contact_details_title">Contact Details</div>
                                <ul>
                                    <li>
                                        <svg fill="rgba(0,0,0,0.4)" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            <path d="M0 0h24v24H0z" fill="none" />
                                        </svg>
                                        <span>Nubes Elite Technologies Private Limited,<br />
                                            #200, 11th Cross, 29th Main (Lake Road),
                                            BTM 2nd Stage,
                                        Bengaluru- 560076<br />
                                            Karnataka
                                    </span>
                                    </li>
                                    <li>
                                        <svg fill="rgba(0,0,0,0.4)" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                        <span>+91 7483096134 , +91 8041140897</span>
                                    </li><br />
                                    <li>
                                        <svg fill="rgba(0,0,0,0.4)" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            <path d="M0 0h24v24H0z" fill="none" />
                                        </svg>
                                        <span>info@nubeselite.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact_form_container">
                                <div className="form_title">Get in Touch</div>
                                <form className="contact_form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" id="contact_form" name="contact_form">
                                    <input type="hidden" name="oid" value="00D6F000002Y0a8" />
                                    <input type="hidden" name="retURL" value="http://training.sargatechnology.com/contact" />

                                    {/* <form action="#" id="contact_form" className="contact_form"> */}
                                    <div className="row contact_row">
                                        <div className="col-lg-6 contact_col">
                                            <input type="text" className="form_input" placeholder="Name" required="required" id="last_name_contact" maxlength="80" name="last_name" size="20" required="required" />
                                        </div>
                                        <div className="col-lg-6 contact_col">
                                            <input type="email" className="form_input" placeholder="Email" required="required" name="email" id="email_contact" size="20" maxlength="80" required="required" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea className="form_input form_text" placeholder="Message" required="required" required="required" id="Message__c_contact" name="description"></textarea>
                                        </div>
                                        <div className="col-12">
                                            {window.grecaptcha && <ReCaptcha
                                                ref={(el) => { setcaptchaDemo(el); }}
                                                // size="invisible"
                                                render="explicit"
                                                sitekey="6LemfMMUAAAAABr_9mrActLdNwKAt-HZX4wsSyRj"
                                                onloadCallback={onLoadRecaptcha}
                                                verifyCallback={verifyCallback}
                                            />}
                                        </div>
                                        <div className="col mt-4">
                                            <button className="form_button trans_200" name="btncontactsubmit" onClick={(event) => { formcontactvalidate(event); }}>send message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="contact_details mt-3">
                                <div className="contact_details_title">Follow Us</div>
                                <ul>
                                    <li>
                                        <span>
                                            <a href="https://www.facebook.com/nubeselite" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                            </a>
                                        </span>
                                    </li>
                                    <li><span><a href="https://www.linkedin.com/in/nubeselite" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></span></li>
                                    <li><span><a href="https://www.youtube.com/channel/UCcQM3Vyu37fe09kvcBLGLRA" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></span></li>
                                    <li><span><a href="https://www.urbanpro.com/nubeselite" target="_blank" rel="noopener noreferrer"><img src={Urban} width="10" /></a></span></li>
                                    <li><span><a href="https://twitter.com/NubesElite" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></span></li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
