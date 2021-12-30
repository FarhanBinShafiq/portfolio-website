import React from 'react';
import {Button, Image} from 'react-bootstrap';
import farhan from '../../Images/farhan.png'
import SocialMedia from '../SocialMedia/SocialMedia';

import './Home.css'

const Home = () => {
    return (
     

      <div className="container  w-100 h-100">
          <div className="row homebg ">
          
          <div className="col homeInformation">
               <h2>Hello, I’m Robarto Iskain.</h2>
               <p> I’m working on a professional, visually sophisticated and technologically
proficient, responsive and multi-functional React Template Imroz.</p>
                  

               <SocialMedia></SocialMedia>   
        
          <div className="homeBtn">
              <Button> Hire Me </Button> <br/>
              <Button>Download CV  </Button>
          </div>
        
             
          </div>
             
          <div className="col">
             <Image className='homepic' src={farhan}/>
          </div>
        
        </div>


      </div>
    
       
    
        
    
    );
};

export default Home;