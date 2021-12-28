import React from 'react';
import { Card, Figure, Image } from 'react-bootstrap';
import farhan from '../../Images/farhan.jpg'
import './Home.css'

const Home = () => {
    return (
    
    <div className='container'>
        <div>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        </div>

        <div>
        <Figure>
  <Figure.Image
    width={471}
    height={280}
    alt="171x180"
    src={farhan}
  />
 
</Figure>
                

        </div>

    </div>
     
        
    
    );
};

export default Home;