import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
    return (
    <div className='layout'>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
    </div>
    );
}

export default Layout;