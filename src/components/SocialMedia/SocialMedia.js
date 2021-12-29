import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faGithub,faFacebook,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './SocialMedia.css'


const SocialMedia = () => {
    return (
        <div className='socialMedia'>
            <a href='https://www.facebook.com/FarhanBShafiq'><FontAwesomeIcon icon={faFacebook} size='2x'/></a>
            <a href='https://github.com/FarhanBinShafiq'><FontAwesomeIcon icon={faGithub} size='2x'/></a>
            <a href='https://www.linkedin.com/in/farhan-bin-shafiq-5992ab199/'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
            <a href='https://www.instagram.com/farhan_bin_shafiq/'><FontAwesomeIcon icon={faInstagram} size='2x'/></a>
        </div>
       
    );
};

export default SocialMedia;