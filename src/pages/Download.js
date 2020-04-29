import React from 'react';
// import Srinivas from '../images/srinivas.jpg';
import '../App.css';
import '../styles/instructors.css';
import '../styles/instructors_responsive.css';
import Title from '../components/Title';
// import Icon from '../components/Icon';
import Doc from '../components/Doc';
function Download() {
  
  return (
    <div className="pg-width">
        
    <div class="course-home">
		{/* <div class="breadcrumbs_container">
			<div class="container">
				<div class="row">
					<div class="col">
						<ul class="breadcrumbs_list d-flex flex-row align-items-center justify-content-start">
							<li><a href="/">home</a></li>
							<li>Download</li>
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
					<div class="language_title text-center">Download Docs</div>
					<div class="language_breadcrumb text-center">
						<ul class="breadcrumbs_list  text-center align-items-center justify-content-start">
							<li><a href="/">home</a></li>
							<li>Download</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
        <div className="courses">
            <div className="container-fluid skill-bg">
                <div className="row">
                    <div className="col">
                        <Title name="Docs" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2  mb-5">
                        <div className="row">
                            <Doc 
                                title="	Recruitment App" 
                                text="It is a sample Application provided by salesforce. It is a Recruitment Application developed for Universal
                                Containers Company."
                                name="Download"
                                link="https://drive.google.com/drive/folders/1JIBI0lNn1b1Ql-2jR2C3tG2J15HsKOsz"
                            />
                            {/* <Doc 
                                title="Warehouse App" 
                                text="This app is intended for developers new to the Salesforce platform and for Salesforce admins who want to
                                delve more deeply into app development"
                                 name="Download"
                                link="https://resources.docs.salesforce.com/sfdc/pdf/forcecom_workbook.pdf"
                            
                            /> */}
                            <Doc 
                                title="Salesforce AppExchange" 
                                text="Install already developed apps on salesforce platform or host apps developed on
                                salesforce platform it is a market place."
                                name="Visit"
                                link="https://appexchange.salesforce.com/"                            
                            />
                            <Doc 
                                title="Salesforce Training" 
                                text="Training for many Admins / Developer / Business Users who are looking to get started fast.	"
                                name="Visit"
                                link="https://developer.salesforce.com/trailhead/en"
                            
                            />
                            <Doc 
                                title="	Admin   Interview Questions	" 
                                text="Soft copy of the Salesforce Admin Interview Questions are available in the link"
                                name="Download"
                                link="http://onlinetraining.srinusfdc.com/wp-content/uploads/2016/05/SFDC-Interview-Questions_Admin_v1.0.pdf"
                            />
                            <Doc 
                                title="	Salesforce Interview Questions" 
                                text="SFDC Interview Questions for Admin, Dev and Lightning"
                                 name="Visit"
                                link="http://www.srinusfdc.com/p/interview-questions.html"
                            
                            />
                            <Doc 
                                title="Salesforce Discussion Forum" 
                                text="Forum to solve your questions by SFDC professionals"
                                name="Visit"
                                link="https://developer.salesforce.com/forums/ForumsCategories"
                            
                            />
                            <Doc 
                                title="SFDC Account for free Sandbox" 
                                text="If you want to create a Sandbox in free edition register here"
                                name="Visit"
                                link="https://www.salesforce.com/form/signup/freetrial-platform.jsp"                            
                            />
                            <Doc 
                                title="	Salesforce Ideas" 
                                text="If you have an idea which you feel Salesforce should be implemented post here."
                                name="Visit"
                                link="https://success.salesforce.com/ideaSearch"                            
                            />
                            <Doc 
                                title="Sfdc Certifications Verification" 
                                text="Verify certifications you are holding"
                                name="Visit"
                                link="http://certification.salesforce.com/verification"                            
                            />
                            <Doc 
                                title="Salesforce Trust Websites" 
                                text="To see the Salesforce Servers performance check the given link"
                                name="Visit"
                                link="https://trust.salesforce.com/"                            
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  );
}
export default Download;
