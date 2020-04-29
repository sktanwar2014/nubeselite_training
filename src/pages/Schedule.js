import React, { useState, useEffect } from 'react';

import '../App.css';
import '../styles/course.css';
import '../styles/course_responsive.css';
import BatchDetails from '../components/BatchDetails';
// API CALL
import CoursesApi from '../api/CourseApi';
function Schedule() {
  
	const [batchList, setBatchList] = useState({});
  useEffect(() => {
  const fetchData = async () => {			
    try {
    const result = await CoursesApi.batches();
    console.log(result.batchList)
    setBatchList(result.batchList);   
    } catch (error) {
    console.log("error");
    }
  };
  fetchData();
    }, []);
    
  return (
    <div className="pg-width">
        <div class="course-home">
          {/* <div class="breadcrumbs_container">
            <div class="container">
              <div class="row">
                <div class="col">
                  <ul class="breadcrumbs_list d-flex flex-row align-items-center justify-content-start">
                    <li><a href="/">home</a></li>
                    <li>Schedule</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        
        <div class="language course-bg">
			    <div class="container">
            <div class="row">
              <div class="col">
                <div class="language_title text-center">Schedule</div>
                  <div class="language_breadcrumb text-center">
                    <ul class="breadcrumbs_list  text-center align-items-center justify-content-start">
                        <li><a href="/">home</a></li>
                        <li>Schedule</li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
	      </div>
        <div className="container-fluid schedule_table">
            <div class="curriculum_items">
                <div className="row">
                  <div class="table-responsive" style={{width:'90%',marginLeft:'auto',marginRight:'auto'}}>
                    <table class="table text-center">
                      <thead>
                        <tr>
                          <th scope="col">Batch Name</th>
                          <th scope="col">Course</th>
                          <th scope="col">Start Date</th>
                          <th scope="col">Time</th>
                          <th scope="col">Days</th>
                          <th scope="col">Est. Course Duration</th>
                          <th scope="col">Fees</th>
                        </tr>
                      </thead>
                      <tbody>
                        { (batchList.length > 0 ? batchList : []).map((data, index)=>{
                          return(    
                              <tr width="100%"> 
                                <td width="10%">{data.batch_name}</td>
                                <td width="15%">{data.title}</td>
                                <td width="10%">{data.start_date}</td>
                                <td width="20%">{ data.time}</td>
                                <td width="20%">{data.days}</td>
                                <td width="15%">{data.duration}</td>
                                <td width="10%">{data.fees}</td>
                              </tr> 
                              )
                          })}
                      </tbody>
                    </table>
                  </div>
                {/* { (batchList.length > 0 ? batchList : []).map((data, index)=>{
                  return(
                    <BatchDetails 
                            batch={data.batch_name}
                            title={data.title}
                            start={data.start_date}
                            time={ data.time}
                            days={data.days}
                            duration={data.duration}
                            fees={data.fees}
                        />
                      )
                  })}
             */}
            </div>
                    
                    
        </div>
    </div>     
    </div>
  );
}
export default Schedule;
