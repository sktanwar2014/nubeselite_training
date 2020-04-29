import React, { useState, useEffect } from 'react';
// import '../../App.css';
import { Redirect } from 'react-router-dom';

import useSignUpForm from '../../../components/CustomHooks';
// API CALL
import CoursesApi from '../../../api/CourseApi';
// import validate from '../../../common/validation/InterviewAddValidation';

const RESET_VALUES = {
  course: '',
  };
function AddMainCourse() {
  
	const [success, setSuccess] = useState();
    const addSection = async () => {
        console.log("inputs-------",inputs);
        const response = await CoursesApi.addSection({
          course: inputs.course,
          status: '1'
        });
        console.log("response",response);
        setSuccess(true);
      };
    
    const { inputs=null, handleInputChange, handleRandomInput, handleNumberInput, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        addSection,
        // validate
      );
  
  return (
    <div className="pg-width container">
        <div class="grid-form">
            <div class="grid-form1">
                {success? <p className="success">Main Course added successfully</p>:''}
                  <h3 id="forms-example" class="">Add Main Course</h3>
                  <div class="form-group">
                      <label for="exampleInputQuestion">Title</label>
                      <input type="text" name="course" onChange={handleInputChange} class="form-control" id="course"/>
                  </div>
                  <div className="col-md-12">
                      <button  onClick={handleSubmit}  class="btn btn-lg btn-primary mr-5">Submit </button>
                      <a href="/maincourse" class="btn btn-lg btn-warning pull-right">Back </a>
                  </div> 
            </div>
        </div>
    </div>
  );
}
export default AddMainCourse;
