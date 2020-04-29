import React, { useState, useEffect } from 'react';

import {Redirect } from 'react-router-dom';
// API CALL
import CoursesApi from '../../../api/CourseApi';
function FAQ() {
    
	const [success, setSuccess] = useState();
	const [faqList, setFaqList] = useState({});
	const [edit, setEdit] = useState(false);
    useEffect(() => {
		const fetchData = async () => {			
		  try {
			const result = await CoursesApi.faqs();
			setFaqList(result.faqList);   
		  } catch (error) {
			console.log("error");
		  }
		};
		fetchData();
      }, []);
      
      
  function handleFaqEditOpen(data){
    localStorage.setItem('faqid',data);
    setEdit(true);
   console.log("data course",data)
  }

  const handleCourseDelete = async (data) => {
    const response = await CoursesApi.deleteFaq({
        id: data.id,
    });
    console.log("response",response);
    setFaqList(response.faqList);
    setSuccess(true);
  };
  return (
    <div className="pg-width container">
        {edit? (<Redirect to="/faq-edit"/>) :''}
        <div class="grid_3 grid_5">
            <h3 class="head-top">Faqs</h3>
            <div class="but_list">
                <div className="col-md-12">
                    <a href="/faq-add" class="btn  btn-lg btn-primary pull-right">Add Faq</a>
                </div>
                <div class="col-md-12 page_1 mt-4">
                    {/* <p>Add modifier classes to change the appearance of a badge.</p> */}
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Question</th>
                                <th>Answer</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            { (faqList.length > 0 ? faqList : []).map((data, index)=>{
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.question}</td>
                                    <td>{data.answer}</td>
                                    <td> <a  onClick={(event) => {handleFaqEditOpen(data.id);}} class="btn btn-lg btn-warning pull-right">Edit</a></td>
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
export default FAQ;
