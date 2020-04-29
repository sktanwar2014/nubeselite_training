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
function EditMainCourse(params) {
    
	const [success, setSuccess] = useState(false);
	const [mccourse, setCourse] = useState();
	const [mid, setMid] = useState();
    useEffect(() => {
        const mc=localStorage.getItem('mcourse');
        console.log('mc---',mc);
        setMid(mc);
        const fetchData = async () => {			
            try {
                const response = await CoursesApi.getMainCourse({
                    id: mc
                  });
                  console.log('response-----',response.course[0].course)
              setCourse(response.course[0].course);   
            } catch (error) {
              console.log("error");
            }
          };
          fetchData();
        }, []);
    const editMainCourse = async () => {
        console.log("inputs-------",inputs);
        const response = await CoursesApi.editMainCourse({
            id:mid,
          course: inputs.course,
          status: '1'
        });
        console.log("response",response);
        setSuccess(true);
      };
    function mcourseChange(event){
        setInput(event.target.name,event.target.value);
        setCourse(event.target.value);
    }
    const { inputs=null, handleInputChange, handleRandomInput, handleNumberInput, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        editMainCourse,
        // validate
      );
  
  return (
    <div className="pg-width container">
        <div class="grid-form">
            <div class="grid-form1">
                {success? (<p className="success">Main Course edited successfully  <Redirect to="/maincourse"/></p>):''}
                  <h3 id="forms-example" class="">Edit Main Course</h3>
                  <div class="form-group">
                      <label for="exampleInputQuestion">Title </label>
                      <input type="text" name="course" onChange={(event) => {mcourseChange(event);}} class="form-control" id="course" value={mccourse} />
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
export default EditMainCourse;
