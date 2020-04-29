import React, { useState, useEffect } from 'react';

import {Redirect } from 'react-router-dom';
// API CALL
import TestimonialsApi from '../../../api/Testimonial';
function TestimonialIndex() {
    
	const [success, setSuccess] = useState(false);
	const [testimonialList, setTestimonialList] = useState({});
	const [edit, setEdit] = useState(false);
    useEffect(() => {
		const fetchData = async () => {			
		  try {
			const result = await TestimonialsApi.list();
			setTestimonialList(result.testimonialList);   
		  } catch (error) {
			console.log("error");
		  }
		};
		fetchData();
      }, []);
      
      
  function handleTestimonialEditOpen(data){
    localStorage.setItem('testimonialid',data);
    setEdit(true);
    console.log("data testimonial",data)
  }

  const handleTestimonialDelete = async (data) => {
    const response = await TestimonialsApi.deleteTestimonial({
        id: data.id,
    });
    console.log("response",response);
    setTestimonialList(response.testimonialList);
    setSuccess(true);
  };
  return (
    <div className="pg-width container">{edit? (<Redirect to="/testimonial-edit"/>) :''}
        <div class="grid_3 grid_5">
            <h3 class="head-top">Testimonials</h3>
            <div class="but_list">
                <div className="col-md-12">
                    <a href="/testimonial-add" class="btn  btn-lg btn-primary pull-right">Add Testimonial</a>
                </div>
                {success? <p className="success mt-5">Testimonial deleted successfully</p>:''}
                <div class="col-md-12 page_1 mt-4">
                    {/* <p>Add modifier classes to change the appearance of a badge.</p> */}
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Testimonials</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            { (testimonialList.length > 0 ? testimonialList : []).map((data, index)=>{
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td> <a  onClick={(event) => {handleTestimonialEditOpen(data.id);}} class="btn btn-lg btn-warning pull-right">Edit</a></td>
                                    <td> <a  onClick={(event) => {handleTestimonialDelete(data);}} class="btn btn-lg btn-danger pull-right">Delete</a></td>

                                </tr>
                                )
                            })}
                        </tbody>
                    </table>                    
                </div>

            <div class="clearfix"> </div>
        </div>
     </div>
    </div>
  );
}
export default TestimonialIndex;
