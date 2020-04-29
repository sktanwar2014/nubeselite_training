import React, { useEffect, useState } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { loadReCaptcha } from 'react-recaptcha-google';

import styled from 'styled-components';

import Loader from './components/UI/Loader';

import history from './history';

// import MenuMobile from './containers/MenuMobile';
// import Sidebar from './containers/Sidebar';
// import Topbar from './containers/Topbar';
// import Footbar from './containers/Footbar';
// import SearchBar from './components/SearchBar';

// import logo from './logo.svg';
import './App.css';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import SingleCourse from './pages/SingleCourse';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import Download from './pages/Download';
import AppRoute from './AppRoute';
import MainLayout from './MainLayout';
import AdminLayout from './AdminLayout';

import Dashboard from './pages/admin/Dashboard';
import HomeIndex from './pages/admin/home/HomeIndex';
import CourseIndex from './pages/admin/course/CourseIndex';
import CourseAdd from './pages/admin/course/CourseAdd';
import AddLecture from './pages/admin/course/AddLecture';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';
import Login from './pages/Login';
import LoginLayout from './LoginLayout';
import AddTestimonial from './pages/admin/testimonial/AddTestimonial';
import Testimonial from './pages/admin/testimonial/TestimonialIndex';
import AddBatch from './pages/admin/course/AddBatch';
import Batches from './pages/admin/course/Batches';
import AddFaq from './pages/admin/course/AddFaq';
import FAQ from './pages/admin/course/FAQ';
import Certification from './pages/admin/course/Certification';
import AddCertification from './pages/admin/course/AddCertification';
import Aboutt from './pages/admin/about/About';
import EditAbout from './pages/admin/about/EditAbout';
import ChangeAbout from './pages/admin/about/ChangeAbout';
import AddInterview from './pages/admin/interview/AddInterview';
import Interview from './pages/admin/interview/Interview';
import InterviewQuestions from './pages/InterviewQuestions';
import AddInterviewSection from './pages/admin/interview/AddInterviewSection';
import Sections from './pages/admin/interview/Sections';
import MainCourses from './pages/admin/course/MainCourses';
import AddMainCourse from './pages/admin/course/AddMainCourse';
import EditMainCourse from './pages/admin/course/EditMainCourse';
import EditCourse from './pages/admin/course/EditCourse';
import EditBatch from './pages/admin/course/EditBatch';
import EditFaq from './pages/admin/course/EditFaq';
import EditTestimonial from './pages/admin/testimonial/EditTestimonial';
import EditInterview from './pages/admin/interview/EditInterview';
import EditInterviewSection from './pages/admin/interview/EditInterviewSection';
import Lectures from './pages/admin/course/Lectures';
import EditLecture from './pages/admin/course/EditLecture';

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding: 6rem 4rem;

  @media ${props => props.theme.mediaQueries.larger} {
    // padding: 6rem 3rem;
  }

  @media ${props => props.theme.mediaQueries.large} {
    // padding: 4rem 2rem;
  }
`;

const SearhBarWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  // padding: 2rem;
`;

function App({ isLoading }) {
  const [isMobile, setisMobile] = useState(null);

  // Set amount of items to show on slider based on the width of the element
  const changeMobile = () => {
    window.matchMedia('(max-width: 80em)').matches
      ? setisMobile(true)
      : setisMobile(false);
  };

  useEffect(() => {
    loadReCaptcha();
  });

  useEffect(() => {
    changeMobile();
    window.addEventListener('resize', changeMobile);
    return () => window.removeEventListener('resize', changeMobile);
  }, []);

  return isLoading ? (
    <ContentWrapper>
      <Loader />
    </ContentWrapper>
  ) : (
      <Router history={history}>
        <>
          {/* <>
           {isMobile ? (
              <MenuMobile />
            ) : (
                <>
                  <Topbar />
                  <SearhBarWrapper>
                    <SearchBar />
                  </SearhBarWrapper>
                </>
              )}
		 </> */}

          <ContentWrapper>
            <Switch>
              <AppRoute exact path={process.env.PUBLIC_URL + '/'} component={Home} layout={MainLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/about'} component={About} layout={MainLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/courses'} component={Courses} layout={MainLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/course'} component={SingleCourse} layout={MainLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/blog'} component={Blog} layout={MainLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/docs'} component={Download} layout={MainLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/schedule'} component={Schedule} layout={MainLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/contact'} component={Contact} layout={MainLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/terms'} component={Terms} layout={MainLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/privacy'} component={Privacy} layout={MainLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/interview-questions'} component={InterviewQuestions} layout={MainLayout} />

              <AppRoute exact path={process.env.PUBLIC_URL + '/login'} component={Login} layout={LoginLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/dashboard'} component={Dashboard} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/home'} component={HomeIndex} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/aboutt-add'} component={EditAbout} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/aboutt-edit'} component={ChangeAbout} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/aboutt'} component={Aboutt} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/testimonial-add'} component={AddTestimonial} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/testimonial-edit'} component={EditTestimonial} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/testimonial'} component={Testimonial} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/interview-add'} component={AddInterview} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/interview-edit'} component={EditInterview} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/interview'} component={Interview} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/interview-section-edit'} component={EditInterviewSection} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/interview-section-add'} component={AddInterviewSection} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/interview-sections'} component={Sections} layout={AdminLayout} />

              <AppRoute exact path={process.env.PUBLIC_URL + '/certification-add'} component={AddCertification} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/certifications'} component={Certification} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/faq-add'} component={AddFaq} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/faq-edit'} component={EditFaq} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/faqs'} component={FAQ} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/maincourse'} component={MainCourses} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/maincourse-edit'} component={EditMainCourse} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/main-course-add'} component={AddMainCourse} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/courseindex'} component={CourseIndex} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/course-add'} component={CourseAdd} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/course-edit'} component={EditCourse} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/lecture-add'} component={AddLecture} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/lecture-edit'} component={EditLecture} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/lectures'} component={Lectures} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/batches'} component={Batches} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/batch-add'} component={AddBatch} layout={AdminLayout} />
              <AppRoute exact path={process.env.PUBLIC_URL + '/batch-edit'} component={EditBatch} layout={AdminLayout} />

              {/* <Route
                path={process.env.PUBLIC_URL + '/schedule'}
                exact
                render={() => (
                  <Schedule />
                )}
              /> 
              <Route
                path={process.env.PUBLIC_URL + '/contact'}
                exact
                render={() => (
                  <Contact />
                )}
              />*/}
            </Switch>
          </ContentWrapper>
        </>
        {/* <Footbar/> */}
      </Router>
    );
}

export default App;
