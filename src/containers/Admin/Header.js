import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
const Header = () => {

    const [error, setError] = useState(false);
    const [logout, setLogout] = useState(false);
    useEffect(() => {
        const test = localStorage.getItem('user');
        if (localStorage.getItem('user') == '') {
            setError(true);
        }
    }, []);
    function handleLogout(event) {
        event.preventDefault();
        localStorage.setItem('user', '');
        setLogout(true);
    }

    return (
        <nav className="navbar-default navbar-static-top" role="navigation">

            {error ? (<Redirect to="/" />) : ''}
            {logout ? <Redirect to="/" /> : ''}
            <div className="navbar-header">
                {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button> */}
                <h1> <a className="navbar-brand" href="/home">Admin</a></h1>
            </div>
            <div className=" border-bottom">

                {/* <div className="full-left">
                    <section className="full-top">
                        <button id="toggle"><i className="fa fa-arrows-alt"></i></button>	
                    </section>
                    <form className=" navbar-left-right">
                    <input type="text"  value="Search..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search...';}"/>
                    <input type="submit" value="" className="fa fa-search"/>
                    </form>
                    <div className="clearfix"> </div>
                </div> */}

                {/* <div className="drop-men" >
                    <ul className=" nav_1">
                    
                        <li className="dropdown at-drop">
                        <a href="#" className="dropdown-toggle dropdown-at " data-toggle="dropdown"><i className="fa fa-globe"></i> 
                        <span className="number">5</span></a>
                        <ul className="dropdown-menu menu1 " role="menu">
                            <li><a href="#">
                        
                                <div className="user-new">
                                <p>New user registered</p>
                                <span>40 seconds ago</span>
                                </div>
                                <div className="user-new-left">
                            
                                <i className="fa fa-user-plus"></i>
                                </div>
                                <div className="clearfix"> </div>
                                </a></li>
                            <li><a href="#">
                                <div className="user-new">
                                <p>Someone special liked this</p>
                                <span>3 minutes ago</span>
                                </div>
                                <div className="user-new-left">
                            
                                <i className="fa fa-heart"></i>
                                </div>
                                <div className="clearfix"> </div>
                            </a></li>
                            <li><a href="#">
                                <div className="user-new">
                                <p>John cancelled the event</p>
                                <span>4 hours ago</span>
                                </div>
                                <div className="user-new-left">
                            
                                <i className="fa fa-times"></i>
                                </div>
                                <div className="clearfix"> </div>
                            </a></li>
                            <li><a href="#">
                                <div className="user-new">
                                <p>The server is status is stable</p>
                                <span>yesterday at 08:30am</span>
                                </div>
                                <div className="user-new-left">
                            
                                <i className="fa fa-info"></i>
                                </div>
                                <div className="clearfix"> </div>
                            </a></li>
                            <li><a href="#">
                                <div className="user-new">
                                <p>New comments waiting approval</p>
                                <span>Last Week</span>
                                </div>
                                <div className="user-new-left">
                            
                                <i className="fa fa-rss"></i>
                                </div>
                                <div className="clearfix"> </div>
                            </a></li>
                            <li><a href="#" className="view">View all messages</a></li>
                        </ul>
                        </li>
                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle dropdown-at" data-toggle="dropdown"><span className=" name-caret">Rackham<i className="caret"></i></span>
                        <img src="images/wo.jpg"/></a>
                        <ul className="dropdown-menu " role="menu">
                            <li><a href="profile.html"><i className="fa fa-user"></i>Edit Profile</a></li>
                            <li><a href="inbox.html"><i className="fa fa-envelope"></i>Inbox</a></li>
                            <li><a href="calendar.html"><i className="fa fa-calendar"></i>Calender</a></li>
                            <li><a href="inbox.html"><i className="fa fa-clipboard"></i>Tasks</a></li>
                        </ul>
                        </li>
                    
                    </ul>
		        </div>
			    <div className="clearfix"></div> */}

                <div className="navbar-default sidebar" role="navigation">
                    <div className="sidebar-nav navbar-collapse">
                        <ul className="nav fw" id="side-menu">

                            <li>
                                <a href="/dashboard" className=" hvr-bounce-to-right"><i className="fa fa-dashboard nav_icon "></i>
                                    <span className="nav-label">Dashboards</span> </a>
                            </li>

                            {/* <li>
                            <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-indent nav_icon"></i> <span className="nav-label">Menu Levels</span>
                            <span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li><a href="graphs.html" className=" hvr-bounce-to-right"> <i className="fa fa-area-chart nav_icon"></i>Graphs</a></li>
                                
                                <li><a href="maps.html" className=" hvr-bounce-to-right"><i className="fa fa-map-marker nav_icon"></i>Maps</a></li>
                
                                <li><a href="typography.html" className=" hvr-bounce-to-right"><i className="fa fa-file-text-o nav_icon"></i>Typography</a></li>

                            </ul>
                        </li> */}
                            {/* <li>
                            <a href="/home" className=" hvr-bounce-to-right"><i className="fa fa-inbox nav_icon"></i> <span className="nav-label">Home</span> </a>
                        </li> */}

                            <li>
                                <a href="/aboutt" className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span className="nav-label">About</span> </a>
                            </li>

                            <li>
                                <a href="/maincourse" className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span className="nav-label">Main Course</span> </a>
                            </li>
                            <li>
                                <a href="/courseindex" className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span className="nav-label">Course</span> </a>
                            </li>
                            <li>
                                <a href="/batches" className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span className="nav-label">Batch</span> </a>
                            </li>

                            <li>
                                <a href="/faqs" className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span className="nav-label">FAQ</span> </a>
                            </li>

                            {/* <li>
                            <a href="/certifications" className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span className="nav-label">Certification</span> </a>
                        </li> */}
                            <li>
                                <a href="/testimonial" className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span className="nav-label">Testimonial</span> </a>
                            </li>
                            <li>
                                <a href="/interview-sections" className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span className="nav-label">Interview Questions Sections</span> </a>
                            </li>
                            <li>
                                <a href="/interview" className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span className="nav-label">Interview Questions</span> </a>
                            </li>
                            <li>
                                <a style={{ color: '#013246' }} onClick={(event) => { handleLogout(event); }} className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span style={{ cursor: 'pointer' }} className="nav-label" >Logout</span> </a>
                            </li>
                            {/* <li>
                            <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-desktop nav_icon"></i> <span className="nav-label">Pages</span><span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li><a href="404.html" className=" hvr-bounce-to-right"> <i className="fa fa-info-circle nav_icon"></i>Error 404</a></li>
                                <li><a href="faq.html" className=" hvr-bounce-to-right"><i className="fa fa-question-circle nav_icon"></i>FAQ</a></li>
                                <li><a href="blank.html" className=" hvr-bounce-to-right"><i className="fa fa-file-o nav_icon"></i>Blank</a></li>
                        </ul>
                        </li>
                        <li>
                            <a href="layout.html" className=" hvr-bounce-to-right"><i className="fa fa-th nav_icon"></i> <span className="nav-label">Grid Layouts</span> </a>
                        </li>
                    
                        <li>
                            <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-list nav_icon"></i> <span className="nav-label">Forms</span><span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li><a href="forms.html" className=" hvr-bounce-to-right"><i className="fa fa-align-left nav_icon"></i>Basic forms</a></li>
                                <li><a href="validation.html" className=" hvr-bounce-to-right"><i className="fa fa-check-square-o nav_icon"></i>Validation</a></li>
                            </ul>
                        </li>
                    
                        <li>
                            <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-cog nav_icon"></i> <span className="nav-label">Settings</span><span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li><a href="signin.html" className=" hvr-bounce-to-right"><i className="fa fa-sign-in nav_icon"></i>Signin</a></li>
                                <li><a href="signup.html" className=" hvr-bounce-to-right"><i className="fa fa-sign-in nav_icon"></i>Singup</a></li>
                            </ul>
                        </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = ({ geral }) => {
    return {
        staticCategories: ["Popular", "Top Rated", "Upcoming"],
        genres: [{ id: 21, name: "Adventure" }, { id: 22, name: "Action" }],
        selected: '',
    };
};

export default connect(mapStateToProps)(Header);

