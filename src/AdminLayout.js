import React from 'react';
import Header from './containers/Admin/Header';
import Footer from './containers/Admin/Footer';
import '../src/styles/admin/style.css';
import '../src/styles/admin/custom.css';
import '../src/styles/admin/clndr.css'; 
export default ({ children })=>(
    <>
    <div style={{width:'100%'}}>
        <Header />
        
        <div id="page-wrapper" className="gray-bg dashbard-1">
            <div className="content-main">
                <div className="banner">
            
                    <h2>
                    <a href="index.html">Home</a>
                    <i className="fa fa-angle-right"></i>
                    <span>Dashboard</span>
                    </h2>
                </div>
                
            {children}
            </div>
        </div>
        <Footer />
        </div>
    </>
);