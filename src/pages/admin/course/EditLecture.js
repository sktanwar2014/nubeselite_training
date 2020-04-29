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
function EditLecture() {
    const [lectureid, setLectureId] = useState({});
    const [success, setSuccess] = useState();
    useEffect(() => {
        const lid=localStorage.getItem('lectureid');
        console.log('lectureid---',lid);
        setLectureId(lid);
        const fetchData = async () => {			
            try {
                const response = await CoursesApi.lecture({
                    id: lid
                  });
                  console.log('response-----',response.lecture)
                  setInputsAll(response.lecture[0]);  
              // setCourse(response.course[0]);   
            } catch (error) {
              console.log("error");
            }
          };
          fetchData();
        }, []);
    
    const editLectures = async () => {
        console.log("inputs-------",inputs);
        const response = await CoursesApi.editLecture({
            id:lectureid,
          cid:inputs.cid,
          title: inputs.title,
          description: inputs.description,
          status: '1'
        });
        console.log('response',response)
        setSuccess(true);
      };
              
    const { inputs, handleInputChange, handleRandomInput, setInputsAll,handleNumberInput, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        editLectures,
        // validate
      );
  return (
    <div className="pg-width container">
        <div class="grid-form">
          {success? <p className="success">Lecture edited successfully <Redirect to="/lectures"/></p>:''}

            <div class="grid-form1">
                <h3 id="forms-example" class="">Edit Lecture</h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputAbout">Lecture Name</label>
                        <textarea name="title" id="title" cols="50" rows="8" onChange={handleInputChange} class="form-control1" value={inputs.title}></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAdvantages">Lecture Sub Parts</label>
                        <textarea name="description" id="description" cols="50" onChange={handleInputChange} rows="8" class="form-control1" value={inputs.description}></textarea>
                    </div>
                    
                    <button type="submit" onClick={handleSubmit} class="btn btn-lg btn-primary mr-5">Submit</button>
                    <a href="/lectures" class="btn btn-lg btn-warning pull-right">Back </a>

                </form>
            </div>
        </div>
    </div>
  );
}
export default EditLecture;
