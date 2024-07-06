import React, { useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import bcrypt from "bcryptjs";

const disorderOptions = [
  "Autism",
  "Down Syndrome",
  "Mental Retardation",
  "Muscular Dystrophy",
  "Cerebral Palsy",
  "Other"
];

const SignUp = () => {
  const { dispatch } = useUserContext();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [selectedDisorder, setSelectedDisorder] = useState("");
  const [customDisorder, setCustomDisorder] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate other required fields
    if (!name || !age || !gender || !selectedDisorder || !email || !password || !contactNo) {
      setError("Please fill out all the required fields");
      return;
    }

    // Validate age
    if (age !== '' && age < 0) {
      setError("Age cannot be a negative number");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setInvalidEmail(true);
      setError("Invalid email format");
      return;
    } else {
      setInvalidEmail(false);
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = {
      name,
      age,
      gender,
      email,
      password: hashedPassword, // Include the original password here
      contactNo,
      disorder: selectedDisorder || customDisorder,
      date: new Date(),
    };

    console.log('User data:', user);

    const response = await fetch('/api/router/createUser', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();
    console.log('Response from server:', json); 

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
      setValidationErrors(json.validationErrors || {});
      return;
    }

    // Check for specific validation errors
    if (json.validationErrors && json.validationErrors.includes('Invalid email format')) {
      setInvalidEmail(true);
    }

    if (response.ok) {
      setName('');
      setAge('');
      setGender('');
      setEmail("");
      setPassword(""); // Clear the password after submission
      setContactNo("");
      setSelectedDisorder('');
      setError(null);
      setEmptyFields([]);
      setValidationErrors({});
      console.log('New User Added');
      dispatch({ type: 'USER_CREATED', payload: json });
    }
  };

  return (
    <div className="signup-container">
      <form className="forms" onSubmit={handleSubmit}>
        <h3>SignUp Form</h3>

        <label>Name</label>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={emptyFields.includes('name') ? 'error' : ''}
        />

        <label>Age</label>
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          className={emptyFields.includes('age') ? 'error' : ''}
        />

        <label>Gender</label>
        <input
          type="text"
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          className={emptyFields.includes('gender') ? 'error' : ''}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            setInvalidEmail(false);
          }}
          value={email}
          className={emptyFields.includes("email") ? "error" : ""}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className={emptyFields.includes("password") ? "error" : ""}
        />

        <label>Contact Number</label>
        <input
          type="text"
          placeholder="Contact Number"
          onChange={(e) => setContactNo(e.target.value)}
          value={contactNo}
          className={emptyFields.includes("contactNo") ? "error" : ""}
        />

        <div className="disorder-options">
          <label>Disorder</label>
          <select
            onChange={(e) => setSelectedDisorder(e.target.value)}
            value={selectedDisorder}
            className={emptyFields.includes('disorder') ? 'error' : ''}
          >
            <option value="">Select Disorder</option>
            {disorderOptions.map((disorder) => (
              <option key={disorder} value={disorder}>
                {disorder}
              </option>
            ))}
          </select>

          {selectedDisorder === "Other" && (
            <input
              type="text"
              placeholder="Enter Other Disorder"
              onChange={(e) => setCustomDisorder(e.target.value)}
              value={customDisorder}
            />
          )}
        </div>

        <div className="button">
          <button type="submit">Submit</button>
        </div>

        {error && <div className="error">{error}</div>}

        <div className="error-messages">
          {validationErrors.name && <div className="error">{validationErrors.name}</div>}
          {validationErrors.age && <div className="error">{validationErrors.age}</div>}
          {validationErrors.gender && <div className="error">{validationErrors.gender}</div>}
          {validationErrors.email && <div className="error">{validationErrors.email}</div>}
          {validationErrors.password && <div className="error">{validationErrors.password}</div>}
          {validationErrors.contactNo && <div className="error">{validationErrors.contactNo}</div>}
          {validationErrors.disorder && <div className="error">{validationErrors.disorder}</div>}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
// import React, { useState } from "react";
// import { useUserContext } from "../../hooks/useUserContext";
// import bcrypt from "bcryptjs";

// const disorderOptions = [
//   "Autism",
//   "Down Syndrome",
//   "Mental Retardation",
//   "Muscular Dystrophy",
//   "Cerebral Palsy",
//   "Other"
// ];

// const SignUp = () => {
//   const { dispatch } = useUserContext();
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [email, setEmail] = useState("");
//   const [invalidEmail, setInvalidEmail] = useState(false);
//   const [password, setPassword] = useState("");
//   const [contactNo, setContactNo] = useState("");
//   const [selectedDisorder, setSelectedDisorder] = useState("");
//   const [customDisorder, setCustomDisorder] = useState("");
//   const [error, setError] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);
//   const [validationErrors, setValidationErrors] = useState({});

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate other required fields
//     if (!name || !age || !gender || !selectedDisorder || !email || !hashedPassword || !contactNo) {
//       setError("Please fill out all the required fields");
//       return;
//     }

//     // Validate age
//     if (age !== '' && age < 0) {
//       setError("Age cannot be a negative number");
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setInvalidEmail(true);
//       setError("Invalid email format");
//       return;
//     } else {
//       setInvalidEmail(false);
//     }

//     const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const user = {
//       name,
//       age,
//       gender,
//       email,
//       password: hashedPassword, // Include the original password here
//       contactNo,
//       disorder: selectedDisorder || customDisorder,
//       date: new Date(),
//     };

//     console.log('User data:', user);

//     const response = await fetch('/api/router/createUser', {
//       method: 'POST',
//       body: JSON.stringify(user),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const json = await response.json();
//     console.log('Response from server:', json); 

//     if (!response.ok) {
//       setError(json.error);
//       setEmptyFields(json.emptyFields || []);
//       setValidationErrors(json.validationErrors || {});
//       return;
//     }

//     // Check for specific validation errors
//     if (json.validationErrors && json.validationErrors.includes('Invalid email format')) {
//       setInvalidEmail(true);
//     }

//     if (response.ok) {
//       setName('');
//       setAge('');
//       setGender('');
//       setEmail("");
//       setPassword(""); // Clear the password after submission
//       setContactNo("");
//       setSelectedDisorder('');
//       setError(null);
//       setEmptyFields([]);
//       setValidationErrors({});
//       console.log('New User Added');
//       dispatch({ type: 'USER_CREATED', payload: json });
//     }
//   };

//   return (
//     <div className="signup-container">
//       <form className="forms" onSubmit={handleSubmit}>
//         <h3>SignUp Form</h3>

//         <label>Name</label>
//         <input
//           type="text"
//           placeholder="Full Name"
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           className={emptyFields.includes('name') ? 'error' : ''}
//         />

//         <label>Age</label>
//         <input
//           type="number"
//           placeholder="Age"
//           onChange={(e) => setAge(e.target.value)}
//           value={age}
//           className={emptyFields.includes('age') ? 'error' : ''}
//         />

//         <label>Gender</label>
//         <input
//           type="text"
//           placeholder="Gender"
//           onChange={(e) => setGender(e.target.value)}
//           value={gender}
//           className={emptyFields.includes('gender') ? 'error' : ''}
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//             setInvalidEmail(false);
//           }}
//           value={email}
//           className={emptyFields.includes("email") ? "error" : ""}
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           className={emptyFields.includes("password") ? "error" : ""}
//         />

//         <label>Contact Number</label>
//         <input
//           type="text"
//           placeholder="Contact Number"
//           onChange={(e) => setContactNo(e.target.value)}
//           value={contactNo}
//           className={emptyFields.includes("contactNo") ? "error" : ""}
//         />

//         <div className="disorder-options">
//           <label>Disorder</label>
//           <select
//             onChange={(e) => setSelectedDisorder(e.target.value)}
//             value={selectedDisorder}
//             className={emptyFields.includes('disorderr') ? 'error' : ''}
//           >
//             <option value="">Select Disorder</option>
//             {disorderOptions.map((disorder) => (
//               <option key={disorder} value={disorder}>
//                 {disorder}
//               </option>
//             ))}
//           </select>

//           {selectedDisorder === "Other" && (
//             <input
//               type="text"
//               placeholder="Enter Other Disorder"
//               onChange={(e) => setCustomDisorder(e.target.value)}
//               value={customDisorder}
//             />
//           )}
//         </div>

//         <div className="button">
//           <button>Submit</button>
//         </div>
//         {error && <div className="error">{error}</div>}

//         <div className="error-messages">
//           {validationErrors.name && <div className="error">{validationErrors.name}</div>}
//           {validationErrors.age && <div className="error">{validationErrors.age}</div>}
//           {validationErrors.gender && <div className="error">{validationErrors.gender}</div>}
//           {validationErrors.email && <div className="error">{validationErrors.email}</div>}
//           {validationErrors.password && <div className="error">{validationErrors.password}</div>}
//           {validationErrors.contactNo && <div className="error">{validationErrors.contactNo}</div>}
//           {validationErrors.disorder && <div className="error">{validationErrors.disorder}</div>}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
