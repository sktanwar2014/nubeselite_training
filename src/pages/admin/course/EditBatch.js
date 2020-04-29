import React, { useState, useEffect } from 'react';
// import '../../App.css';
import { Redirect } from 'react-router-dom';

import useSignUpForm from '../../../components/CustomHooks';
// API CALL
import CoursesApi from '../../../api/CourseApi';
// import validate from '../../../common/validation/AddBatchValidation';

const RESET_VALUES = {
    batch_name: '',
    cid: '',
    start_date: '',
    days:'',
    duration: '',
    fees:'',
    time:'',
    status: ''
  };
function EditBatch() {
  
	const [courseList, setCourseList] = useState({});
	const [lecture, setLecture] = useState();
	const [course, setCourseId] = useState();
    const [success, setSuccess] = useState();
    
	const [batchdata, setBatchdata] = useState();
	const [batchid, setBatchid] = useState();
    useEffect(() => {
        const batchid=localStorage.getItem('batchid');
        console.log('batchid---',batchid);
        setBatchid(batchid);
        const fetchData = async () => {			
            try {
                const response = await CoursesApi.getBatch({
                    id: batchid
                  });
                console.log('response-----',response.batch[0])
                
                setBatchdata(response.batch[0]); 
                setInputsAll(response.batch[0]);  
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
      
    const editBatchs = async () => {
        console.log("inputs-------",inputs);
        const response = await CoursesApi.editBatch({
          id:batchid,
          batch_name: inputs.batch_name,
          cid: inputs.cid,
          title: inputs.title,
          start_date: inputs.start_date,
          days: inputs.days,
          duration: inputs.duration,
          fees: inputs.fees,
          time: inputs.time,
          status: '1'
        });
        console.log("response",response);
        setSuccess(true);
        setLecture(true);
      };
    
   
    const { inputs, handleInputChange, handleRandomInput, handleNumberInput, handleSubmit, handleReset,setInputsAll, setInput,errors } = useSignUpForm(
        RESET_VALUES,
        editBatchs,
        // validate
      );
    
  return (
    <div className="pg-width container">
        <div class="grid-form">
            <div class="grid-form1">
                {success? <p className="success">Batch edited successfully  <Redirect to="/batches"/></p>:''}
                <h3 id="forms-example" class="">Edit Batch</h3>
                
                    <div class="form-group">
                        <label for="exampleInputcertification">Course</label>
                        <select name="cid" id="cid" onChange={handleInputChange}  class="form-control">
                            { (courseList.length > 0 ? courseList : []).map((data, index)=>{
                                return(
                                    data.id==inputs.cid?
                                    <option value={data.id} selected>{data.name}</option>:<option value={data.id} >{data.name}</option>
                                    )
                                })}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputbatch_name">Batch Name</label>
                        <input type="text" name="batch_name" onChange={handleInputChange} class="form-control" id="batch_name" value={inputs.batch_name}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputbatch_name">Batch Title</label>
                        <input type="text" name="title" onChange={handleInputChange} class="form-control" id="title" value={inputs.title}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputstart_date">Start Date</label>
                        <input type="date" name="start_date" onChange={handleInputChange} class="form-control" id="start_date" value={inputs.start_date}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputstart_date">time</label>
                        <input type="text" name="time" onChange={handleInputChange} class="form-control" id="time" value={inputs.time}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputstart_text">Days</label>
                        <input type="text" name="days" onChange={handleInputChange} class="form-control" id="days" value={inputs.days}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputstart_text">Duration</label>
                        <input type="text" name="duration" onChange={handleInputChange} class="form-control" id="duration" value={inputs.duration}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputstart_text">fees</label>
                        <input type="text" name="fees" onChange={handleInputChange} class="form-control" id="fees" value={inputs.fees}/>
                    </div>
                    <div className="col-md-12">
                     <button  onClick={handleSubmit}  class="btn btn-lg btn-primary mr-5">Submit </button>
                
                     <a href="/batches" class="btn btn-lg btn-warning pull-right">Back </a>
                    </div> 
            </div>
        </div>
        {lecture? <Redirect to="/lecture-add" push   />:''}
    </div>
  );
}
export default EditBatch;
