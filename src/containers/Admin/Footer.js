import React from 'react';
import { connect } from 'react-redux';
const Footer = () => {
  return (
    <div style={{width:'100%'}}>
        
    </div>
  );
};

const mapStateToProps = ({ geral }) => {
  return {
    staticCategories: ["Popular", "Top Rated", "Upcoming"],
    genres: [{id: 21, name: "Adventure"}, {id: 22, name: "Action"}],
    selected: '',
  };
};

export default connect(mapStateToProps)(Footer);

