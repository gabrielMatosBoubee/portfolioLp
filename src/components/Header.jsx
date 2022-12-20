import React from 'react';
import { Link } from 'react-browser-router'

function Header() {
    return (
        <header>
          <Link to='/home'>Home</Link>
          <Link to='/about'>About</Link> 
          <Link to='/techStacks'>Tech Stacks</Link> 
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>   
        </header>
    );
}

export default Header;