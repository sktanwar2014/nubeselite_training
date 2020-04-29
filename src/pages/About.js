import React, { useState, useEffect } from 'react';

// API CALL
import AboutsApi from '../api/AboutApi';
// import Srinivas from '../images/srinivas.jpg';
import '../App.css';
import '../styles/instructors.css';
import '../styles/instructors_responsive.css';
import Title from '../components/Title';
import Icon from '../components/Icon';
import Features from '../components/Features';

function About() {    
    const [aboutList, setAboutList] = useState({});

    useEffect(() => {
		const fetchData = async () => {			
		  try {
			const result = await AboutsApi.about();
			setAboutList(result.aboutList);   
		  } catch (error) {
			console.log("error");
		  }
		};
		fetchData();
      }, []);
      
  return (
    <div className="pg-width">
        <div class="course-home">
            {/* <div class="breadcrumbs_container">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <ul class="breadcrumbs_list d-flex flex-row align-items-center justify-content-start">
                                <li><a href="/">home</a></li>
                                <li>about</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
       <div class="language course-bg">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="language_title text-center">About Nubes Elite</div>
                        <div class="language_breadcrumb text-center">
                            <ul class="breadcrumbs_list  text-center align-items-center justify-content-start">
                                <li><a href="/">home</a></li>
                                <li>about</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
	    </div>

        <div class="">
		    {/* <div class="instructors_background"></div> */}
		    <div class="container">
                {/* <div class="row">
                    <div class="col">
                        <Title name="About"/>
                    </div>
                </div> */}
			    <div class="row instructors_row">
                    <div class="col-lg-12 instructor_col">
                        <div class="instructor text-center">
                          {/*  <div class="instructor_image_container">
                                <div class="instructor_image"><img src={Srinivas} alt=""/></div>
                            </div>
                            <div class="instructor_name"><a href="instructors.html">Srinivas Reddy</a></div>*/}
                             {/* <div class="instructor_title">About Us</div>  */}
                             
                                <Title name="KNOW US BETTER" />
                                <div class="instructor_text">                                
                                    { (aboutList.length > 0 ? aboutList : []).map((data, index)=>{
                                        return(<div dangerouslySetInnerHTML={{__html: data.about}} ></div>)
                                    })}
                                </div>
                            {/* <div class="instructor_social">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="courses">
            <div className="container-fluid skill-bg">
                <div className="row">
                    <div className="col">
                        <Title name="Our Features" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 mb-5">
                        <div className="row">
                            <Features 
                                title="Expert & Certified Trainers" 
                                text="Student support is one of our most valuable priority at Nubes Elite, and this is why we have equipped ourselves with experienced and understanding professors that takes pride in their work as educational providers. With expert instructors that students can easily contact and speak with for more clarifications on specific topics."
                            />
                            <Features 
                                title="Trusted Certifications" 
                                text="We implement a unique method of teaching and testing that are definitely non-traditional. Nubes Elite unique method and validation process of knowledge and skills is much more powerful than most traditional methods which earns us the needed credibility that is passed on to our certifications."
                            />
                            <Features 
                                title="Professional Courses" 
                                text="Our Digital Programs give professionals the opportunity to attend our open- sourced academic courses on the go which ultimately helps them build the skills and knowledge they need to reach their professional goals."
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="mid-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mid-section-container">
                            <div className="mid-section-title">The Best Salesforce Courses</div>
                            <div className="">
                                <p>Giving students the needed tools to work more safely, more profitably, and with less risk is paramount. Our students learn valuable skills and acquire implementable knowledge in their respective field. Nubes Elite is committed to combining cutting edge technology with specific industry knowledge leaders, to create the best possible courses and learning environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="courses pb-5">
            <div className="container-fluid skill-bg">
                <div className="row">
                    <div className="col">
                        <Title name="Why Choose Nubes Elite" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2  mb-5">
                        <div className="row">
                            <Icon 
                                icon="fas fa-crown" 
                                title="Experience" 
                                text="Master the hottest tech skills by choosing one of our courses and advance your career"
                            />
                            <Icon 
                                icon="fas fa-user-shield" 
                                title="Quality" 
                                text="Book a Free Session at our centre and share your learning goals with the trainer."
                            />
                            <Icon 
                                icon="fas fa-chalkboard-teacher" 
                                title="Professional" 
                                text="Book a Session at your most convenient timing and share your learning goals with the trainer."
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  );
}
export default About;
