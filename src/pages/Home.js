import React, { useState, useEffect } from 'react';

// API CALL
import TestimonialsApi from '../api/Testimonial';
import CoursesApi from '../api/CourseApi';
import { validString, validNumber, validEmail, validAlpha } from '../common/validation/Regex';

import { Input, InputLabel, Select, FormControl, MenuItem, Checkbox, ListItemText } from '@material-ui/core';

import Slider from "react-slick";

// import styled from 'styled-components';
// import Courseimg from '../images/course.jpg';
import Salesforce from '../images/salesforce-admin.jpg';
import Lightening from '../images/lightening.jpg';
// import Development from '../images/development.jpg';
import AdminDevelopment from '../images/salesforce-admin-and-development.jpg';

import Accenture from '../images/Accenture.png';
import TATA from '../images/TATA_Consultancy_Services_Logo_blue.png';
import PWC from '../images/PricewaterhouseCoopers_Logo.png';
import Ntt from '../images/ntt-data.png';
import HCL from '../images/HCL_Technologies_logo.png';
import Mind from '../images/happiest-minds-logo-1.jpg';
import Aruba from '../images/aruba-logo-1.png';
import CTS from '../images/CTS-Logo-1.png';
import DELL from '../images/Dell_Logo-1.png';
import Deloitte from '../images/Deloitte.png';

import $ from 'jquery';

import Ukr from '../svg/Ukrainian.svg';
// import J from '../svg/Japanese.svg';
import '../App.css';
import '../styles/main_styles.css';
import '../styles/responsive.css';
import '../styles/OwlCarousel2-2.2.1/owl.carousel.css';
import '../styles/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../styles/OwlCarousel2-2.2.1/animate.css';
import Icon from '../components/Icon';
import TextField from '../components/TextField';
import Course from '../components/Course';
import Title from '../components/Title';
import { styles } from '../utils/styles.js';

