import React, { useState, useEffect } from 'react';

// API CALL
import CoursesApi from '../../api/CourseApi';
import TestimonialsApi from '../../api/Testimonial';
// import '../../App.css';
function Dashboard() {
	const [sectionLength, setSectionLength] = useState();
	const [testimonialLength, setTestimonialLength] = useState();
	const [courseLength, setCourseLength] = useState();
  useEffect(() => {
  const fetchData = async () => {			
    try {
    const result = await CoursesApi.sectionList();
    setSectionLength(result.sectionList.length) ;
    const resultTestimonial = await TestimonialsApi.list();
    setTestimonialLength(resultTestimonial.testimonialList.length);
    const resultCourse = await CoursesApi.list();
    setCourseLength(resultCourse.courseList.length);
    } catch (error) {
    console.log("error");
    }
  };
  fetchData();
    }, []);

  return (
    <div className="pg-width container">
      <div class="content-top row">
			  <div class="col-md-4 ">
				  <div class="content-top-1">
            <div class="col-md-6 top-content">
              <h5>Main Courses</h5>
              <label>{sectionLength}</label>
            </div>
            <div class="col-md-6 top-content1">	   
              <div id="demo-pie-1" class="pie-title-center" data-percent="25"> <span class="pie-value"></span> </div>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
			  <div class="col-md-4 ">
				  <div class="content-top-1">
            <div class="col-md-6 top-content">
              <h5>Courses</h5>
              <label>{courseLength}</label>
            </div>
            <div class="col-md-6 top-content1">	   
              <div id="demo-pie-1" class="pie-title-center" data-percent="25"> <span class="pie-value"></span> </div>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
			  <div class="col-md-4 ">
          <div class="content-top-1">
            <div class="col-md-6 top-content">
              <h5>Testimonials</h5>
              <label>{testimonialLength}</label>
            </div>
            <div class="col-md-6 top-content1">	   
              <div id="demo-pie-2" class="pie-title-center" data-percent="50"> <span class="pie-value"></span> </div>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
			  {/* <div class="col-md-4 ">
				  <div class="content-top-1">
            <div class="col-md-6 top-content">
              <h5>Cards</h5>
              <label>3401</label>
            </div>
            <div class="col-md-6 top-content1">	   
              <div id="demo-pie-3" class="pie-title-center" data-percent="75"> <span class="pie-value"></span> </div>
            </div>
				    <div class="clearfix"> </div>
				  </div>
			  </div> */}
      </div>
    </div>
  );
}
export default Dashboard;
