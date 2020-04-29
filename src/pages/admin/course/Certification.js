import React, { useState, useEffect } from 'react';

// API CALL
import CoursesApi from '../../../api/CourseApi';
function Certification() {
    
	const [certificationList, setCertificationList] = useState({});
    useEffect(() => {
		const fetchData = async () => {			
		  try {
			const result = await CoursesApi.certifications();
			setCertificationList(result.certificationList);   
		  } catch (error) {
			console.log("error");
		  }
		};
		fetchData();
      }, []);
      
      
  function handleCourseEditOpen(data){
   console.log("data course",data)
  }

  return (
    <div className="pg-width container">
        <div class="grid_3 grid_5">
            <h3 class="head-top">Certifications</h3>
            <div class="but_list">
                <div className="col-md-12">
                    <a href="/certification-add" class="btn  btn-lg text-color btn-primary pull-right">Add Certification</a>
                </div>
                <div class="col-md-12 page_1 mt-4">
                    {/* <p>Add modifier classes to change the appearance of a badge.</p> */}
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Certification</th>
                                <th>Image</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            { (certificationList.length > 0 ? certificationList : []).map((data, index)=>{
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.certification}</td>
                                    <td>{data.image}</td>
                                    <td> <a  onClick={(event) => {handleCourseEditOpen(data);}} class="btn btn-lg btn-warning pull-right">Edit</a></td>
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
export default Certification;
