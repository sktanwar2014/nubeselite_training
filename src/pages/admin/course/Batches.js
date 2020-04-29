import React, { useState, useEffect } from 'react';

import {Redirect } from 'react-router-dom';
// API CALL
import CoursesApi from '../../../api/CourseApi';
function Batches() {
    
	const [success, setSuccess] = useState();
	const [batchList, setBatchList] = useState({});
	const [edit, setEdit] = useState(false);
    useEffect(() => {
		const fetchData = async () => {			
		  try {
			const result = await CoursesApi.batches();
			setBatchList(result.batchList);   
		  } catch (error) {
			console.log("error");
		  }
		};
		fetchData();
      }, []);
      
      
  function handleBatchEditOpen(data){
    localStorage.setItem('batchid',data);
    setEdit(true);
   console.log("data course",data)
  } 
//   function handleCourseDelete(data){
//     const response = await CoursesApi.deleteBatch({
//         id: data.id,
//       });
//       console.log("response",response);
//       setBatchList(response.batchList);   
//       setSuccess(true);
//   }
     
  const handleBatchDelete = async (data) => {
    const response = await CoursesApi.deleteBatch({
        id: data.id,
    });
    console.log("response",response);
    setBatchList(response.batchList);
    setSuccess(true);
  };


  return (
    <div className="pg-width container">{edit? (<Redirect to="/batch-edit"/>) :''}
        <div class="grid_3 grid_5">
            <h3 class="head-top">Batches</h3>
            <div class="but_list">
                <div className="col-md-12">
                    <a href="/batch-add" class="btn  btn-lg btn-primary pull-right">Add Batch</a>
                </div>
                {success? <p className="success mt-5">Batch deleted successfully</p>:''}
                <div class="col-md-12 page_1 mt-4">
                    {/* <p>Add modifier classes to change the appearance of a badge.</p> */}
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Title</th>
                                <th>Batch Name</th>
                                <th>Start Date</th>
                                <th>Time</th>
                                <th>Days</th>
                                <th>Duration</th>
                                <th>Fees</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            { (batchList.length > 0 ? batchList : []).map((data, index)=>{
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.batch_name}</td>
                                    <td>{data.start_date}</td>
                                    <td>{data.time}</td>
                                    <td>{data.days}</td>
                                    <td>{data.duration}</td>
                                    <td>{data.fees}</td>
                                    <td> <a  onClick={(event) => {handleBatchEditOpen(data.id);}} class="btn btn-lg btn-warning pull-right">Edit</a></td>
                                    <td> <a  onClick={(event) => {handleBatchDelete(data);}} class="btn btn-lg btn-danger pull-right">Delete</a></td>
                                
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
export default Batches;
