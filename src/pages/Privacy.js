import React from 'react';
import '../App.css';
import '../styles/instructors.css';
import '../styles/instructors_responsive.css';
function Privacy() {
  
  return (
    <div className="pg-width">
        
	<div class="course-home">
		{/* <div class="breadcrumbs_container">
			<div class="container">
				<div class="row">
					<div class="col">
						<ul class="breadcrumbs_list d-flex flex-row align-items-center justify-content-start">
							<li><a href="/">home</a></li>
							<li>Privacy</li>
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
					<div class="language_title text-center">Privacy Policy</div>
					<div class="language_breadcrumb text-center">
						<ul class="breadcrumbs_list  text-center align-items-center justify-content-start">
							<li><a href="/">home</a></li>
							<li>Privacy Policy</li>
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
                        <Title name="Terms and Conditions"/>
                    </div>
                </div> */}
			    <div class="row">
                    <div class="col-lg-12 instructor_col">
                        <div class="instructor">
                          {/*  <div class="instructor_image_container">
                                <div class="instructor_image"><img src={Srinivas} alt=""/></div>
                            </div>
                            <div class="instructor_name"><a href="instructors.html">Srinivas Reddy</a></div>
                             <div class="instructor_title">Teacher</div> */}
                            <div class="instructor_text">
                                <p></p><p>Personal information collected by Nubeseliteis protected by the Privacy Act and the Information Privacy Act . Personal information is any information that can be used to identify you and includes sensitive information.</p>
                                <p>Nubeselitehas developed a Privacy Policy and procedures to protect your privacy.</p>
                                <p>The primary purpose for collecting personal information from you is to provide services, including planning, monitoring and evaluating our services. The kind of information we collect will depend on your relationship with Nubeselite .</p>
                                <p>Your personal information may be used to:</p>
                                <ol>
                                <li>Provide you with services</li>
                                <li>Provide you with educational information and awareness</li>
                                <li>Respond to your feedback and complaints</li>
                                <li>Answer your queries</li>
                                </ol>
                                <p>It may also be used for:</p>
                                <ol>
                                <li>Any other purpose for which it was requested and which was advised to you</li>
                                <li>Directly related purposes</li>
                                </ol>
                                <p>Please be assured that wherever possible Nubeselite will not disclose personal information to third parties without your permission, except where permitted or required under the law.</p>
                                <p>We take steps to protect all personal and sensitive information held by Nubeselite against misuse, interference, loss, authorised access, modification and disclosure.</p>
                                <p>You can access the personal information that we hold about you and can ask us to correct the personal information we hold about you.</p><p></p>
                                            
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
    </div>
  );
}
export default Privacy;
