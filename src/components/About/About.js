import React from 'react';
import {Image} from 'react-bootstrap';
import farhan from '../../Images/farhan.png'
import './About.css'

const About = () => {
    return (
        <div className="container  w-100 h-100">
          <div className="row aboutbg ">
                <h2>About Me</h2>
          <div className="col">
             <Image className='aboutpic' src={farhan}/>
          </div>   
          
          <div className="col aboutInformation">
                
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  

               
        
             
          </div>
             
       
        
        </div>


      </div>
    );
};

export default About;