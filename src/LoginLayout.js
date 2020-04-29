import React from 'react';
import Header from './containers/Admin/Header';
import Footer from './containers/Admin/Footer';
import '../src/styles/admin/style.css';
import '../src/styles/admin/custom.css';
import '../src/styles/admin/clndr.css'; 
export default ({ children })=>(
    <>
        <div style={{width:'100%'}}>
            {children}
        </div>
    </>
);