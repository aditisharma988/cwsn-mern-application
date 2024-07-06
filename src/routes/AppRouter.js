import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LandingPage from '../components/LandingPage';

import About from '../components/About';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';

import PrimaryGoals from '../components/PrimaryGoals';
import Details1 from '../components/Details';

import Videos from './components/Videos';
import SpecialActivitiesCards from '../components/SpecialActivitiesCards';
import Story from'../components/Story';
import ImageAndLink from '../components/ImageAndLink';
import DisordersClassificationSymptoms from '../components/DisordersClassificationSymptoms';
import Contact from '../components/Contact';
import Events from './components/Events';
import Footer from '../components/Footer';

const AppRouter = () => {
  return (
 
      <BrowserRouter>
       
      <Navbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/primary-goals" exact element={<PrimaryGoals />} />
          <Route path ="/details1" exact element={<Details1 />} />
          <Route path ="/imageandlink" exact element={<ImageAndLink />} />
          <Route path="/videos" exact element={<Videos />} />
          <Route path="/special-activities" exact element={<SpecialActivitiesCards />} />
          <Route path="/classification-symptoms" exact element={<DisordersClassificationSymptoms />} />
          <Route path="/contact-us" exact element={<Contact />} />
          <Route path="/events" exact element={<Events />} />
          <Route path="/story" exact element ={<Story />} />
          <Route path="/footer" exact element={<Footer />} />

                  </Routes>
        {/* <Navbar /> 
        <LandingPage /> */} 
        <DisordersClassificationSymptoms />
    
        
        <Contact />
        
      </BrowserRouter>

  );
};

export default AppRouter;
