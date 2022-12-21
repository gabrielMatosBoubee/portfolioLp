import React from 'react';
import linkedinIcon from '../icons/linkedin.svg'
import githubIcon from '../icons/miniGithubGrey.svg'

function LinksOutside() {
    return (
        <div>
          <a
          style={{'margin': '5px'}} 
          href="https://www.linkedin.com/in/gabriel-matos-boubee/"
          target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="linkedin link" />
          </a>
          <a 
          href="https://github.com/gabrielMatosBoubee" 
          target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="github link" />
          </a>    
        </div>
    );
}

export default LinksOutside;