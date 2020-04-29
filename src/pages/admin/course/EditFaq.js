import React, { useState, useEffect } from 'react';
// import '../../App.css';
import { Redirect } from 'react-router-dom';

import useSignUpForm from '../../../components/CustomHooks';
// API CALL
import CoursesApi from '../../../api/CourseApi';


const RESET_VALUES = {
    cid: '',
    question: '',
    answer: '',
  };
function EditFaq() {
  
	const [courseList, setCourseList] = useState({});
    const [success, setSuccess] = useState();
    
	const [faqdata, setFaqdata] = useState();
    const [faqid, setFaqid] = useState();
    
	const [faq, setFaq] = useState(false);
    
    useEffect(() => {
        const faqid=localStorage.getItem('faqid');
        console.log('batchid---',faqid);
        setFaqid(faqid);
        const fetchData = async () => {			
            try {
                const response = await CoursesApi.getFaq({
                    id: faqid
                  });
                console.log('response-----',response.faq[0])
                
                setFaqdata(response.faq[0]); 
                setInputsAll(response.faq[0]);  
            } catch (error) {
              console.log("error");
            }
          };
          fetchData();
    }, []);

    useEffect(() => {
		const fetchData = async () => {			
		  try {
			const result = await CoursesApi.list();
			setCourseList(result.courseList);   
		  } catch (error) {
			console.log("error");
		  }
		};
		fetchData();
      }, []);

    const editFaq = async () => {
        console.log("inputs-------",inputs);
        const response = await CoursesApi.editFaq({
            id:faqid,
          cid: inputs.cid,
          question: inputs.question,
          answer: inputs.answer,
          status: '1'
        });
        console.log("response",response);
        setSuccess(true);
        
      };
    
    const { inputs=null, handleInputChange, handleRandomInput, handleNumberInput, handleSubmit, handleReset, setInput,setInputsAll,errors } = useSignUpForm(
        RESET_VALUES,
        editFaq,
        // validate
      );
  
  return (
    <div className="pg-width container">
        <div class="grid-form">
            <div class="grid-form1">
                {success? <p className="success">FAQ edited successfully <Redirect to="/faqs"/></p>:''}
                <h3 id="forms-example" class="">Edit FAQ</h3>
                    <div class="form-group">
                        <label for="exampleInputcertification">Course</label>
                        <select name="cid" id="cid" onChange={handleInputChange}  class="form-control">
                            { (courseList.length > 0 ? courseList : []).map((data, index)=>{
                                return(
                                    data.id==inputs.cid?
                                    <option value={data.id} selected>{data.name}</option>:
                                    <option value={data.id}>{data.name}</option>
                                    )
                                })}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputcertification">Question</label>
                        <input type="text" name="question" onChange={handleInputChange} class="form-control" id="question"  value={inputs.question} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAdvantages">Answer</label>
                        <textarea name="answer" id="answer" onChange={handleInputChange} cols="50" rows="8" class="form-control1"  value={inputs.answer}></textarea>
                    </div>
                 
                   <div className="col-md-12">
                      <button  onClick={handleSubmit}  class="btn btn-lg btn-primary mr-5">Submit </button>
                
                      <a href="/faqs" class="btn btn-lg btn-warning pull-right">Back </a>
                    </div> 
            </div>
        </div>
    </div>
  );
}
export default EditFaq;
