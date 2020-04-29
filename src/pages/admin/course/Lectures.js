import React, { useState, useEffect } from 'react';

import { Redirect } from 'react-router-dom';
// API CALL
import CoursesApi from '../../../api/CourseApi';
function Lectures() {

    const [lectureList, setLectureList] = useState({});
    const [edit, setEdit] = useState(false);
    const [lecture, setLecture] = useState(false);
    const [success, setSuccess] = useState();
    const [cid, setCid] = useState();
    const [cname, setCname] = useState();


    useEffect(() => {
        const courseid = localStorage.getItem('courseid');
        const coursename = localStorage.getItem('coursename');
        console.log('courseid---', courseid);
        setCid(courseid);
        setCname(coursename);
        const fetchData = async () => {
            try {
                const response = await CoursesApi.getLectures({
                    id: courseid
                });
                console.log('response-----', response.lectures)
                setLectureList(response.lectures);
            } catch (error) {
                console.log("error");
            }
        };
        fetchData();
    }, []);

    function handleLectureEditOpen(data) {
        localStorage.setItem('lectureid', data);
        setEdit(true);
        console.log("data course", data)
    }

    const handleDelete = async (id) => {
        const response = await CoursesApi.deleteLecture({
            id,
            courseid: localStorage.getItem('courseid'),
        });
        console.log("response", response);
        setLectureList(response.lecturesList);
    };

    return (
        <div className="pg-width container">{edit ? <Redirect to="/lecture-edit" /> : ''}
            <div class="grid_3 grid_5">
                <h3 class="head-top">Lectures of {cname}</h3>
                <div class="but_list">
                    <div className="col-md-12">
                        <a href="/lecture-add" class="btn  btn-lg btn-primary pull-right">Add Lecture</a>
                    </div>
                    <div class="col-md-12 page_1 mt-4">
                        {/* <p>Add modifier classes to change the appearance of a badge.</p> */}
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(lectureList.length > 0 ? lectureList : []).map((data, index) => {
                                    return (
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.title}</td>
                                            <td>{data.description}</td>
                                            <td> <a onClick={(event) => { handleLectureEditOpen(data.id); }} class="btn btn-lg btn-warning pull-right">Edit</a></td>
                                            <td> <a onClick={(event) => { handleDelete(data.id); }} class="btn btn-lg btn-danger pull-right">Delete</a></td>
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
export default Lectures;
