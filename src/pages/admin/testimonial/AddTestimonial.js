import React, { useState, useEffect } from 'react';
// import '../../App.css';
import { Redirect } from 'react-router-dom';

import useSignUpForm from '../../../components/CustomHooks';
// API CALL
import TestimonialsApi from '../../../api/Testimonial';
// import validate from '../../../common/validation/TestimonialAddValidation';

const RESET_VALUES = {
    name: '',
    testimonial: '',
    status:'',
  };
function AddTestimonial() {
  
	const [success, setSuccess] = useState();
    const addTestimonial = async () => {
        console.log("inputs-------",inputs);
        const response = await TestimonialsApi.addTestimonial({
          name: inputs.name,
          testimonial: inputs.testimonial,
          status: '1'
        });
        console.log("response",response);
        setSuccess(true);
      };
    
    const { inputs=null, handleInputChange, handleRandomInput, handleNumberInput, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        addTestimonial,
        // validate
      );
  
  return (
    <div className="pg-width container">
        <div class="grid-form">
            <div class="grid-form1">
                {success? <p className="success">Testimonial added successfully</p>:''}
                <h3 id="forms-example" class="">Add Testimonial</h3>
                    <div class="form-group">
                        <label for="exampleInputcertification">Name</label>
                        <input type="name" name="name" onChange={handleInputChange} class="form-control" id="name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAdvantages">Testimonial</label>
                        <textarea name="testimonial" id="testimonial" onChange={handleInputChange} cols="50" rows="8" class="form-control1"></textarea>
                    </div>
                 
                   <div className="col-md-12">
                      <button  onClick={handleSubmit}  class="btn btn-lg btn-primary mr-5">Submit </button>
                
                      <a href="/testimonial" class="btn btn-lg btn-warning pull-right">Back </a>
                    </div> 
            </div>
        </div>
    </div>
  );
}
export default AddTestimonial;
