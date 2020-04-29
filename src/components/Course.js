import React from 'react';

function Course(props) {
  const { link, name,text,image,cols} = props;
    const cl='col-lg-'+cols+' course_col';
  return (
    <div className={cl}>
        <div className="course">
            <div className="course_image"><img src={image} alt={name}/></div>
            <div className="course_body">
                <div className="course_title"><a href={link}>{name}</a></div>
                {/* <div className="course_info">
                    <ul>
                        <li><a href="instructors.html">Sarah Parker</a></li>
                        <li><a href="#">English</a></li>
                    </ul>
                </div> */}
                <div className="course_text">
                    <p>{text}</p>
                </div>
            </div>
            {/* <div className="course_footer d-flex flex-row align-items-center justify-content-start">
                <div className="course_students"><i className="fa fa-user" aria-hidden="true"></i><span>10</span></div>
                <div className="course_rating ml-auto"><i className="fa fa-star" aria-hidden="true"></i><span>4,5</span></div>
                <div className="course_mark course_free trans_200"><a href="#">Free</a></div>
            </div> */}
        </div>
    </div>
  );
}

export default Course;
