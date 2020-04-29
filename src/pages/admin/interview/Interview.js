import React, { useState, useEffect } from 'react';
import {Redirect } from 'react-router-dom';

// API CALL
import InterviewsApi from '../../../api/Interview';
function InterviewIndex() {
    
	const [interviewList, setInterviewList] = useState({});
    const [edit, setEdit] = useState(false);
	const [success, setSuccess] = useState(false);
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
      
      
  function handleInterviewEditOpen(data){
    localStorage.setItem('interviewid',data);
    console.log("data----",data);
    setEdit(true);
  }
  const handleInterviewDeleteOpen = async (data) => {
    console.log("data----",data);
    const response = await InterviewsApi.deleteInterview({
        id: data.id,
    });
    console.log("response",response);
    setInterviewList(response.interviewList);   
    setSuccess(true);
  };

  return (
    <div className="pg-width container">{edit? (<Redirect to="/interview-edit"/>) :''}
        <div class="grid_3 grid_5">
            <h3 class="head-top">Interviews</h3>
            <div class="but_list">
                <div className="col-md-12">
                    <a href="/interview-add" class="btn  btn-lg btn-primary pull-right">Add Interview</a>
                </div>
                <div class="col-md-12 page_1 mt-4">
                    {/* <p>Add modifier classes to change the appearance of a badge.</p> */}
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Questions</th>
                                <th>Answers</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            { (interviewList.length > 0 ? interviewList : []).map((data, index)=>{
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.question}</td>
                                    <td>{data.answer}</td>
                                    <td> <a  onClick={(event) => {handleInterviewEditOpen(data.id);}} class="btn btn-lg btn-warning pull-right">Edit</a></td>
                                    <td> <a  onClick={(event) => {handleInterviewDeleteOpen(data);}} class="btn btn-lg btn-danger pull-right">Delete</a></td>
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
export default InterviewIndex;
