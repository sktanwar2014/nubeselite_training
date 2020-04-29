import React from 'react';

function Title(props) {
  const { name } = props;

  return (
    <h2 className="section_title text-center">{name}</h2>
  );
}

export default Title;
