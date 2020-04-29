import React, { useState, useEffect } from 'react';

import {Redirect } from 'react-router-dom';
// API CALL
import CoursesApi from '../../../api/CourseApi';
function CourseIndex() {
    
	const [courseList, setCourseList] = useState({});
	const [edit, setEdit] = useState(false);
	const [lecture, setLecture] = useState(false);
	const [success, setSuccess] = useState();
    useEffect(() => {
		const fetchData = async () => {			
		  try {
			const result = await CoursesApi.list();
			setCourseList(result.courseList);   
		  } catch (error) {
			console.log("error");
		  }
		};
		fetchData();
      }, []);
      
      
  function handleCourseEditOpen(data){
    localStorage.setItem('course',data);
    setEdit(true);
   console.log("data course",data)
  }

  function handleCourseLectureOpen(data){
    localStorage.setItem('courseid',data.id);
    localStorage.setItem('coursename',data.name);
    setLecture(true);
    console.log("data course",data)
   }
  return (
    <div className="pg-width container">{edit? <Redirect to="/course-edit"/> :''}
    {lecture? <Redirect to="/lectures"/> :''}
        <div class="grid_3 grid_5">
            <h3 class="head-top">Courses</h3>
            <div class="but_list">
                <div className="col-md-12">
                    <a href="/course-add" class="btn  btn-lg btn-primary pull-right">Add Course</a>
                </div>
                <div class="col-md-12 page_1 mt-4">
                    {/* <p>Add modifier classes to change the appearance of a badge.</p> */}
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Courses</th>
                                <th>Lecture</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            { (courseList.length > 0 ? courseList : []).map((data, index)=>{
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td> <a  onClick={(event) => {handleCourseLectureOpen(data);}} class="btn btn-lg btn-info pull-right">View Lecture</a></td>
                                    <td> <a  onClick={(event) => {handleCourseEditOpen(data.id);}} class="btn btn-lg btn-warning pull-right">Edit</a></td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>                    
                </div>

            <div class="clearfix"> </div>
        </div>
     </div>
    </div>
  );
}
export default CourseIndex;
