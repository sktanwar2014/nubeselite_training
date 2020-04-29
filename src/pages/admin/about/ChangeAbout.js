import React, { useState, useEffect } from 'react';
// import '../../App.css';
import { Redirect } from 'react-router-dom';
import CKEditor from 'ckeditor4-react';
import useSignUpForm from '../../../components/CustomHooks';
// API CALL
import AboutApi from '../../../api/AboutApi';
// import validate from '../../../common/validation/InterviewAddValidation';

function Input({ label, id, inputs, onChange }) {
    return <div class="form-group">
        <label>{label}</label>
        <input type="text" name={id} onChange={onChange} class="form-control" id={id} value={inputs[id]} />
    </div>;
}

const RESET_VALUES = {};
function ChangeAbout() {

    const [success, setSuccess] = useState();
    const [id, setid] = useState();
    useEffect(() => {
        const id = localStorage.getItem('id');
        setid(id);
        const fetchData = async () => {
            try {
                const response = await AboutApi.about();
                setInputsAll(response.aboutList[0]);
            } catch (error) {
                console.log("error");
            }
        };
        fetchData();
    }, []);

    const submitform = async () => {
        const response = await AboutApi.edit({
            id: id,
            ...inputs
        });
        console.log("response", response);
        setSuccess(true);
    };

    const { inputs = null, handleInputChange, handleRandomInput, setInputsAll, handleNumberInput, handleSubmit, handleReset, setInput, errors } = useSignUpForm(
        RESET_VALUES,
        submitform,
        // validate
    );

    return (
        <div className="pg-width container">
            <div class="grid-form">
                <div class="grid-form1">
                    {success ? <p className="success">Success<Redirect to="/aboutt" /></p> : ''}
                    <h3 id="forms-example" class="">Edit About</h3>
                    <div class="form-group">
                        <label for="exampleInputAnswer">About</label>

                        <textarea name="about" id="about" onChange={handleInputChange} cols="50" rows="8" class="form-control1" value={inputs.about}></textarea>
                    </div>

                    <Input id='phone_main' label='phone_main' inputs={inputs} onChange={handleInputChange} />
                    <Input id='phone_second' label='phone_second' inputs={inputs} onChange={handleInputChange} />
                    <Input id='email' label='email' inputs={inputs} onChange={handleInputChange} />

                    <div className="col-md-12">
                        <button onClick={handleSubmit} class="btn btn-lg btn-primary mr-5">Submit </button>
                        <a href="/aboutt" class="btn btn-lg btn-warning pull-right">Back </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChangeAbout;