import sendform from '../actions/sendform';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Home() {
	let classes = styles();
	function regtrainer() {
		var d1 = document.getElementById("left");
		d1.classList.remove("left_hover");
		document.getElementById("s1class").style.color = "#748194";
		document.getElementById("s2class").style.color = "#00a0e3";
		document.getElementById("applyform").style.backgroundColor = "white";
		// document.getElementById("regtrainer").style.color = "#fff";
		// document.getElementsByClassName("s2class").css({"color":"#00a0e3"});
		// document.getElementsByClassName("s1class").css({"color":"#748194"});
		var d2 = document.getElementById("right");
		d2.classList.add("right_hover");
		document.getElementById("student").style.display = "none";
		document.getElementById("trainer").style.display = "";
		// document.getElementsByClassName("signin").css({"display":"none"});
		// document.getElementsByClassName("signup").css({"display":""});
	}

	function regstudent() {
		var d2 = document.getElementById("right");
		d2.classList.remove("right_hover");
		var d1 = document.getElementById("left");
		d1.classList.add("left_hover");
		d1.style.position = "inherit";
		document.getElementById("s1class").style.color = "#00a0e3";
		document.getElementById("s2class").style.color = "#748194";
		document.getElementById("applyform").style.backgroundColor = "rgb(151, 208, 230)";
		document.getElementById("regstudent").style.color = "#fff";
		// document.getElementsByClassName("s2class").css({"color":"#00a0e3"});
		// document.getElementsByClassName("s1class").css({"color":"#748194"});
		document.getElementById("trainer").style.display = "none";
		document.getElementById("student").style.display = "";
		// document.getElementsByClassName("signin").css({"display":"none"});
		// document.getElementsByClassName("signup").css({"display":""});
	}

	const [inputs, setInputs] = useState({});
	const handleChange = (e) => {
		if (e) { setInputs({ ...inputs, [e.target.name]: e.target.value }); }
	}

	const [testimonialList, setTestimonialList] = useState({});

	const [last_name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [last_name2, setName2] = useState();
	const [email2, setEmail2] = useState();
	const [phone2, setPhone2] = useState();
	const [last_name3, setName3] = useState();
	const [email3, setEmail3] = useState();
	const [phone3, setPhone3] = useState();
	const handleTestimonialList = async () => {
		try {
			const result = await TestimonialsApi.list();
			setTestimonialList(result.testimonialList);

			// $(document).ready(function () {
			// 	$('.testimonials-list').slick({
			// 		dots: true,
			// 		autoplay: true,
			// 		prevArrow: '<span class="testimonial-left-handle fa-lg"><i class="fa  fa-stack-2x"></i><i class="fa fa-caret-left fa-stack-1x"></i></span>',
			// 		nextArrow: '<span class="testimonial-right-handle fa-lg"><i class="fa fa-stack-2x"></i><i class="fa fa-caret-right fa-stack-1x"></i></span>',
			// 	});
			// 	$(".slick-dots").hide();
			// });

		} catch (error) {
			console.log("error");
		}
	}

	const [sectionList, setSectionList] = useState({});
	const handleSectionList = async () => {
		try {
			const result = await CoursesApi.sectionList();
			setSectionList(result.sectionList);
		} catch (error) { console.log("error"); }
	}

	const [courseList, setCourseList] = useState({});
	const handleCourseList = async () => {
		try {
			const result = await CoursesApi.list();
			setCourseList(result.courseList);
		} catch (error) { console.log("error"); }
	}

	const [courseval, setcourseVal] = useState('');
	function courseChange(e) {
		setcourseVal(e.target.value);
		setInputs({ ...inputs, '00N6F00000XtAFf': [] });
	}

	useEffect(() => {
		regstudent();
		handleTestimonialList();
		handleSectionList();
		handleCourseList();
	}, []);
	function formvalidate(event) {
		event.preventDefault();
		var flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag5 = 0, flag6 = 0;
		var sn = document.getElementById('last_name');
		sn = sn.value;
		if ((!validString.test(sn)) || sn == "") {
			document.getElementById("last_name").style.border = "2px solid #ff000069";
			flag1 = 1;
		}
		else {
			document.getElementById("last_name").style.border = "2px solid #ff000000";
			flag1 = 0;
		}
		var se = document.getElementById('email');
		se = se.value;
		if (!validEmail.test(se)) {
			document.getElementById("email").style.border = "2px solid #ff000069";
			flag2 = 1;
		}
		else {
			document.getElementById("email").style.border = "2px solid #ff000000";
			flag2 = 0;
		}
		var scity = document.getElementById('city');
		scity = scity.value;
		if (!validString.test(scity)) {
			document.getElementById("city").style.border = "2px solid #ff000069";
			flag3 = 1;
		}
		else {
			document.getElementById("city").style.border = "2px solid #ff000000";
			flag3 = 0;
		}
		var sphone = document.getElementById('phone');
		sphone = sphone.value;
		if ((!validNumber.test(sphone)) || ((sphone).length < 10) || (sphone == "")) {
			document.getElementById("phone").style.border = "2px solid #ff000069";
			flag4 = 1;
		}
		else {
			document.getElementById("phone").style.border = "2px solid #ff000000";
			flag4 = 0;
		}
		var scountry = document.getElementById('country');
		scountry = scountry.value;
		if (!validString.test(scountry)) {
			document.getElementById("country").style.border = "2px solid #ff000069";
			flag5 = 1;
		}
		else {
			document.getElementById("country").style.border = "2px solid #ff000000";
			flag5 = 0;
		}
		var scourse = document.getElementById('00N6F00000T0Jye');
		scourse = scourse.value;
		if (scourse == "") {
			document.getElementById("00N6F00000T0Jye").style.border = "2px solid #ff000069";
			flag6 = 1;
		}
		else {
			document.getElementById("00N6F00000T0Jye").style.border = "2px solid #ff000000";
			flag6 = 0;
		}
		if (flag1 === 0 && flag2 === 0 && flag3 === 0 && flag4 === 0 && flag5 === 0 && flag6 === 0) {
			//document.getElementById("student").submit();
			let form = document.getElementById("student");
			if (!form) return;
			sendform(form);
			toast.success("Form Saved !");
			form.reset();
			setInputs({ ...inputs, '00N6F00000XtAFf': [] });
		}
	}

	function formtrainervalidate(event) {
		event.preventDefault();
		var flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag5 = 0, flag6 = 0;
		var sn = document.getElementById('last_name2');
		sn = sn.value;
		if (!validString.test(sn)) {
			document.getElementById("last_name2").style.border = "2px solid #ff000069";
			flag1 = 1;
		}
		else {
			document.getElementById("last_name2").style.border = "2px solid #ff000000";
			flag1 = 0;
		}
		var se = document.getElementById('email2');
		se = se.value;
		if (!validEmail.test(se)) {
			document.getElementById("email2").style.border = "2px solid #ff000069";
			flag2 = 1;
		}
		else {
			document.getElementById("email2").style.border = "2px solid #ff000000";
			flag2 = 0;
		}
		var scity = document.getElementById('city2');
		scity = scity.value;
		if (!validString.test(scity)) {
			document.getElementById("city2").style.border = "2px solid #ff000069";
			flag3 = 1;
		}
		else {
			document.getElementById("city2").style.border = "2px solid #ff000000";
			flag3 = 0;
		}
		var sphone = document.getElementById('phone2');
		sphone = sphone.value;
		if ((!validNumber.test(sphone)) || ((sphone).length < 10) || (sphone == "")) {
			document.getElementById("phone2").style.border = "2px solid #ff000069";
			flag4 = 1;
		}
		else {
			document.getElementById("phone2").style.border = "2px solid #ff000000";
			flag4 = 0;
		}
		var scountry = document.getElementById('country2');
		scountry = scountry.value;
		if (!validString.test(scountry)) {
			document.getElementById("country2").style.border = "2px solid #ff000069";
			flag5 = 1;
		}
		else {
			document.getElementById("country2").style.border = "2px solid #ff000000";
			flag5 = 0;
		}
		var scourse = document.getElementById('00N6F00000T0Jye2');
		scourse = scourse.value;
		if (scourse == "") {
			document.getElementById("00N6F00000T0Jye2").style.border = "2px solid #ff000069";
			flag6 = 1;
		}
		else {
			document.getElementById("00N6F00000T0Jye2").style.border = "2px solid #ff000000";
			flag6 = 0;
		}
		if (flag1 === 0 && flag2 === 0 && flag3 === 0 && flag4 === 0 && flag5 === 0 && flag6 === 0) {
			// document.getElementById("trainer").submit();
			let form = document.getElementById("trainer");
			if (!form) return;
			sendform(form);
			toast.success("Form Saved !");
			form.reset();
		}
	}


	function formsessionvalidate(event) {
		event.preventDefault();
		var flag1 = 0, flag2 = 0;
		var sn = document.getElementById('last_names');
		sn = sn.value;
		if (!validString.test(sn)) {
			document.getElementById("last_names").style.border = "2px solid #ff000069";
			flag1 = 1;
		}
		else {
			document.getElementById("last_names").style.border = "2px solid #ff000000";
			flag1 = 0;
		}
		var se = document.getElementById('emails');
		se = se.value;
		if (!validEmail.test(se)) {
			document.getElementById("emails").style.border = "2px solid #ff000069";
			flag2 = 1;
		}
		else {
			document.getElementById("emails").style.border = "2px solid #ff000000";
			flag2 = 0;
		}
		if (flag1 === 0 && flag2 === 0) {
			// document.getElementById("session").submit();
			let form = document.getElementById("session");
			if (!form) return;
			sendform(form);
			toast.success("Form Saved !");
			form.reset();
		}
	}



	function formApplyValidate(event) {
		event.preventDefault();
		var flag1 = 0, flag2 = 0, flag4 = 0;
		var sn = document.getElementById('last_namea');
		sn = sn.value;
		if (!validString.test(sn)) {
			document.getElementById("last_namea").style.border = "2px solid #ff000069";
			flag1 = 1;
		}
		else {
			document.getElementById("last_namea").style.border = "2px solid #ff000000";
			flag1 = 0;
		}
		var se = document.getElementById('emaila');
		se = se.value;
		if (!validEmail.test(se)) {
			document.getElementById("emaila").style.border = "2px solid #ff000069";
			flag2 = 1;
		}
		else {
			document.getElementById("emaila").style.border = "2px solid #ff000000";
			flag2 = 0;
		}
		var sphone = document.getElementById('phonea');
		sphone = sphone.value;
		if ((!validNumber.test(sphone)) || ((sphone).length < 10) || (sphone == "")) {
			document.getElementById("phonea").style.border = "2px solid #ff000069";
			flag4 = 1;
		}
		else {
			document.getElementById("phonea").style.border = "2px solid #ff000000";
			flag4 = 0;
		}
		if (flag1 === 0 && flag2 === 0 && flag4 === 0) {
			// document.getElementById("register_form").submit();
			let form = document.getElementById("register_form");
			if (!form) return;
			sendform(form);
			toast.success("Form Saved !");
			form.reset();
		}
	}

	return (
		<div className="pg-width">
			<ToastContainer position="top-right"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnVisibilityChange
				draggable
				pauseOnHover />
			<div className="home">
				<div className="home_background"></div>
				<div className="home_content">
					<div className="container">
						<div className="row">
							<div className="container-reg">
								<div className="c1">

									<div className="c11">
										<h1 className="mainhead">PICK YOUR SPOT</h1>
										<p className="mainp">Just click the buttons below to toggle between Student & Trainer Registration form</p>
									</div>
									<div id="left" onClick={regstudent}><h3 className="s1class" id="s1class"><span>Student</span><span className="su"></span>
									</h3></div>
									<div id="right" onClick={regtrainer}><h3 className="s2class" id="s2class"><span>Trainer</span><span className="su"></span></h3></div>
								</div>
								<div className="c2" id="applyform">
									<form className="signup" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" id="student" name="student">
										<h2 className="signup1" id="regstudent">Register for Training</h2>
										<br />
										<input type="hidden" name="oid" value="00D6F000002Y0a8" />
										<input type="hidden" name="retURL" value="http://training.sargatechnology.com/" />
										<input type="hidden" name="00N6F00000XtAFk" value="Student" />
										<input type="hidden" name="lead_source" value="Nubes Elite Training" />
										{/* <input type="text" className="username"  required name="last_name" id="last_name"/> */}
										<TextField type="text" placeholder="Name" id="last_name" maxlength="80" name="last_name" size="20" required="required" />
										<TextField type="email" placeholder="Email" name="email" id="email" size="20" maxlength="80" required="required" />
										<TextField type="text" placeholder="Phone" name="mobile" id="phone" maxlength="10" required="required" />
										<TextField type="text" placeholder="City" maxlength="40" name="00N6F00000Xt9d7" size="20" id="city" required="required" />
										<TextField type="text" placeholder="Country" maxlength="40" name="00N6F00000Xt9dC" size="20" id="country" required="required" />

										<select name="00N6F00000T0Jye" id="00N6F00000T0Jye" value={courseval} onChange={courseChange} className="username" required="required">
											<option value="">Select Technology</option>
											{(sectionList.length > 0 ? sectionList : []).map((data, index) => {
												return (
													<option key={Math.random()} value={data.course}>{data.course}</option>
												)
											})}
										</select>

										<FormControl className={classes.formControl}>
											<Select
												labelId="demo-mutiple-checkbox-label"
												id="demo-mutiple-checkbox"
												name="00N6F00000XtAFf"
												className="username" required="required"
												multiple
												//   value={inputs['00N6F00000XtAFf']}
												value={inputs['00N6F00000XtAFf'] || ['Select Courses']}
												onChange={handleChange}
												input={<Input />}
												renderValue={selected => selected.join(', ')}
											//   MenuProps={MenuProps}
											>
												{(!courseval || courseval.length === 0) && <MenuItem value="Select Courses">
													<ListItemText primary="Select Courses" classes={{ primary: classes.multiselecttext }} />
												</MenuItem>}
												{(courseList.length > 0 ? courseList.map((data, index) => {
													if (courseval && sectionList && courseval.length > 0 && sectionList.length > 0 && sectionList.find && sectionList.find(o => o.course === courseval) && data.mid == sectionList.find(o => o.course === courseval).id) {
														return (
															<MenuItem key={index} value={data.name}>
																<Checkbox checked={inputs['00N6F00000XtAFf'] && inputs['00N6F00000XtAFf'].indexOf(data.name) > -1} />
																<ListItemText primary={data.name} classes={{ primary: classes.multiselecttext }} />
															</MenuItem>
														)
													}
												})
													: null)}
											</Select>
										</FormControl>

										{/* <select name="00N6F00000XtAFf" className="username" required="required">
											<option value="">--None--</option>
											{(courseList.length > 0 ? courseList : []).map((data, index) => {
												if (courseval && sectionList && courseval.length > 0 && sectionList.length > 0 && sectionList.find && sectionList.find(o => o.course === courseval) && data.mid == sectionList.find(o => o.course === courseval).id) {
													return (
														<option key={Math.random()} value={data.name}>{data.name}</option>
													)
												}
											})}
										</select> */}

										<button className="btn-slider" name="btnsubmit" onClick={(event) => { formvalidate(event); }}>Register</button>
									</form>
									<form className="signin" id="trainer" name="trainer" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
										<input type="hidden" name="oid" value="00D6F000002Y0a8" />
										<input type="hidden" name="retURL" value="http://training.sargatechnology.com/" />
										<input type="hidden" name="00N6F00000XtAFk" value="trainer" />
										<input type="hidden" name="lead_source" value="Nubes Elite Training" />

										<h2 className="signup1" id="regtrainer">Register for Trainer</h2>
										<br />
										<TextField type="text" placeholder="Name" id="last_name2" maxlength="80" name="last_name" size="20" required="required" />
										<TextField type="email" placeholder="Email" name="email" id="email2" size="20" maxlength="80" required="required" />
										<TextField type="text" placeholder="Phone" name="mobile" id="phone2" maxlength="10" required="required" />
										<TextField type="text" placeholder="City" maxlength="40" name="00N6F00000Xt9d7" size="20" id="city2" required="required" />
										<TextField type="text" placeholder="Country" maxlength="40" name="00N6F00000Xt9dC" size="20" id="country2" required="required" />

										<select name="00N6F00000T0Jye" id="00N6F00000T0Jye2" value={courseval} onChange={courseChange} className="username" required="required">
											<option value="">Select Technology</option>
											{(sectionList.length > 0 ? sectionList : []).map((data, index) => {
												return (
													<option key={Math.random()} value={data.course}>{data.course}</option>
												)
											})}
										</select>

										<select name="00N6F00000XtAFf" className="username" required="required">
											<option value="">Select Courses</option>
											{(courseList.length > 0 ? courseList : []).map((data, index) => {
												if (courseval && sectionList && courseval.length > 0 && sectionList.length > 0 && sectionList.find && sectionList.find(o => o.course === courseval) && data.mid == sectionList.find(o => o.course === courseval).id) {
													return (
														<option key={Math.random()} value={data.name}>{data.name}</option>
													)
												}
											})}
										</select>

										<br />
										<button className="btn-slider" name="regsubmit" onClick={(event) => { formtrainervalidate(event); }}>Register</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="courses">
				<div className="container-fluid skill-bg">
					<div className="row">
						<div className="col">
							<Title name="Nubes Elite Learning Process" />
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<div className="row">
								<Icon
									icon="fas fa-laptop"
									title="Select a Course"
									text="Master the hottest tech skills by choosing one of our courses and advance your career"
								/>
								<Icon
									icon="far fa-calendar-alt"
									title="Schedule a Session"
									text="Book a Free Session at our centre and share your learning goals with the trainer."
								/>
								<Icon
									icon="fas fa-chalkboard-teacher"
									title="Join the Classes"
									text="Book a Session at your most convenient timing and share your learning goals with the trainer."
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="course_mark course_free trans_200"><a href="#schedule-session">Schedule a Session</a></div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="courses">
		<div className="courses_background"></div>
		<div className="container mt-5 mb-5">
			<div className="row">
				<div className="col mt-4">
					<Title name="Salesforce Courses" />
				</div>
			</div>
			<div className="row courses_row">

				<Course 
					cols="4"
					link="" 
					name="Administrator" 
					image={Salesforce}
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla. Fusce enim nulla." 
				/>
				<Course
					cols="4" 
					link="" 
					name="Lightning" 
					image={Lightening}
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla. Fusce enim nulla." 
				/>
				<Course 
					cols="4"
					link="" 
					name="Admin + Development" 
					image={AdminDevelopment}
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.Fusce enim nulla." 
				/>
			</div>
		</div>
	</div> */}
			<div className="courses pb-5">
				<div className="courses_background"></div>
				<div className="container-fluid skill-bg pt-5">
					<div className="row pt-5">
						<div className="col">
							<Title name="Key Features" />
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8 offset-lg-2 mb-5">
							<div className="row">
								<Icon
									icon="fas fa-hourglass-half"
									title="Flexible Timings "
									text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat sem imperdiet tempus semper"
								/>
								<Icon
									icon="fas fa-laptop-code"
									title="Hands On Experience"
									text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat sem imperdiet tempus semper"
								/>
								<Icon
									icon="fas fa-user-clock"
									title="24/7 Support"
									text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat sem imperdiet tempus semper"
								/>

							</div>
						</div>

					</div>
				</div>
			</div>

			<div class="register">
				<div class="container">
					<div class="row">


						<div class="col-lg-10 offset-1">
							<div class="register_form_container  text-center">
								<div class="register_form_title">Apply For Training</div>
								<form id="register_form" name="register_form" class="register_form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
									<input type="hidden" name="oid" value="00D6F000002Y0a8" />
									<input type="hidden" name="retURL" value="http://training.sargatechnology.com/" />
									<div class="row register_row">
										<div class="col-lg-3 register_col">
											<input type="text" class="home_form_input" placeholder="Name *" required="required" maxlength="80" size="20" id="last_namea" name="last_name" />
										</div>
										<div class="col-lg-3 register_col">
											<input type="text" class="home_form_input" placeholder="Phone *" name="mobile" id="phonea" maxlength="10" />
										</div>
										<div class="col-lg-6 register_col">
											<input type="email" class="home_form_input" placeholder="Email *" required="required" name="email" id="emaila" size="20" maxlength="80" />
										</div>
										<div class="col-lg-12 register_col">
											<textarea class="home_form_input form_text" placeholder="Message *" required="required" id="Message__ca" name="description"></textarea>
										</div>
										<div class="col">
											<button type="submit" name="trainingsubmit" onClick={(event) => { formApplyValidate(event); }} class="form_button trans_200">Apply now</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="courses pb-5">
				<div className="container-fluid skill-bg mb-5">
					<div className="row mb-5">
						<div className="col mb-5">
							<Title name="Companies in which our Students were placed" />
						</div>
					</div>
					<div class="container-fluid mt-5 mb-5">
						<div id="carouselExample" class="carousel slide" data-ride="carousel" data-interval="9000">
							<div class="carousel-inner row w-100 mx-auto" role="listbox">
								<div class="carousel-item col-md-2 active">
									<img class="img-fluid mx-auto d-block" src={Accenture} />
								</div>
								<div class="carousel-item col-md-2">
									<img class="img-fluid mx-auto d-block" src={TATA} alt="slide 2" />
								</div>
								<div class="carousel-item col-md-2">
									<img class="img-fluid mx-auto d-block" src={PWC} alt="slide 2" />
								</div>
								<div class="carousel-item col-md-2">
									<img class="img-fluid mx-auto d-block" src={Ntt} alt="slide 2" />
								</div>
								<div class="carousel-item col-md-2">
									<img class="img-fluid mx-auto d-block" src={HCL} alt="slide 2" />
								</div>
								<div class="carousel-item col-md-2">
									<img class="img-fluid mx-auto d-block" src={Mind} alt="slide 2" />
								</div>
								<div class="carousel-item col-md-2">
									<img class="img-fluid mx-auto d-block" src={Aruba} alt="slide 2" />
								</div>
								<div class="carousel-item col-md-2">
									<img class="img-fluid mx-auto d-block" src={CTS} alt="slide 2" />
								</div>
								<div class="carousel-item col-md-2">
									<img class="img-fluid mx-auto d-block" src={DELL} alt="slide 2" />
								</div>
								<div class="carousel-item col-md-2">
									<img class="img-fluid mx-auto d-block" src={Deloitte} alt="slide 2" />
								</div>

							</div>
							{/* <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
								<i class="fa fa-chevron-left fa-lg text-muted  pr-5"></i>
								<span class="sr-only">Previous</span>
							</a> */}
							<a class="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
								<i class="fa fa-chevron-right fa-lg text-muted pl-5"></i>
								<span class="sr-only">Next</span>
							</a>
						</div>
					</div>
				</div>
			</div>


			{/* testimonial */}

			<div id="testimonials" className="pt-5">
				<div className="row mb-2">
					<div className="col   text-center">
						<div class="register_form_title">Student Testimonials</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div>
								<Slider
									className="testimonials-list"
									{...{
										// dots: true,
										infinite: true,
										speed: 500,
										slidesToShow: 1,
										slidesToScroll: 1
									}}>
									{(testimonialList.length > 0 ? testimonialList : []).map((data, index) => {
										return (
											<div class="single-testimonial">
												<div class="testimonial-holder">
													<div class="testimonial-content">
														<i class="fa fa-quote-left pr-5 "></i>
														{data.content}
														<i class="fa fa-quote-right ml-auto pl-5"></i>
														{/* <div class="testimonial-caret"><i class="fa fa-caret-down"></i></div> */}
													</div>
													<div class="row">
														<div class="testimonial-user col-lg-12 clearfix">

															<div class="testimonial-user-name"> -- {data.name}</div>
														</div>
													</div>
												</div>
											</div>
										)
									})}

								</Slider>

								{/* <div class="single-testimonial">
									<div class="testimonial-holder">
										<div class="testimonial-content"><i class="fa fa-quote-left pr-5 "></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi consequatur cupiditate delectus dicta dolore dolorem ex harum ipsum laborum nobis nulla odit officia. Adipisci animi consequatur cupiditate delectus dicta dolore dolorem ex harum ipsum laborum nobis nulla odit official <i class="fa fa-quote-right ml-auto pl-5"></i>
											<div class="testimonial-caret"><i class="fa fa-caret-down"></i></div>
										</div>
										<div class="row">
											<div class="testimonial-user col-lg-12 clearfix">
												<div class="testimonial-user-image"><img src="http://devkrishna.com/wp-content/uploads/2016/04/user-mini.png" alt=""/></div>
												<div class="testimonial-user-name"> --Tom Hiddleston </div>
											</div>
										</div>
									</div>
								</div> */}

							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="language">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="language_slider_container">
						
						

						<div className="owl-carousel owl-theme language_slider">

							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={Ukr} /></div>
									<div className="lang_name">Ukrainian</div>
								</a>
							</div>

							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={J} /></div>
									<div className="lang_name">Japanese</div>
								</a>
							</div>
							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={Ukr} /></div>
									<div className="lang_name">Ukrainian</div>
								</a>
							</div>

							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={J} /></div>
									<div className="lang_name">Japanese</div>
								</a>
							</div>
							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={Ukr} /></div>
									<div className="lang_name">Ukrainian</div>
								</a>
							</div>

							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={J} /></div>
									<div className="lang_name">Japanese</div>
								</a>
							</div>
							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={Ukr} /></div>
									<div className="lang_name">Ukrainian</div>
								</a>
							</div>

							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={J} /></div>
									<div className="lang_name">Japanese</div>
								</a>
							</div>
							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={Ukr} /></div>
									<div className="lang_name">Ukrainian</div>
								</a>
							</div>

							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={J} /></div>
									<div className="lang_name">Japanese</div>
								</a>
							</div>
							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={Ukr} /></div>
									<div className="lang_name">Ukrainian</div>
								</a>
							</div>

							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={J} /></div>
									<div className="lang_name">Japanese</div>
								</a>
							</div>
							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={Ukr} /></div>
									<div className="lang_name">Ukrainian</div>
								</a>
							</div>

							
							<div className="owl-item language_item">
								<a href="#">
									<div className="flag"><img src={J} /></div>
									<div className="lang_name">Japanese</div>
								</a>
							</div>


						</div>

						<div className="lang_nav lang_prev"><i className="fa fa-angle-left" aria-hidden="true"></i></div>
						<div className="lang_nav lang_next"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
					</div>
				</div>
			</div>
		</div>
	</div>  */}

			{/* <div className="register">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="register_timer_container">
						<div className="register_timer_title">We Are Available 24/7</div>
						<div className="timer_container">
							<ul className="timer_list">
								<li><div id="hour" className="timer_num"><i className="fa fa-phone-alt" aria-hidden="true"></i></div><div className="timer_ss">9462280992</div></li>
								<li><div id="hour" className="timer_num"><i className="fab fa-whatsapp" aria-hidden="true"></i></div><div className="timer_ss">9462280992</div></li>
								<li><div id="hour" className="timer_num"><i className="far fa-envelope" aria-hidden="true"></i></div><div className="timer_ss">info@srinusfdc.com</div></li>

							</ul>
						</div>
						<div className="register_timer_sub_title">We are glad to book a session for you</div>
						
					</div>
				</div>
			</div>
		</div>
	</div> */}
			<div id="schedule-session" class="overlayp">
				<div class="popup text-center" style={{ overflowY: 'scroll' }}>
					<h3 className="pb-5 pt-5">Join Us For A Free Session</h3>
					<a class="close" href="#">&times;</a>
					<div class="content">
						<form name="session" id="session" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

							<input type="hidden" name="oid" value="00D6F000002Y0a8" />
							<input type="hidden" name="retURL" value="http://training.sargatechnology.com/" />
							<p class="pb-4">We'll walkthrough the training program and answer any questions you have about the course.</p>
							<div class="field-group">
								<input type="text" name="last_name" placeholder="Full Name *" class="form_input_popup" id="last_names" />
							</div>
							<div class="field-group">
								<input type="email" name="email" placeholder="Email Address *" class="form_input_popup" id="emails" />
							</div>
							<div class="clear">
								<button className="btn-slider" name="bsubmit" onClick={(event) => { formsessionvalidate(event); }}>Submit</button>
							</div>
						</form>


					</div>
				</div>
			</div>

		</div>
	);
}
export default Home;
