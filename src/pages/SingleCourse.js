import React, { useState, useEffect } from 'react';

import '../App.css';
import '../styles/course.css';
import '../styles/course_responsive.css';
import TextField2 from '../components/TextField2';
import Syllabus from '../components/Syllabus';
import { validString, validNumber, validEmail, validAlpha } from '../common/validation/Regex';
import $ from 'jquery';
import sendform from '../actions/sendform';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// API CALL
import CoursesApi from '../api/CourseApi';

function SingleCourse(props) {

  const [csid, setCid] = useState();
  const [cname, setCname] = useState();
  const [course, setCourse] = useState({});
  const [lectureList, setLectureList] = useState({});
  const [batchList, setBatchList] = useState({});
  const [faqList, setFaqList] = useState({});

  const [last_name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [last_name2, setName2] = useState();
  const [email2, setEmail2] = useState();
  const [phone2, setPhone2] = useState();
  const [course2, setCourse2] = useState();

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

  const [courseval, setcourseVal] = useState({});
  function courseChange(e) {
    setcourseVal(e.target.value);
  }

  useEffect(() => {
    handleSectionList();
    handleCourseList();
  }, []);

  useEffect(() => {
    let courseid = localStorage['singleCourseId'];
    if (!courseid) courseid = 1;

    console.log('courseid---', courseid);
    setCid(courseid);
    // localStorage.setItem('singleCourseId','');
    let coursen = 'Course';
    if (localStorage['singleCourseName']) coursen = localStorage.getItem('singleCourseName');
    setCname(coursen);

    $('.tab').on('click', function (e) {
      $('.tab').removeClass('active');
      $('.tab').attr('aria-selected', 'false')
      $('.tab-pane').removeClass('active');
      $(this).addClass('active');
      $("#" + $(this).attr('aria-controls')).addClass('active');
      $(this).attr('aria-selected', 'true')
      // e.preventDefault()
    });

    // localStorage.setItem('singleCourseName','');
    const fetchData = async () => {
      try {
        const response = await CoursesApi.getCourse({
          id: courseid
        });
        setCourse(response.course[0]);
        const responseB = await CoursesApi.getCourseBatches({
          cid: courseid
        });
        setBatchList(responseB.batches);

        const responseLect = await CoursesApi.getLectures({
          id: courseid
        });
        setLectureList(responseLect.lectures);

        const responseFaq = await CoursesApi.getCourseFaq({
          id: courseid
        });
        console.log('responseFaqfaqs----', responseFaq.faqs)
        setFaqList(responseFaq.faqs);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);


  function formDemoValidate(event) {
    event.preventDefault();
    var flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag5 = 0, flag6 = 0;
    var sn = document.getElementById('last_namedemo');
    sn = sn.value;
    if (!validString.test(sn)) {
      document.getElementById("last_namedemo").style.border = "2px solid #ff000069";
      flag1 = 1;
    }
    else {
      document.getElementById("last_namedemo").style.border = "2px solid #ff000000";
      document.getElementById("last_namedemo").style.borderBottom = "1px solid #b2b2b2";
      flag1 = 0;
    }
    var se = document.getElementById('emaildemo');
    se = se.value;
    if (!validEmail.test(se)) {
      document.getElementById("emaildemo").style.border = "2px solid #ff000069";
      flag2 = 1;
    }
    else {
      document.getElementById("emaildemo").style.border = "2px solid #ff000000";
      document.getElementById("emaildemo").style.borderBottom = "1px solid #b2b2b2";
      flag2 = 0;
    }
    var sphone = document.getElementById('phonedemo');
    sphone = sphone.value;
    if ((!validNumber.test(sphone)) || ((sphone).length < 10) || (sphone === "")) {
      document.getElementById("phonedemo").style.border = "2px solid #ff000069";
      flag4 = 1;
    }
    else {
      document.getElementById("phonedemo").style.border = "2px solid #ff000000";
      document.getElementById("phonedemo").style.borderBottom = "1px solid #b2b2b2";
      flag4 = 0;
    }
    var scourse = document.getElementById('00N6F00000T0Jyedemo');
    scourse = scourse.value;
    if (scourse === "") {
      document.getElementById("00N6F00000T0Jyedemo").style.border = "2px solid #ff000069";
      flag6 = 1;
    }
    else {
      document.getElementById("00N6F00000T0Jyedemo").style.border = "2px solid #ff000000";
      document.getElementById("00N6F00000T0Jyedemo").style.borderBottom = "1px solid #b2b2b2";
      flag6 = 0;
    }
    if (flag1 === 0 && flag2 === 0 && flag3 === 0 && flag4 === 0 && flag5 === 0 && flag6 === 0) {
      // document.getElementById("embedded-subscribe-form").submit();
      let form = document.getElementById("embedded-subscribe-form");
      if (!form) return;
      sendform(form);
      toast.success("Form Saved !");
      form.reset();
    }
  }


  function formInfoValidate(event) {
    event.preventDefault();
    var flag1 = 0, flag2 = 0, flag4 = 0;
    var sn = document.getElementById('last_nameinfo');
    sn = sn.value;
    if (!validString.test(sn)) {
      document.getElementById("last_nameinfo").style.border = "2px solid #ff000069";
      flag1 = 1;
    }
    else {
      document.getElementById("last_nameinfo").style.border = "2px solid #ff000000";

      document.getElementById("last_nameinfo").style.borderBottom = "1px solid #b2b2b2";
      flag1 = 0;
    }
    var se = document.getElementById('emailinfo');
    se = se.value;
    if (!validEmail.test(se)) {
      document.getElementById("emailinfo").style.border = "2px solid #ff000069";
      flag2 = 1;
    }
    else {
      document.getElementById("emailinfo").style.border = "2px solid #ff000000";
      document.getElementById("emailinfo").style.borderBottom = "1px solid #b2b2b2";
      flag2 = 0;
    }
    var sphone = document.getElementById('phoneinfo');
    sphone = sphone.value;
    if ((!validNumber.test(sphone)) || ((sphone).length < 10) || (sphone === "")) {
      document.getElementById("phoneinfo").style.border = "2px solid #ff000069";
      flag4 = 1;
    }
    else {
      document.getElementById("phoneinfo").style.border = "2px solid #ff000000";
      document.getElementById("phoneinfo").style.borderBottom = "1px solid #b2b2b2";
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

  function handleName2(event) {
    if (validString.test(event.target.value)) {
      setName2(event.target.value);
    }
  }
  function handleEmail2(event) {
    if (validEmail.test(event.target.value)) {
      setEmail2(event.target.value);
    }
  }
  function handlePhone2(event) {
    if (validNumber.test(event.target.value) && ((event.target.value).length <= 10)) {
      setPhone2(event.target.value);
    }
  }
  function handleCourse(event) {
    if (validNumber.test(event.target.value) && ((event.target.value).length <= 10)) {
      setCourse2(event.target.value);
    }
  }
  return (
    <>
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
        <div class="course-home">
          <div class="breadcrumbs_container">
            {/* <div class="container">
            <div class="row">
              <div class="col">
                <ul class="breadcrumbs_list d-flex flex-row align-items-center justify-content-start">
                  <li><a href="/">home</a></li>
                  <li><a href="/courses">courses</a></li>
                  <li>Administrator</li>
                </ul>
              </div>
            </div>
          </div> */}
          </div>
        </div>
        <div class="language course-bg">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="language_title text-center">{cname}</div>
                <div class="language_breadcrumb text-center">
                  <ul class="breadcrumbs_list  text-center align-items-center justify-content-start">
                    <li><a href="/">home</a></li>
                    <li><a href="/courses">courses</a></li>
                    <li>{cname}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="intro"> */}
        {/* <div class="intro_background parallax-window" data-parallax="scroll" data-image-src={Courseimgs} data-speed="0.8"></div> */}
        {/* <div class="container">
          <div class="row">
            <div class="col">
              <div class="intro_container d-flex flex-column align-items-start justify-content-end">
                <div class="intro_content">
                   <div class="intro_price">Free</div> 
                  <div class="rating_r rating_r_4 intro_rating"><i></i><i></i><i></i><i></i><i></i></div>
                  <div class="intro_title">Administrator</div>
                  <div class="intro_meta">
                    <div class="intro_image"><img src="images/intro_user.jpg" alt=""/></div>
                    <div class="intro_instructors"><a href="instructors.html">Sarah Parker</a> and <span><a href="instructors.html">5 other instructors</a></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>		 */}
        {/* </div> */}
        <div class="course">
          <div class="course_top"></div>
          <div class="container">
            <div class="row row-lg-eq-height" style={{ minHeight: '35em' }}>
              <div class="col-lg-9">
                <div class="tab_panels">
                  <div class="course_tabs_container">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="tabs d-flex flex-row align-items-center justify-content-start">
                            <ul class="nav nav-tabs noscrollbar" id="myTab" role="tablist" style={{ overflowX: 'scroll', overflowY: 'hidden', flexWrap: 'nowrap' }}>
                              <li class="nav-item"><a style={{ whiteSpace: 'nowrap' }} class="tab active" data-toggle="tab" id="syllabus-tab" href="#syllabus" role="tab" aria-controls="syllabus" aria-selected="true" >Syllabus</a></li>
                              <li class="nav-item"><a style={{ whiteSpace: 'nowrap' }} class="tab" data-toggle="tab" id="upcoming-tab" href="#upcoming" role="tab" aria-controls="upcoming" aria-selected="false" >UPCOMING BATCHES</a></li>
                              <li class="nav-item"><a style={{ whiteSpace: 'nowrap' }} class="tab" data-toggle="tab" id="about-tab" href="#about" role="tab" aria-controls="about" aria-selected="false" >About</a></li>
                              {/*<li class="nav-item"> <a style={{whiteSpace:'nowrap'}} class="tab" data-toggle="tab" id="certification-tab" href="#certification" role="tab" aria-controls="certification" aria-selected="false" >CERTIFICATION</a> </li>*/}
                              <li class="nav-item"><a style={{ whiteSpace: 'nowrap' }} class="tab" data-toggle="tab" id="faq-tab" href="#faq" role="tab" aria-controls="faq" aria-selected="false" >FAQs</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div class="tab-pane description" id="about" role="tabpanel" aria-labelledby="about-tab">
                      <div class="panel_title">About this course</div>
                      <div class="panel_text">
                        <div dangerouslySetInnerHTML={{ __html: course.about }} />
                      </div>
                    </div>
                    <div class="tab-pane curriculum active" id="syllabus" role="tabpanel" aria-labelledby="syllabus-tab">
                      <div class="panel_title">Syllabus</div>
                      <div class="panel_text">
                        {/* <p>Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis maximus. Suspendisse potenti. In rutrum justo et diam egestas luctus. Mauris eu neque eget odio suscipit eleifend. Sed imperdiet ante quis felis tempor hendrerit. Curabitur eget fermentum ipsum. Sed efficitur eget velit eu vulputate. Duis tincidunt quam in erat dignissim consequat. Praesent tempus leo eu nisl fringilla interdum. Maecenas rutrum libero eget lacus bibendum tristique. Curabitur at felis lobortis, mollis ante ut, tempus elit. Morbi justo nisi, posuere sed augue id, iaculis tincidunt mi. Pellentesque sed dolor sed dui congue tempus a et felis.</p> */}
                      </div>
                      <div id="accordionnew" class="myaccordionnew">
                        {(lectureList.length > 0 ? lectureList : []).map((data, index) => {
                          return (
                            <Syllabus
                              cid={data.id}
                              title={data.title}
                              subsection={data.description}
                            />
                          )
                        })}
                      </div>

                      {/* {(course.advantages && course.advantages.length>0) && <>
                      <div class="panel_title mt-5">Topics We </div>
                      <div dangerouslySetInnerHTML={{ __html: course.advantages }} />
                      </>} */}

                    </div>
                    <div class="tab-pane reviews" id="upcoming" role="tabpanel" aria-labelledby="upcoming-tab">
                      <div class="panel_title">Upcoming Batches</div>
                      <div class="panel_text">
                        {/* <p>Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris pri eu. At soleat maiorum platonem vix, no mei case fierent. Primis quidam ancillae te mei.</p> */}
                      </div>


                      <div class="cur_reviews">

                        {(batchList.length > 0 ? batchList : []).map((data, index) => {
                          return (

                            <div class="review">
                              <div class="review_title_container d-flex flex-row align-items-start justify-content-start">
                                <div class="review_title d-flex flex-row align-items-center justify-content-center">
                                  {/* <div class="review_author_image"><div><img src="images/review_1.jpg" alt=""/></div></div> */}
                                  <div class="review_author">
                                    <div class="review_author_name">{data.title}</div>
                                    <div class="review_author_name">{data.batch_name}</div>
                                    <div class="review_date">{data.start_date}</div>
                                    <div class="review_date">{data.time}</div>
                                    <div class="review_date">{data.fees}</div>
                                  </div>
                                </div>
                                {/* <div class="review_stars ml-auto"><div class="rating_r rating_r_4 review_rating"><i></i><i></i><i></i><i></i><i></i></div></div> */}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div class="tab-pane members" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                      <div class="panel_title">FAQs</div>
                      <div class="panel_text">
                        {/* <p>Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis maximus. Suspendisse potenti. In rutrum justo et diam egestas luctus. Mauris eu neque eget odio suscipit eleifend. Sed imperdiet ante quis felis tempor hendrerit. Curabitur eget fermentum ipsum. Sed efficitur eget velit eu vulputate. Duis tincidunt quam in erat dignissim consequat. Praesent tempus leo eu nisl fringilla interdum. Maecenas rutrum libero eget lacus bibendum tristique. Curabitur at felis lobortis, mollis ante ut, tempus elit. Morbi justo nisi, posuere sed augue id, iaculis tincidunt mi. Pellentesque sed dolor sed dui congue tempus a et felis.</p> */}
                      </div>
                      <div id="accordionnew" class="myaccordionnew">
                        {(faqList.length > 0 ? faqList : []).map((dataf, index) => {
                          return (
                            <Syllabus
                              cid={dataf.id}
                              title={dataf.question}
                              subsection={dataf.answer}
                            />
                          )
                        })}
                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <div class="col-lg-3">
                <div class="sidebar">
                  {/* <div class="sidebar_background"></div> */}
                  <div class="sidebar_top">

                    <button type="button" className="form_button trans_200 " data-toggle="modal" data-target="#myModal2" style={{ marginTop: "27px" }}>Enroll Now</button>
                    {/* <a href="#">Get a custom quote, for training your team</a> */}
                  </div>
                  <div class="sidebar_content">

                    <div class="sidebar_section apply_form ">
                      <div class="apply_title  text-center">Request For Information</div>
                      <form className="" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" id="register_form" name="register_form">

                        <input type="hidden" name="oid" value="00D6F000002Y0a8" />
                        <input type="hidden" name="retURL" value="http://training.sargatechnology.com/course" />
                        <div class="row mt-2">
                          <div className="col-lg-12">
                            <input type="text" class="form_input mt-2" placeholder="Name" id="last_nameinfo" maxlength="80" name="last_name" size="20" required="required" />
                          </div>
                          <div className="col-lg-12">
                            <input type="email" class="form_input mt-2" placeholder="Email" name="email" id="emailinfo" size="20" maxlength="80" required="required" />
                          </div>
                          <div className="col-lg-12">
                            <input type="text" class="form_input mt-2" placeholder="Phone" name="mobile" id="phoneinfo" maxlength="10" required="required" />
                          </div>
                          <div className="col-lg-12 mb-4">
                            <textarea class="form_input mt-2" placeholder="Message" required="required" name="description" id="Message__cinfo" ></textarea>
                          </div>

                          <div className="col mb-2">
                            <button type="submit" className="form_button trans_200" name="btninfosubmit" onClick={(event) => { formInfoValidate(event); }}>Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="modal right fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
          <div class="modal-dialog" role="document">
            <div class="modal-content">

              <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel2">Join us for a Free Demo</h4>
                <button type="button" class="close btnClose" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>

              <div class="modal-body text-center mt-4">
                <p>Grow your career with Salesforce CRM
          Online training provided by <br /> Nubes Elite.</p>

                <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" id="embedded-subscribe-form" name="embedded-subscribe-form" class="validate mt-4">
                  <input type="hidden" name="oid" value="00D6F000002Y0a8" />
                  
                  
                  
                  <input type="hidden" name="retURL" value="http://training.sargatechnology.com/course" />

                  <div class="field-group">
                    <input type="text" name="last_name" placeholder="Full Name *" class="form_input" id="last_namedemo" required="required" />
                  </div>
                  <div class="field-group">
                    <input type="email" name="email" placeholder="Email Address *" class="form_input" id="emaildemo" required="required" />
                  </div>
                  {/* <div class="field-group">
                    <input type="text" name="00N6F00000T0Jye" class="form_input" placeholder="Course Name *" id="00N6F00000T0Jyedemo" required="required" />
                  </div> */}

                  <div class="field-group">
                    <select id="00N6F00000T0Jyedemo" name="00N6F00000T0Jye" value={courseval} onChange={courseChange} className="form_input" required="required">
                      <option value="">--None--</option>
                      {(sectionList.length > 0 ? sectionList : []).map((data, index) => {
                        return (
                          <option key={Math.random()} value={data.course}>{data.course}</option>
                        )
                      })}
                    </select>
                  </div>

                  <div class="field-group">
                    <select name="00N6F00000XtAFf" className="form_input" required="required">
                      <option value="">--None--</option>
                      {(courseList.length > 0 ? courseList : []).map((data, index) => {
                        if (courseval && sectionList && courseval.length > 0 && sectionList.length > 0 && sectionList.find && sectionList.find(o => o.course === courseval) && data.mid == sectionList.find(o => o.course === courseval).id) {
                          return (
                            <option key={Math.random()} value={data.name}>{data.name}</option>
                          )
                        }
                      })}
                    </select>
                  </div>

                  <div class="field-group">
                    <input type="text" name="mobile" class="form_input" placeholder="Phone Number *" id="phonedemo" required="required" />
                  </div>
                  <div class="field-group">
                    <input type="text" name="description" class="form_input" placeholder="Message *" id="Message__cdemo" required="required" />
                  </div>
                  <div class="clear">
                    <button type="submit" className="form_button trans_200 mt-4" name="btndemosubmit" onClick={(event) => { formDemoValidate(event); }}>Schedule A Free Session</button>

                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
export default SingleCourse;
