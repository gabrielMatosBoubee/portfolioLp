import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
    return (
    <div style={{'margin': '1% 5% 1% 5%'}}>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
    </div>
    );
}

export default Layout;