// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="quote-container">
        <p className="quote">
          <span className="quote-mark">“</span>
          Everybody is a genius, but if you judge a fish by its ability to climb a tree,<br></br>
          it will live its whole life believing that it is stupid.
          <span className="quote-mark">”</span>
        </p>
        <div className="links">
          <a href="/contact-us">Contact Us</a>
          <a href="/home">Home</a>
          <a href="/classification-symptoms">Disabilities</a>
          <a href="/events">Events</a>
        </div>
      </div>
      <div className="footer-content">
        <p>&copy; 2023 IgniMindz. All rights reserved. | TM Mark</p>
      </div>
    </footer>
  );
};

export default Footer;
