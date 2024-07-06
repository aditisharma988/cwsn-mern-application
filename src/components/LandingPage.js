import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimaryGoals from './PrimaryGoals';
import Details from './Details';

import Videos from './Videos'
import SpecialActivitiesCards from './SpecialActivitiesCards';
import Story from './Story'

import ImageAndLink from './ImageAndLink';
import Footer from './Footer';


const LandingPage = () => {
  return (
    <>
    <div>
         
      <Carousel>
        
        <Carousel.Item>
         
    
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/homeclick.jpeg"}
            alt="First slide"
            
          />
          
          <Carousel.Caption >
            <h1><b>"Nothing    can     dim    the    light    that    shines    from    within.   "</b></h1>

            <h3>Hurry up book your appointments today only!!</h3>
            <Link to="/Appointment">
              <div className="slider-button">
                <button className="btn-1"><b>BOOK NOW</b></button>
              </div>
          </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/disabledhome.jpeg"}
            alt="Second slide"
          />
            
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/disboyplayhori.jpeg"}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
      <PrimaryGoals />
      <Details />
      <SpecialActivitiesCards />
   

<ImageAndLink />
<Story />

      <Videos />
      <Footer />
      </>
    
  );
};

export default LandingPage;
