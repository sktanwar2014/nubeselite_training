import React from 'react';

function Icon(props) {
  const { icon,title, text, ...other } = props;

  return (
    <div className="col-lg-4">
        <div class="skill">
            <span><i class={icon} aria-hidden="true"></i></span>
            <p className="skill-title">{title}</p>
            <p className="skill-text">{text}</p>
        </div>
    </div>
  );
}

export default Icon;
