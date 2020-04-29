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
function EditCourse() {
  
	const [lecture, setLecture] = useState();
	const [course, setCourseId] = useState();
	const [sectionList, setSectionList] = useState({});
    const [cid, setCid] = useState();
    const [success, setSuccess] = useState();   
    
	const [ccourse, setCourse] = useState();
    
    useEffect(() => {
        const mc=localStorage.getItem('course');
        console.log('mc---',mc);
        setCid(mc);
        const fetchData = async () => {			
            try {
                const response = await CoursesApi.getCourse({
                    id: mc
                  });
                  console.log('response-----',response.course[0])
                  setInputsAll(response.course[0]);  
              // setCourse(response.course[0]);   
            } catch (error) {
              console.log("error");
            }
          };
          fetchData();
        }, []);

    const editCourse = async () => {
        console.log("inputs-------",inputs);
        const response = await CoursesApi.editSCourse({
            id:cid,
          mid:inputs.mid,
          name: inputs.name,
          about: inputs.about,
          advantages: inputs.advantages,
          status: '1'
        });
        setLecture(true);
        setSuccess(true);
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
          
    const { inputs, handleInputChange, handleRandomInput,setInputsAll, handleNumberInput, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        editCourse,
        // validate
      );
  
  return (
    <div className="pg-width container">
        <div class="grid-form">
            <div class="grid-form1">
            {success? <p className="success"><Redirect to="/courseindex"/></p>:''}

                <h3 id="forms-example" class="">Edit Course</h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputcertification">Main Course</label>
                        <select name="mid" id="mid" onChange={handleInputChange} class="form-control" >
                          <option>--Select Main Course--</option>
                          { (sectionList.length > 0 ? sectionList : []).map((data, index)=>{
                            return(
                              data.id==inputs.mid?
                              <option value={data.id} selected>{data.course}</option>:
                              <option value={data.id}>{data.course}</option>
                              )
                            })}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputcertification">Name</label>
                        <input type="name" name="name" onChange={handleInputChange} class="form-control" id="name" value={inputs.name}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAbout">About</label>
                        <textarea name="about" id="about" onChange={handleInputChange} cols="50" rows="8" class="form-control1"  value={inputs.about}></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAdvantages">Advantages</label>
                        <textarea name="advantages" id="advantages" onChange={handleInputChange} cols="50" rows="8" class="form-control1" value={inputs.advantages}></textarea>
                    </div>
                 
                    <button  onClick={handleSubmit}  class="btn btn-lg btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  );
}
export default EditCourse;
