// ImageAndLink.js
import React from 'react';
import { Link } from 'react-router-dom';

const ImageAndLink = () => {
  
//   const handleClick = async () => {
//     try {
//     //   const response = await fetch('https://api.example.com/data');
//       const data = await response.json();
//       console.log('Fetched data:', data);
//       // Add logic to handle the fetched data here
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Add error handling logic here
//     }
//   };

  return (
    <div className="image-and-link-container">
      <div className="image-container">
        {/* <DisordersClassificationSymptoms /> */}
        <img
          src="images/internationalday.webp"
          alt="Description of the image"
          className="image"
        />
      </div>
      <div className="text-container">
        <p className="link-text">
          To know more about types of disabilities,{' '}
          <Link to="/classification-symptoms" className="click-here" >
            click here
       </Link>
        </p>
      </div>
    </div>
  );
};

export default ImageAndLink;
