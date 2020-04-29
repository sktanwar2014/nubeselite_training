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
function EditTestimonial() {
  
	const [success, setSuccess] = useState(false);
	const [testimonialid, setTestimonialid] = useState();
    useEffect(() => {
        const tid=localStorage.getItem('testimonialid');
        console.log('testimonialid---',tid);
        setTestimonialid(tid);
        const fetchData = async () => {			
            try {
                const response = await TestimonialsApi.getTestimonial({
                    id: tid
                  });
                console.log('response-----',response.testimonial[0])
                // setTestimonialdata(response.testimonial[0]); 
                setInputsAll(response.testimonial[0]);  
            } catch (error) {
              console.log("error");
            }
          };
          fetchData();
        }, []);
    const editTestimonial = async () => {
        console.log("inputs-------",inputs);
        const response = await TestimonialsApi.editTestimonial({
            id:testimonialid,
          name: inputs.name,
          content: inputs.content,
          status: '1'
        });
        console.log("response",response);
        setSuccess(true);
      };
    
    const { inputs=null, handleInputChange, handleRandomInput, handleNumberInput,setInputsAll, handleSubmit, handleReset, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        editTestimonial,
        // validate
      );
  
  return (
    <div className="pg-width container">
        <div class="grid-form">
            <div class="grid-form1">
                {success? <p className="success">Testimonial edited successfully <Redirect to="/testimonial"/></p>:''}
                <h3 id="forms-example" class="">Edit Testimonial</h3>
                    <div class="form-group">
                        <label for="exampleInputcertification">Name</label>
                        <input type="name" name="name" onChange={handleInputChange} class="form-control" id="name"  value={inputs.name}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAdvantages">Testimonial</label>
                        <textarea name="content" id="content" onChange={handleInputChange} cols="50" rows="8" class="form-control1" value={inputs.content}></textarea>
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
export default EditTestimonial;
