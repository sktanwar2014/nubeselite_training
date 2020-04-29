import React, { useState, useEffect } from 'react';
// import '../../App.css';
import {Redirect } from 'react-router-dom';

import useSignUpForm from '../../../components/CustomHooks';
// API CALL
import CoursesApi from '../../../api/CourseApi';
import AddLecture from './AddLecture';
// import validate from '../../../common/validation/CourseAddValidation';

const RESET_VALUES = {
    name: '',
    about: '',
    advantages: '',
  };
function CourseAdd() {
  
	const [lecture, setLecture] = useState();
	const [course, setCourseId] = useState();
	const [sectionList, setSectionList] = useState({});
    const addCourse = async () => {
        console.log("inputs-------",inputs);
        const response = await CoursesApi.addSCourse({
          mid:inputs.mid,
          name: inputs.name,
          about: inputs.about,
          advantages: inputs.advantages,
          status: '1'
        });
        console.log("response",response.course[0].id);
        localStorage.setItem('courseid', response.course[0].id);
        setLecture(true);
        setCourseId(response.course);
      };
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
          
    const { inputs=null, handleInputChange, handleRandomInput, handleNumberInput, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        addCourse,
        // validate
      );
  
  return (
    <div className="pg-width container">
        <div class="grid-form">
            <div class="grid-form1">
                <h3 id="forms-example" class="">Add Course</h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputcertification">Main Course</label>
                        <select name="mid" id="mid" onChange={handleInputChange} class="form-control" >
                          <option>--Select Main Course--</option>
                          { (sectionList.length > 0 ? sectionList : []).map((data, index)=>{
                            return(
                              <option value={data.id}>{data.course}</option>
                              )
                            })}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputcertification">Name</label>
                        <input type="name" name="name" onChange={handleInputChange} class="form-control" id="name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAbout">About</label>
                        <textarea name="about" id="about" onChange={handleInputChange} cols="50" rows="8" class="form-control1"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAdvantages">Advantages</label>
                        <textarea name="advantages" id="advantages" onChange={handleInputChange} cols="50" rows="8" class="form-control1"></textarea>
                    </div>
                 
                    <button  onClick={handleSubmit}  class="btn btn-lg btn-primary">Submit and Add Lecture</button>
                </form>
            </div>
        </div>
        {lecture? <Redirect to="/lecture-add" />:''}
    </div>
  );
}
export default CourseAdd;
