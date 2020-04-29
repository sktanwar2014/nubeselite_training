import React, { useState, useEffect } from 'react';
import Salesforce from '../images/salesforce-admin.jpg';
import Lightening from '../images/lightening.jpg';
import Development from '../images/development.png';
import AdminDevelopment from '../images/salesforce-admin-and-development.jpg';
import '../App.css';
import '../styles/courses.css';
import '../styles/courses_responsive.css';
import Course from '../components/Course';

// API CALL
import CoursesApi from '../api/CourseApi';
function Courses() {
  
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [courseList, setCourseList] = useState({});
	useEffect(() => {
		const fetchData = async () => {
			
		  console.log('hi--');
		  try {
			const result = await CoursesApi.list();
			setCourseList(result.courseList);
			console.log('list',result.courseList);
		  } catch (error) {
			setIsError(true);
		  }
		  setIsLoading(false);
		};
		fetchData();
	  }, []);
  return (
    <div className="pg-width">
        
		<div className="course-home">
			{/* <div className="breadcrumbs_container">
				<div className="container">
					<div className="row">
						<div className="col">
							<ul className="breadcrumbs_list d-flex flex-row align-items-center justify-content-start">
								<li><a href="/">home</a></li>
								<li>courses</li>
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
						<div className="language_title text-center">Salesforce Courses</div>
						<div className="language_breadcrumb text-center">
							<ul className="breadcrumbs_list  text-center align-items-center justify-content-start">
								<li><a href="/">home</a></li>
								<li>courses</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="courses">
			<div className="container">
				<div className="row courses_row">
					<div className="col-md-3 course-left mb-5">
						<h3 className="section_title mb-3">Courses</h3>
						<p className="mt-5"><a href="/course"><i className="fas fa-caret-right  mr-2 ml-4"></i>Administrator</a></p>
						<p><a href="/course"><i className="fas fa-caret-right mr-2 ml-4"></i>Development</a></p>
						<p><a href="/course"><i className="fas fa-caret-right mr-2 ml-4"></i>Admin + Development</a></p>
						<p><a href="/course"><i className="fas fa-caret-right mr-2 ml-4"></i>Lightning</a></p>
					</div>
					<div className="col-md-8 offset-1 row">
						<Course	
							cols="6"
							link="/course" 
							name="Administrator" 
							image={Salesforce}
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla. Fusce enim nulla." 
						/>
						<Course 
							cols="6"
							link="/course" 
							name="Development" 
							image={Development}
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla. Fusce enim nulla." 
						/>
						<Course
							cols="6" 
							link="/course" 
							name="Admin + Development" 
							image={AdminDevelopment}
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla. Fusce enim nulla." 
						/>
						<Course 
							cols="6"
							link="/course" 
							name="Lightning" 
							image={Lightening}
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla. Fusce enim nulla." 
						/>
					</div>
				</div>
			</div>
		</div>

    </div>
  );
}
export default Courses;
