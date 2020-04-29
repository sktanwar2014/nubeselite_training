import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StickyBox from 'react-sticky-box';
import { slide as Menu } from 'react-burger-menu';
import $ from 'jquery';

import { Typography, ExpansionPanel, ExpansionPanelSummary,ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Logo from '../components/UI/Logo';
import SearchBar from '../components/SearchBar';
import TmdbLogoGreen from '../svg/tmdbgreen.svg';
import MenuItem from '../components/MenuItem';

import CoursesApi from '../api/CourseApi';

import {styles,style} from '../utils/styles.js';

const WrapperStickyBox = styled(StickyBox)`
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  // background-color: var(--color-primary-lighter);
  box-shadow: 0 2px 40px var(--shadow-color);
`;

const Hamburguer = styled.div`
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  width: 25px;
  line-height: 1;
  height: auto;
  background-color: transparent;
  cursor: pointer;
`;

const Bar = styled.span`
  transition: all 0.3s;
  border-radius: 10px;
  margin: 2px 0;
  height: 4px;
  width: 100%;
  display: inline-block;
  background-color: var(--color-primary);
`;

const Heading = styled.h2`
  font-weight: 700;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin: 0 0 1rem 1rem;
  &:not(:first-child) {
    margin-top: 4rem;
  }
`;

const LinkWrap = styled(Link)`
  text-decoration: none;
  display: block;
  outline: none;
  margin-bottom: 0.5rem;
`;

const StyledCoffe = styled.a`
  display: flex !important;
  outline: none;
  justify-content: center !important;
  align-items: center !important;
  padding: 0.5rem 2rem;
  color: #000000;
  background-color: #ffffff;
  border-radius: 3px;
  font-family: 'Montserrat', sans-serif;
  border: 1px solid transparent;
  text-decoration: none;
  font-family: 'Montserrat';
  font-size: 1.2rem;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  margin: 2rem auto;
  transition: 0.3s all linear;

  &img {
    width: 27px;
    box-shadow: none;
    border: none;
    vertical-align: middle;
  }

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color: #000000;
  }
`;

const CopyRight = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  color: ${props => (props.mobile ? '#fff' : 'var(--color-primary-dark)')};
  margin-bottom: ${props => (props.mobile ? '2rem' : '')};
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  margin-left: 4px;
  color: inherit;
`;

const Svg = styled.img`
  max-width: 100%;
  height: 3rem;
`;

// Custom Styles - Made in Sarga
const MenuLink = styled.a`
text-decoration: none;
padding: 4px 0px;
font-size: 1.3em;
`;
const MenuHeading= styled.h2`
font-weight: 700;
font-size: 1.5rem;
color: #007bff;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  &:not(:first-child) {
    margin-top: 4rem;
  }
  &:hover{
    color:#0056b3;
  }
`;

const MenuMobile = ({ genres, staticCategories, selected }) => {
  let classes = styles();
  const [isOpened, setisOpened] = useState(false);

  const isMenuOpen = ({ isOpened }) => {
    setisOpened(isOpened);
  };
  
   const [sectionList, setSectionList] = useState([]);
  const [courseList, setCourseList] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CoursesApi.sectionList();
        setSectionList(result.sectionList);
        // console.log("(result.sectionList", result);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CoursesApi.list();
        setCourseList(result.courseList);
        // console.log("(result.courseList", result.courseList);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
	 }, []);    

  
   useEffect(() => {
  $(function () {
      window.setTimeout(function () {
        $('.singleitem').on("click", function () {
          if ($(this).attr('dataid')) localStorage.setItem('singleCourseId', $(this).attr('dataid'));
          if ($(this).attr('dataname')) localStorage.setItem('singleCourseName', $(this).attr('dataname'));
          window.location = '/course';
        });
      }, 500);
    });
     });       

  return (
    <React.Fragment>
      <WrapperStickyBox>
        <Hamburguer onClick={() => setisOpened(true)}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburguer>
		<Logo style={{height: '5rem',marginLeft: '25px'}} />
		{/* <SearchBar /> */}
      </WrapperStickyBox>
      <Menu isOpen={isOpened} onStateChange={isMenuOpen} styles={style}>
	  <Logo />
	  <br />
	  <MenuLink href="/">Home</MenuLink>
	  <MenuLink href="/about">About</MenuLink>
	  <MenuLink href="/schedule">Schedule</MenuLink>
	  <MenuLink href="/docs">Docs</MenuLink>
	  <MenuLink href="/contact">Contact</MenuLink>
	  
    <Heading>Courses</Heading>
	  {(sectionList ? sectionList : []).map((data, index) => {
		return (
			<ExpansionPanel key={index}
          className={classes.panelheader}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.panelsummary}
        ><MenuHeading>{data.course}</MenuHeading>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          className={classes.panel}>
			  {(courseList.length > 0 ? courseList : []).map((datac, index) => {
				return (
				  data.id === datac.mid ? <div key={Math.random()} className="singleitem" dataid={datac.id} dataname={datac.name}><MenuLink href="#">{datac.name}</MenuLink> </div> : ''
				)
			  })}
        </ExpansionPanelDetails>
      </ExpansionPanel>
		)
	  })}

      
      <br />
      <MenuLink style={{color:'black',fontSize:'1em',fontWeight:'400'}} href="tel:08041140897"><i className="fas fa-phone-alt"></i> 080-4114 0897</MenuLink>
	  <MenuLink style={{color:'black',fontSize:'1em',fontWeight:'400'}} href="tel:+917483096134"><i className="fab fa-whatsapp"></i> +91 7483096134</MenuLink>
	  
         {/*<Heading>Discover</Heading>
        {renderStatic(staticCategories, selected, setisOpened)}
        <Heading>Genres</Heading>
        {renderGenres(genres, selected, setisOpened)}
        <StyledCoffe
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.buymeacoffee.com/fidalgodev"
        >
          <img
            src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
            alt="Buy me a coffee"
          />
          <span style={{ marginLeft: '5px' }}>Buy me a coffee</span>
        </StyledCoffe>
		 <CopyRight mobile={true}>
          Copyright ©
          <StyledLink href="https://www.github.com/fidalgodev">
            Fidalgo
          </StyledLink>
</CopyRight> 
        <Svg
          src={`${TmdbLogoGreen}`}
          alt="The Movie Database"
          style={{ marginBottom: '2rem' }}
        />*/}
      </Menu>
    </React.Fragment>
  );
};

function renderStatic(categories, selected, setisOpened) {
  return categories.map((category, i) => (
    <LinkWrap
      to={`${process.env.PUBLIC_URL}/discover/${category}`}
      key={i}
      onClick={setisOpened ? () => setisOpened(false) : null}
    >
      <MenuItem
        mobile={setisOpened ? 1 : 0}
        title={category}
        selected={category === selected ? true : false}
      />
    </LinkWrap>
  ));
}

function renderGenres(genres, selected, setisOpened) {
  return genres.map(genre => (
    <LinkWrap
      to={`${process.env.PUBLIC_URL}/genres/${genre.name}`}
      key={genre.id}
      onClick={setisOpened ? () => setisOpened(false) : null}
    >
      <MenuItem
        mobile={setisOpened ? 1 : 0}
        title={genre.name}
        selected={genre.name === selected ? true : false}
      />
    </LinkWrap>
  ));
}

const mapStateToProps = ({ geral }) => {
  return {
    staticCategories: [],
    genres: [],
    selected: '',
  };
};

export default connect(mapStateToProps)(MenuMobile);
