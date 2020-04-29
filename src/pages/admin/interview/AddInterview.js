import React, { useState, useEffect } from 'react';
// import '../../App.css';
import { Redirect } from 'react-router-dom';
import CKEditor from 'ckeditor4-react';
import useSignUpForm from '../../../components/CustomHooks';
// API CALL
import InterviewsApi from '../../../api/Interview';
// import validate from '../../../common/validation/InterviewAddValidation';

const RESET_VALUES = {
    question: '',
    sid:'',
    answer: '',
    status:'',
  };
function AddInterview() {
  
	const [success, setSuccess] = useState();   
	const [sectionList, setSectionList] = useState({});
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
      
      
    const addInterview = async () => {
        console.log("inputs-------",inputs);
        const response = await InterviewsApi.addInterview({
          sid: inputs.sid,
          question: inputs.question,
          answer: inputs.answer,
          status: '1'
        });
        console.log("response",response);
        setSuccess(true);
      };
    
    const { inputs=null, handleInputChange, handleRandomInput, handleNumberInput, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        addInterview,
        // validate
      );
  
  return (
    <div className="pg-width container">
        <div class="grid-form">
            <div class="grid-form1">
                {success? <p className="success">Interview question added successfully</p>:''}
                <h3 id="forms-example" class="">Add Interview Question</h3>
                    <div class="form-group">
                        <label for="exampleInputcertification">Course</label>
                        <select name="sid" id="sid" onChange={handleInputChange}  class="form-control">
                            { (sectionList.length > 0 ? sectionList : []).map((data, index)=>{
                                return(
                                    <option value={data.id}>{data.title}</option>
                                    )
                                })}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputQuestion">Question</label>
                        <input type="text" name="question" onChange={handleInputChange} class="form-control" id="question"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAnswer">Answer</label>
                        
                        <textarea name="answer" id="answer" onChange={handleInputChange} cols="50" rows="8" class="form-control1"></textarea>
                    </div>
                    <div className="col-md-12">
                        <button  onClick={handleSubmit}  class="btn btn-lg btn-primary mr-5">Submit </button>
                        <a href="/interview" class="btn btn-lg btn-warning pull-right">Back </a>
                    </div> 
            </div>
        </div>
    </div>
  );
}
export default AddInterview;
