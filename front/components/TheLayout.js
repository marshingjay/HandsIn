import Header from './Header';
import React from 'react';

const layoutStyle = {
    margin: 12,
    padding: 12,
    border: '1px solid #DDD'
};

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {/* the props.children is the content of the page */}
        {props.children}
    </div>
);


export default Layout;