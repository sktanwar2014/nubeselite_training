import React, { useState, useEffect } from 'react';
// import '../../App.css';
import { Redirect } from 'react-router-dom';

import useSignUpForm from '../../../components/CustomHooks';
// API CALL
import CoursesApi from '../../../api/CourseApi';


const RESET_VALUES = {
    cid: '',
    question: '',
    answer: '',
  };
function AddCertification() {
  
	const [courseList, setCourseList] = useState({});
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

    const addCertification = async () => {
        // console.log("inputs-------",inputs);
        const response = await CoursesApi.addCertification({
          cid: inputs.cid,
          certification: inputs.certification,
          image: inputs.image,
          status: '1'
        });
        console.log("response",response);
        setSuccess(true);
      };
    
    const { inputs=null, handleInputChange, handleRandomInput, handleNumberInput, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        addCertification,
        // validate
      );
  
  return (
    <div className="pg-width container">
        <div class="grid-form">
            <div class="grid-form1">
                {success? <p className="success">Certification added successfully</p>:''}
                <h3 id="forms-example" class="">Add Certification</h3>
                    <div class="form-group">
                        <label for="exampleInputcertification">Course</label>
                        <select name="cid" id="cid" onChange={handleInputChange}  class="form-control">
                            { (courseList.length > 0 ? courseList : []).map((data, index)=>{
                                return(
                                    <option value={data.id}>{data.name}</option>
                                    )
                                })}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputcertification">Certification</label>
                        <input type="text" name="certification" onChange={handleInputChange} class="form-control" id="certification"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAdvantages">Image</label>
                        <input type="upload" name="image" onChange={handleInputChange} class="form-control" id="image"/>
                    </div>
                 
                    <div className="col-md-12">
                        <button  onClick={handleSubmit}  class="btn btn-lg btn-primary mr-5">Submit </button>
                        <a href="/certifications" class="btn btn-lg btn-warning pull-right">Back </a>
                    </div> 
            </div>
        </div>
    </div>
  );
}
export default AddCertification;
