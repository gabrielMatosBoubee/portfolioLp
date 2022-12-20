import React from 'react';
import Header from './Header';

function Layout({ children }) {
    return (
    <div style={{'margin': '5%'}}>
        <Header />
        <div>
          {children}
        </div>
    </div>
    );
}

export default Layout;