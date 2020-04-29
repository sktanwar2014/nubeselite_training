import React from 'react';

function Company(props) {
  const {link,alt} = props;

  return (
    <div class="carousel-item col-md-4">
        <img class="img-fluid mx-auto d-block" src={link} alt={alt}/>
    </div>
  );
}

export default Company;
