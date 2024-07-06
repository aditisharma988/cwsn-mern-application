// Contact.js

import React, { useState } from "react";

import { useUserContext } from "../hooks/useUserContext";

const Contact = () => {
  const { dispatch } = useUserContext();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState("");
// eslint-disable-next-line
  const [invalidEmail, setInvalidEmail] = useState(false); 
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [selectedDisorder, setSelectedDisorder] = useState('');

  // eslint-disable-next-line
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, age, gender, selectedDisorder, email, contactNo);

   

    // Validate other required fields
    if (!name || !age || !gender || !selectedDisorder || !email || !password || !contactNo) {
      // setError("Please fill out all the required fields");
      return;
    }
// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  setInvalidEmail(true);
  // setError("Invalid email format");
  return;
} else {
  setInvalidEmail(false); // Reset the invalid email state if the email is valid
}


    


    const user = {
      name,
      
      email,
     
      contactNo, disorder: selectedDisorder,
      
    };
    console.log('User data:', user);
    const response = await fetch('/api/router/createUser', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();
    console.log(json);

    if (!response.ok) {
    
      return;
    }

     // Check for specific validation errors
     if (json.validationErrors && json.validationErrors.includes('Invalid email format')) {
      setInvalidEmail(true);
    }

    if (response.ok) {
      setName('');
     
      setEmail("");
      
      setContactNo("");
      
  
     
      console.log('New User Added');
      dispatch({ type: 'USER_CREATED', payload: json })
    }
  };
  return (
    <section id="contact-us" className="contact-us">
      <div className="contact-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="google-map">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-73.9876543!3d40.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA0JzEwLjQiTiA3M8KwMTInMjcuOSJX!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen="" loading="eager"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form">
              <h2>Subscribe to our Newsletter</h2>
              {/* <img src="images/contact.jpg" alt="Contact Us" /> */}
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit"><b>Send Message</b></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
