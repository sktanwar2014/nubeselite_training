import React from 'react';

function TextField(props) {
  const { type, placeholder,required,id,name,maxlength,size,value,onChange} = props;

  return (
    <input type={type} className="username" placeholder={placeholder} id={id} name={name} required={required} maxlength={maxlength} size={size} value={value} onChange={onChange} />
  );
}

export default TextField;
