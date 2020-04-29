import React, { useState, useEffect } from 'react';
// import '../../App.css';
import { Redirect } from 'react-router-dom';

import useSignUpForm from '../../../components/CustomHooks';
// API CALL
import AboutApi from '../../../api/AboutApi';
// import validate from '../../../common/validation/AboutAddValidation';

const RESET_VALUES = {
   
    about:'',
  };
function EditAbout() {
  
	const [success, setSuccess] = useState();
    const addAbout = async () => {
        // console.log("inputs-------",inputs);
        const response = await AboutApi.addAbout({
          about: inputs.about,
        });
        setSuccess(true);
      };
    
    const { inputs=null, handleInputChange, handleRandomInput, handleNumberInput, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        addAbout,
        // validate
      );
  
  return (
    <div className="pg-width container">
        <div class="grid-form">
            <div class="grid-form1">
                {success? <p className="success">About added successfully</p>:''}
                <h3 id="forms-example" class="">Add About</h3>
                    <div class="form-group">
                        <label for="exampleInputAdvantages">About</label>
                        <textarea name="about" id="about" onChange={handleInputChange} cols="50" rows="20" class="form-control1"></textarea>
                    </div>
                 
                   <div className="col-md-12">
                      <button  onClick={handleSubmit}  class="btn btn-lg btn-primary mr-5">Submit </button>
                
                      <a href="/aboutt" class="btn btn-lg btn-warning pull-right">Back </a>
                    </div> 
            </div>
        </div>
    </div>
  );
}
export default EditAbout;
