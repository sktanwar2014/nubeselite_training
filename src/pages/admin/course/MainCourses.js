import React, { useState, useEffect } from 'react';

import {Redirect } from 'react-router-dom';
// API CALL
import CoursesApi from '../../../api/CourseApi';
function MainCourses() {
    
    
	const [success, setSuccess] = useState();
	const [edit, setEdit] = useState(false);
	const [sectionList, setSectionList] = useState({});
    useEffect(() => {
		const fetchData = async () => {			
		  try {
			const result = await CoursesApi.sectionList();
			setSectionList(result.sectionList);   
		  } catch (error) {
			console.log("error");
		  }
		};
		fetchData();
      }, []);

  function handleMainCourseEditOpen(data){
    localStorage.setItem('mcourse',data);
    setEdit(true);
   console.log("data interview",data)
  }
    
  const handleCourseDelete = async (data) => {
    const response = await CoursesApi.deleteMainCourse({
        id: data.id,
    });
    console.log("response",response);
    setSectionList(response.sectionList);
    setSuccess(true);
  };

  return (
    <div className="pg-width container">{edit? (<Redirect to="/maincourse-edit"/>) :''}
        <div class="grid_3 grid_5">
            <h3 class="head-top">Main Course Sections</h3>
            <div class="but_list">
                <div className="col-md-12">
                    <a href="/main-course-add" class="btn  btn-lg btn-primary pull-right">Add Main Course Sections</a>
                </div>
                {success? <p className="success mt-5">Main Course deleted successfully</p>:''}
                <div class="col-md-12 page_1 mt-4">
                    {/* <p>Add modifier classes to change the appearance of a badge.</p> */}
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Course</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            { (sectionList.length > 0 ? sectionList : []).map((data, index)=>{
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.course}</td>
                                    <td> <a  onClick={(event) => {handleMainCourseEditOpen(data.id);}} class="btn btn-lg btn-warning pull-right">Edit</a></td>
                                    <td> <a  onClick={(event) => {handleCourseDelete(data);}} class="btn btn-lg btn-danger pull-right">Delete</a></td>
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
export default MainCourses;
