import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuItem from '../components/MenuItem';

import AboutsApi from '../api/AboutApi';
import $ from 'jquery';

import Urbanb from '../images/urbanprob.png';

const LinkWrap = styled(Link)`
  text-decoration: none;
  display: block;
  outline: none;
  margin-bottom: 0.5rem;
`;

const Footbar = () => {
	function add_chatinline() { var hccid = 73812114; var nt = document.createElement("script"); nt.async = true; nt.src = "https://mylivechat.com/chatinline.aspx?hccid=" + hccid; var ct = document.getElementsByTagName("script")[0]; ct.parentNode.insertBefore(nt, ct); }

	const [aboutList, setAboutList] = useState({});
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await AboutsApi.about();
				if (result.aboutList && result.aboutList.length > 0) setAboutList(result.aboutList[0]);
			} catch (error) {
				console.log("error");
			}
		};
		fetchData();
	}, []);

	return (
		<div className="footer pg-width">
			<div className="footer_body">
				<div className="container">
					<div className="row">

						<div className="col-lg-5 footer_col">
							<div className="newsletter_container d-flex flex-column align-items-start justify-content-end">
								<div className="footer_logo"><a href="#">Nubes Elite</a></div>
								<div class="instructor_text">  
									<p className="footer_text">I like to maintain the blogs and share the salesforce knowledge based on my experience. I maintain a blog ‘www.nubeselitetraining.com‘ which is very famous for the salesforce interview questions. Most of the people who want to learn salesforce from the scratch like my posts. I have started teaching upon the request of my blog ‘www.nubeselitetraining.com‘ followers/viewers. With my teaching most of the people successfully got jobs and they are able to shift their technology.</p>
								</div>
								{/* <div className="footer_title">Subscribe</div>
							<form action="#" id="newsletter_form" className="newsletter_form">
								<input type="email" className="newsletter_input" placeholder="Email" required="required"/>
								<button className="newsletter_button"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
							</form> */}
							</div>
						</div>

						<div className="col-lg-2 offset-lg-1 footer_col">
							<div className="footer_title">About Us</div>
							<ul className="footer_list">
								<li><a href="/about">About</a></li>
								{/* <li><a href="/courses">Courses</a></li> */}
								<li><a href="/schedule">Schedule</a></li>
								<li><a href="/interview-questions">Interview Questions</a></li>
								<li><a href="/contact">Contact</a></li>
							</ul>
						</div>
						<div className="col-lg-2 footer_col">
							<div className="footer_title">Help & Support</div>
							<ul className="footer_list">
								<li><i className="fas fa-phone-alt"></i> {aboutList.phone_main || `080-4114 0897`}</li>
								<li><i className="fab fa-whatsapp"></i>  {aboutList.phone_second || `+91 7483096134`}</li>
								<li><i className="fa fa-envelope-o" aria-hidden="true"></i> {aboutList.email || `info@nubeselite.com`}</li>

							</ul>
						</div>

						<div className="col-lg-2 footer_col clearfix">
							<div className="footer_title">Privacy & Terms</div>
							<ul className="footer_list">
								{/* <li><a href="#">Community Guidelines</a></li> */}
								<li><a href="/terms">Terms</a></li>
								{/* <li><a href="#">Brand Guidelines</a></li> */}
								<li><a href="/privacy">Privacy</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright cr text-center">Copyright &copy; 2019 Nubes Elite. All rights reserved. </div>

			{/* <footer className="nav-down  hide">
			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="copyright_content d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start">
								
							<div className="footer_phone">
								<i className="fas fa-phone-alt" aria-hidden="true"></i>  +91 8041140897 &nbsp;&nbsp; 
								<i className="fab fa-whatsapp" aria-hidden="true"></i>&nbsp;  +91 7483096134
							</div>
							<div className="footer_phone ml-md-auto">
								<i className="fa fa-envelope-o" aria-hidden="true"></i> info@nubeselite.com</div>
								<div className="cr_right ml-md-auto">
								

									<div className="footer_social">

										<span className="cr_social_title">Follow Us</span>
										<ul>
											<li><a href="https://www.facebook.com/nubeselite"  target="_blank"  rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
											<li><a href="https://www.linkedin.com/in/nubeselite" target="_blank"  rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
											<li><a href="https://www.youtube.com/channel/UCcQM3Vyu37fe09kvcBLGLRA" target="_blank"  rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
											<li><a href="https://www.urbanpro.com/nubeselite" target="_blank"  rel="noopener noreferrer"><img src={Urbanb} width="10"/></a></li> */}
			{/* <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li> */}
			{/* <li><a href="https://twitter.com/NubesElite"  target="_blank"  rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer> */}
			{add_chatinline()}

		</div>

	);
};

function renderStatic(categories, selected, setisOpened) {
	return categories.map((category, i) => (
		<LinkWrap
			to={`${process.env.PUBLIC_URL}/discover/${category}`}
			key={i}
			onClick={setisOpened ? () => setisOpened(false) : null}
		>

			{/* <MenuItem
        mobile={setisOpened ? 1 : 0}
        title={category}
        selected={category === selected ? true : false}
      /> */}
		</LinkWrap>
	));
}

function renderGenres(genres, selected, setisOpened) {
	return genres.map(genre => (
		<LinkWrap
			to={`${process.env.PUBLIC_URL}/genres/${genre.name}`}
			key={genre.id}
			onClick={setisOpened ? () => setisOpened(false) : null}
		>
			<MenuItem
				mobile={setisOpened ? 1 : 0}
				title={genre.name}
				selected={genre.name === selected ? true : false}
			/>
		</LinkWrap>
	));
}

const mapStateToProps = ({ geral }) => {
	return {
		staticCategories: ["Popular", "Top Rated", "Upcoming"],
		genres: [{ id: 21, name: "Adventure" }, { id: 22, name: "Action" }],
		selected: '',
	};
};

export default connect(mapStateToProps)(Footbar);

