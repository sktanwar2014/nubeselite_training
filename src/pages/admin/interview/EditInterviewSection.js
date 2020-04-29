import React, { useState, useEffect } from 'react';
// import '../../App.css';
import { Redirect } from 'react-router-dom';

import useSignUpForm from '../../../components/CustomHooks';
// API CALL
import InterviewsApi from '../../../api/Interview';
// import validate from '../../../common/validation/InterviewAddValidation';

const RESET_VALUES = {
  title: '',
  };
function EditInterviewSection() {
  
	const [success, setSuccess] = useState();
	const [sectionid, setSectionid] = useState();
  useEffect(() => {
      const sid=localStorage.getItem('sectionid');
      console.log('sectionid---',sid);
      setSectionid(sid);
      const fetchData = async () => {			
          try {
              const response = await InterviewsApi.getSection({
                  id: sid
                });
              console.log('response-----',response.section[0])
              setInputsAll(response.section[0]);  
          } catch (error) {
            console.log("error");
          }
        };
        fetchData();
      }, []);
    const editSection = async () => {
        console.log("inputs-------",inputs);
        const response = await InterviewsApi.editSection({
          id:sectionid,
          title: inputs.title,
          status: '1'
        });
        console.log("response",response);
        setSuccess(true);
      };
    
    const { inputs, handleInputChange, handleRandomInput, handleNumberInput,setInputsAll, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        editSection,
        // validate
      );
  
  return (
    <div className="pg-width container">
        <div class="grid-form">
            <div class="grid-form1">
                {success? <p className="success">Interview question edited successfully  <Redirect to="/interview-sections"/></p>:''}
                <h3 id="forms-example" class="">Edit Interview Question Section</h3>
                    <div class="form-group">
                        <label for="exampleInputQuestion">Title</label>
                        <input type="text" name="title" onChange={handleInputChange} class="form-control" id="title" value={inputs.title}/>
                    </div>
                    <div className="col-md-12">
                        <button  onClick={handleSubmit}  class="btn btn-lg btn-primary mr-5">Submit </button>
                        <a href="/interview-sections" class="btn btn-lg btn-warning pull-right">Back </a>
                    </div> 
            </div>
        </div>
    </div>
  );
}
export default EditInterviewSection;
