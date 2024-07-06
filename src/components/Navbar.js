// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo-container">
        <img src="images/logo-removebg-preview.png" alt="Logo" className="logo" />
        <h3>IgniMindz</h3>
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <Link to="/">
//         <div className="logo-container">
//           <img src="images/logo-removebg-preview.png" alt="Logo" className="logo" />
//           <h3>Special Needs App</h3>
//         </div>
//       </Link>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/events">Events</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/signin">Sign In</Link></li>
//           <li><Link to="/signup">Sign Up</Link></li>
//           <li><Link to="/contact-us">Contact Us</Link></li>
//           {/* Add more navigation links as needed */}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //   return (
 
// //       <div className="navbar">
// //         <Link to="/">
// //           <div className="logo-container">
// //             <img src="images/logo-removebg-preview.png" alt="Logo" className="logo" />
// //             <h3>Special Needs App</h3>
// //           </div>
// //         </Link>
// //         <nav>
// //           <ul>
// //             <li><Link to="/">Home</Link></li>
// //             <li><Link to="/events">Events</Link></li>
// //             <li><Link to="/about">About</Link></li>
// //             <li><Link to="/signin">Sign In</Link></li>
// //             <li><Link to="/signup">Sign Up</Link></li>
// //             <li><Link to="/contact-us">Contact Us</Link></li>
// //             {/* Add more navigation links as needed */}
// //           </ul>
// //         </nav>
// //       </div>
 
// //   );
// // };

// // export default Navbar;



// // // import React from 'react';
// // // import { Link } from 'react-router-dom';

// // // const Navbar = () => {
// // //   return (
// // //     <header>
// // //       <div className="navbar">
// // //         <Link to="/">

// // //           <h3>Special Needs App</h3>
          
// // //         </Link>
// // //         <nav>
// // //           <ul>
// // //             <li><Link to="/">Home</Link></li>
// // //             <li><Link to="/events">Events</Link></li>
// // //             <li><Link to="/about">About</Link></li>
// // //             <li><Link to="/signin">Sign In</Link></li>
// // //             <li><Link to="/signup">Sign Up</Link></li>
// // //             <li><Link to="/contact-us">Contact Us</Link></li>
// // //             {/* Add more navigation links as needed */}
// // //           </ul>
// // //         </nav>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;
