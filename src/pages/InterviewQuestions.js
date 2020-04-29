import React, { useState, useEffect } from 'react';
import '../App.css';
import '../styles/course.css';
import '../styles/course_responsive.css';
import Syllabus from '../components/Syllabus';

// API CALL
import InterviewsApi from '../api/Interview';
function InterviewQuestions() {
  
	const [interviewList, setInterviewList] = useState({});
	const [sectionList, setSectionList] = useState({});
    useEffect(() => {
		const fetchData = async () => {			
		  try {
			const result = await InterviewsApi.sectionList();
			setSectionList(result.sectionList);   
		  } catch (error) {
			console.log("error");
		  }
		};
		fetchData();
      }, []);
    useEffect(() => {
		const fetchData = async () => {			
		  try {
			const result = await InterviewsApi.list();
			setInterviewList(result.interviewList);   
		  } catch (error) {
			console.log("error");
		  }
		};
		fetchData();
      }, []);
      
  return (
    <div className="pg-width">
	<div className="course-home">
		
	</div>
    <div className="language course-bg">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="language_title text-center">Interview Questions</div>
					<div className="language_breadcrumb text-center">
						<ul className="breadcrumbs_list  text-center align-items-center justify-content-start">
							<li><a href="/">home</a></li>
							<li>Interview Questions</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
        <div className="">
		    <div className="container">
			    <div className="row">
                    <div className="col-lg-12">
                    <div className="faqs">
                    <div className="panel_title">Interview Questions</div>
                    <div className="accordions">
{/*                             
                    <div id="accordionnew" class="myaccordionnew">
                  { (faqList.length > 0 ? faqList : []).map((dataf, index)=>{
                     return(
                      <Syllabus 
                        cid={dataf.id}
                        title={dataf.question}
                        subsection={dataf.answer}
                      />
                      )
                  })}
                  </div> */}


                      <div className="elements_accordions">
                      { (sectionList.length > 0 ? sectionList : []).map((datasect, index)=>{
                            return(
                              <div>
                                 <h4>{datasect.title}</h4>,
                                 <div id="accordionnew" class="myaccordionnew">
                                 {( interviewList.length > 0 ? interviewList : []).map((dataint, index)=>{
                                    return(
                                      
                                      dataint.sid===datasect.id?
                                      <Syllabus 
                                        cid={dataint.id}
                                        title={dataint.question}
                                        subsection={dataint.answer}
                                      />:''
                                      )
                                  })}
                                  </div>
                                {/* {( interviewList.length > 0 ? interviewList : []).map((dataint, index)=>{
                                    return(
                                      dataint.sid===datasect.id?
                                        <div className="accordion_container">
                                            <div className="accordion d-flex flex-row align-items-center">
                                                <div>{dataint.question}</div>
                                            </div>
                                            <div className="accordion_panel" style={{maxHeight: '0px'}}>
                                                <p>{dataint.answer}</p>
                                            </div>
                                        </div>:''
                                  )
                              }) } */}
                              </div>
                          )})}

                        {/* { (interviewList.length > 0 ? interviewList : []).map((data, index)=>{
                            return(
                                <div className="accordion_container">
                                    <div className="accordion d-flex flex-row align-items-center">
                                        <div>{data.question}</div>
                                    </div>
                                    <div className="accordion_panel">
                                        <p>{data.answer}</p>
                                    </div>
                                </div>
                                )
                            })} */}
                        

                       {/* <div className="accordion_container">
                            <div className="accordion d-flex flex-row align-items-center">
                                <div>What is the refund policy?</div>
                            </div>
                            <div className="accordion_panel">
                                <p>Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis maximus.</p>
                            </div>
                        </div> */}

                        {/*  <div className="accordion_container">
                          <div className="accordion d-flex flex-row align-items-center"><div>What background knowledge is necessary</div></div>
                          <div className="accordion_panel">
                            <p>Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis maximus.</p>
                          </div>
                        </div>

                        <div className="accordion_container">
                          <div className="accordion d-flex flex-row align-items-center"><div>Do i need to take the courses in a specific ord</div></div>
                          <div className="accordion_panel">
                            <p>Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis maximus.</p>
                          </div>
                        </div> */}

                      </div>

                    </div>
                  </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default InterviewQuestions;
