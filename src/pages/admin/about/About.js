import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// API CALL
import AboutsApi from '../../../api/AboutApi';
function Aboutt() {

    const [aboutList, setAboutList] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await AboutsApi.about();
                setAboutList(result.aboutList);
            } catch (error) {
                console.log("error");
            }
        };
        fetchData();
    }, []);


    const [edit, setEdit] = useState(false);
    function handleAboutEditOpen(id) {
        localStorage.setItem('id', id);
        setEdit(true);
    }
    const handleDelete = async (id) => {
        const response = await AboutsApi.delete({id});
        console.log("response",response);
        setAboutList(response.aboutList);
      };

    return (
        <div className="pg-width container">{edit ? (<Redirect to="/aboutt-edit" />) : ''}
            <div class="grid_3 grid_5">
                <h3 class="head-top">Abouts</h3>
                <div class="but_list">
                    <div className="col-md-12">
                        <a href="/aboutt-add" class="btn  btn-lg btn-primary pull-right">Add About</a>
                    </div>
                    <div class="col-md-12 page_1 mt-4">
                        {/* <p>Add modifier classes to change the appearance of a badge.</p> */}
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>About</th>
                                    <th>Main phone</th>
                                    <th>Second phone</th>
                                    <th>Email</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(aboutList.length > 0 ? aboutList : []).map((data, index) => {
                                    return (
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.about}</td>
                                            <td>{data.phone_main}</td>
                                            <td>{data.phone_second}</td>
                                            <td>{data.email}</td>
                                            <td> <a onClick={(event) => { handleAboutEditOpen(data.id); }} class="btn btn-lg btn-warning pull-right">Edit</a></td>
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
export default Aboutt;
