import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Logo from '../components/UI/Logo';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';
import Urbanb from '../images/urbanproo.png';
// import { Link } from 'react-router-dom';
// API CALL
import CoursesApi from '../api/CourseApi';
import AboutsApi from '../api/AboutApi';

import MenuMobile from './MenuMobile';
// import Sidebar from './containers/Sidebar';
// import SearchBar from './SearchBar';

const Topbar = ({ history }) => {
  const [sectionList, setSectionList] = useState([]);
  const [courseList, setCourseList] = useState({});

  const [aboutList, setAboutList] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await AboutsApi.about();
        if (result.aboutList && result.aboutList.length > 0) setAboutList(result.aboutList[0]);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);

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

    $(function () {
      window.setInterval(function () {
        $('.singleitem').on("click", function () {
          if ($(this).attr('dataid')) localStorage.setItem('singleCourseId', $(this).attr('dataid'));
          if ($(this).attr('dataname')) localStorage.setItem('singleCourseName', $(this).attr('dataname'));
          window.location = '/course';
        });
      }, 500);
    });

  }, []);

  const [isMobile, setisMobile] = useState(null);
  const changeMobile = () => {
    window.matchMedia('(max-width: 992px)').matches
      ? setisMobile(true)
      : setisMobile(false);
  };
  useEffect(() => {
    changeMobile();
    window.addEventListener('resize', changeMobile);
    return () => window.removeEventListener('resize', changeMobile);
  }, []);

  return (
    <>
      {isMobile ? <MenuMobile /> :
        <div style={{ width: '100%' }}>
          <header className="header" style={{ width: '100%' }}>
            <div className="top_bar">
              <div className="top_bar_container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                        <div className="top_bar_phone"><i className="fa fa-envelope" aria-hidden="true"></i>
                          <a href={aboutList.email ? `mailto:` + aboutList.email : `mailto:info@nubeselite.com`} style={{ color: 'white', paddingLeft: 4 }}>{aboutList.email || `info@nubeselite.com`}</a>
                        </div>
                        {/* <div className="top_bar_right ml-auto"> */}
                        <div className="top_bar_phone ml-auto">
                          <i className="fas fa-phone-alt" aria-hidden="true"></i>  {aboutList.phone_main || `080-4114 0897`} &nbsp;&nbsp;
                          <i class="fab fa-whatsapp" aria-hidden="true"></i>&nbsp;  {aboutList.phone_second || `+91 7483096134`}
                        </div>
                        {/* <div className="top_bar_lang">
                          <span className="top_bar_title">site language:</span>
                          <ul className="lang_list">
                            <li className="hassubs">
                              <a href="#">English<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                              <ul>
                                <li><a href="#">Ukrainian</a></li>
                                <li><a href="#">Japanese</a></li>
                                <li><a href="#">Lithuanian</a></li>
                                <li><a href="#">Swedish</a></li>
                                <li><a href="#">Italian</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>  */}

                        <div className="top_bar_social  ml-auto">
                          <span className="top_bar_title social_title">follow us</span>
                          <ul>
                            <li><a href="https://www.facebook.com/nubeselite" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/nubeselite" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCcQM3Vyu37fe09kvcBLGLRA" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="https://www.urbanpro.com/nubeselite" target="_blank" rel="noopener noreferrer"><img src={Urbanb} width="10" /></a></li>
                            {/* <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                            <li><a href="https://twitter.com/NubesElite" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                          </ul>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="header_container">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="header_content d-flex flex-row align-items-center justify-content-start">

                      <div className="logo_container mr-auto">
                        <a href="#">
                          <div className="logo_text"><Logo /></div>
                        </a>
                      </div>
                      <nav className="main_nav_contaner  ml-auto">
                        <ul className="main_nav">
                          <li><a href="/">Home</a></li>
                          <li><a href="/about">About</a></li>
                          <li className=" dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Courses
                            <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                {/* <li class="dropdown-divider"></li> */}
                                {(sectionList ? sectionList : []).map((data, index) => {
                                  let relatedCourseList = (courseList.length > 0 ? courseList : []).filter(ele => {return ele.mid ===  data.id});
                                  return (
                                    <li class="dropdown-submenu  pg-width" key={Math.random()}>
                                      <a class="dropdown-item" href="#" >{data.course}</a>
                                      {(relatedCourseList.length > 0) &&
                                        <ul class="dropdown-menu">
                                          {/* <li class="dropdown-item"><a tabindex="-1" href="#">Second level</a></li> */}
                                          {(relatedCourseList.length > 0 ? relatedCourseList : []).map((datac, index) => {
                                            return (
                                             <li key={Math.random()} className="dropdown-item singleitem" dataid={datac.id} dataname={datac.name}><a href="#">{datac.name}</a></li>
                                            )
                                          })}
                                        </ul>
                                      } 
                                    </li>
                                  )
                                })}

                              </ul>
                          </li>
                          {/* <li><a href="/courses">Courses</a></li> */}
                          <li><a href="/schedule">Schedule</a></li>
                          {/* <li><a href="/blog">Blog</a></li> */}
                          <li><a href="/docs">Docs</a></li>
                          <li><a href="/contact">Contact</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </header>

          <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
            <div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>
            <div className="search">
              <form action="#" className="header_search_form menu_mm">
                <input type="search" className="search_input menu_mm" placeholder="Search" required="required" />
                <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                  <i className="fa fa-search menu_mm" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <nav className="menu_nav">
              <ul className="menu_mm">
                <li className="menu_mm"><a href="/">Home</a></li>
                <li className="menu_mm"><a href="/about">About</a></li>
                <li className="menu_mm"><a href="/courses">Courses</a></li>
                <li className="menu_mm"><a href="/schedule">Schedule</a></li>
                <li className="menu_mm"><a href="#">Download</a></li>
                <li className="menu_mm"><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            <div className="menu_extra">
              <div className="menu_phone"><span className="menu_title">phone:</span>+44 300 303 0266</div>
              {/* <div className="menu_social">
              <span className="menu_title">follow us</span>
              <ul>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              </ul>
            </div> */}
            </div>
          </div>

        </div>}
    </>
  );
};

// function renderStatic(categories, selected, setisOpened) {
//   return categories.map((category, i) => (
//     <LinkWrap
//       to={`${process.env.PUBLIC_URL}/discover/${category}`}
//       key={i}
//       onClick={setisOpened ? () => setisOpened(false) : null}
//     >

//       {/* <MenuItem
//         mobile={setisOpened ? 1 : 0}
//         title={category}
//         selected={category === selected ? true : false}
//       /> */}
//     </LinkWrap>
//   ));
// }

// function renderGenres(genres, selected, setisOpened) {
//   return genres.map(genre => (
//     <LinkWrap
//       to={`${process.env.PUBLIC_URL}/genres/${genre.name}`}
//       key={genre.id}
//       onClick={setisOpened ? () => setisOpened(false) : null}
//     >
//       <MenuItem
//         mobile={setisOpened ? 1 : 0}
//         title={genre.name}
//         selected={genre.name === selected ? true : false}
//       />
//     </LinkWrap>
//   ));
// }

const mapStateToProps = ({ geral }) => {
  return {
    staticCategories: ["Popular", "Top Rated", "Upcoming"],
    genres: [{ id: 21, name: "Adventure" }, { id: 22, name: "Action" }],
    selected: '',
  };
};

export default connect(mapStateToProps)(Topbar);

