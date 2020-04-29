import React from 'react';

function TextField2(props) {
  const { type, placeholder,required} = props;

  return (
    <input type={type} className="form_input mb-2" placeholder={placeholder} required={required}/>
  );
}

export default TextField2;
