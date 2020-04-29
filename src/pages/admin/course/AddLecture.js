import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import CoursesApi from '../../../api/CourseApi';


import useSignUpForm from '../../../components/CustomHooks';
// import '../../App.css';
const RESET_VALUES = {
    title: '',
    description: '',
    status: '',
  };
function AddLecture() {
    const [course, setCourseId] = useState({});
    const [success, setSuccess] = useState();
    useEffect(() => {
    setCourseId(localStorage.getItem('courseid'));
      console.log(localStorage.getItem('courseid'))
    });

    
    const addLectures = async () => {
        console.log("inputs-------",inputs);
        const response = await CoursesApi.addLecture({
          cid:course,
          title: inputs.title,
          description: inputs.description,
          status: '1'
        });
        console.log('response',response)
      };
              
    const { inputs=null, handleInputChange, handleRandomInput, handleNumberInput, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        addLectures,
        // validate
      );
  return (
    <div className="pg-width container">
        <div class="grid-form">
          {success? <p className="success">Lecture added successfully</p>:''}

            <div class="grid-form1">
                <h3 id="forms-example" class="">Add Lecture</h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputAbout">Lecture Name</label>
                        <textarea name="title" id="title" cols="50" rows="8" onChange={handleInputChange} class="form-control1"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAdvantages">Lecture Sub Parts</label>
                        <textarea name="description" id="description" cols="50" onChange={handleInputChange} rows="8" class="form-control1"></textarea>
                    </div>
                    
                    <button type="submit" onClick={handleSubmit} class="btn btn-lg btn-primary">Submit</button>
                    <a href="/lectures" class="btn btn-lg btn-warning pull-right">Back </a>

                </form>
            </div>
        </div>
    </div>
  );
}
export default AddLecture;
