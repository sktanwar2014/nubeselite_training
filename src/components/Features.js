import React from 'react';

function Features(props) {
  const { title, text } = props;

  return (
    <div className="col-lg-4">
        <div class="feature">
            <div className="feature-title">{title}</div>
            <p className="feature-text">{text}</p>
        </div>
    </div>
  );
}

export default Features;
