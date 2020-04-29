import React from 'react';
import Topbar from './containers/Topbar';
import Footbar from './containers/Footbar';

import './styles/main.css';
export default ({ children }) => (
    <>
        <Topbar />
        {children}
        <Footbar />
    </>
);