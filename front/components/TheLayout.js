import Header from './Header';
import React from 'react';

const style = {
    layout: {
        margin: 12,
        padding: 12,
        border: '1px solid #DDD'
    },
    appBar: {
        margin: -10,
        padding: 0,
    },
  };

const Layout = (props) => (
    <div style={style.appBar}>
        <Header />
        <div style={style.layout}>
        {/* the props.children is the content of the page */}
        {props.children}
        </div>
    </div>
);


export default Layout;