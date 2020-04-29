import React from 'react';

function Doc(props) {
  const { title, text,name,link} = props;

  return (
    <div className="col-lg-4">
        <div class="feature">
            <div className="feature-title">{title}</div>
            <p className="feature-text text-left mb-3">{text}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="col-md-12 dwnld_form_button trans_200">{name}</a>

        </div>
    </div>
  );
}

export default Doc;
