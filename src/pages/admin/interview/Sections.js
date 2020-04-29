import React, { useState, useEffect } from 'react';

import {Redirect } from 'react-router-dom';
// API CALL
import InterviewsApi from '../../../api/Interview';
function Sections() {
    
    const [sectionList, setSectionList] = useState({});
    const [edit, setEdit] = useState(false);
	const [success, setSuccess] = useState(false);

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
      
      
  function handleSectionEditOpen(data){
    localStorage.setItem('sectionid',data);
    setEdit(true);
  }
  const handleSectionDelete = async (data) => {
    console.log("data----",data);
    const response = await InterviewsApi.deleteSection({
        id: data.id,
    });
    console.log("response",response);
    setSectionList(response.sectionList);   
    setSuccess(true);
  };

  return (
    <div className="pg-width container">{edit? (<Redirect to="/interview-section-edit"/>) :''}
        <div class="grid_3 grid_5">
            <h3 class="head-top">Interview Sections</h3>
            <div class="but_list">
                <div className="col-md-12">
                    <a href="/interview-section-add" class="btn  btn-lg btn-primary pull-right">Add Interview Question Sections</a>
                </div>                {success? <p className="success mt-5">Interview  Section deleted successfully</p>:''}

                <div class="col-md-12 page_1 mt-4">
                    {/* <p>Add modifier classes to change the appearance of a badge.</p> */}
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Title</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            { (sectionList.length > 0 ? sectionList : []).map((data, index)=>{
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td> <a  onClick={(event) => {handleSectionEditOpen(data.id);}} class="btn btn-lg btn-warning pull-right">Edit</a></td>
                                    <td> <a  onClick={(event) => {handleSectionDelete(data);}} class="btn btn-lg btn-danger pull-right">Delete</a></td>

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
export default Sections;
