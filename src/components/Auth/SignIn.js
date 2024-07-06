import React, { useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { dispatch } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!email || !password) {
      setError("Please fill out all the required fields");
      return;
    }

    const user = {
      email,
      password,
    };

    const response = await fetch("/api/router/getUser", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
try{
    const json = await response.json();

    if (!response.ok) {

      // Handle specific errors
      if (json.error === 'User not found') {
        setError('User not found');
      } else if (json.error === 'Incorrect password') {
        setError('Incorrect password');
      } else {
        setError('Unexpected error occurred');
      }
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
      setValidationErrors(json.validationErrors || {});
      return;
    }

    // Clear errors and fields on success
    setEmail("");
    setPassword("");
    setError(null);
    setEmptyFields([]);
    setValidationErrors({});

// Handle successful sign-in, for example, dispatch an action
dispatch({ type: "USER_SIGNED_IN", payload: json });


   navigate('/')
  } catch (error) {
    // Handle non-JSON response (e.g., HTML)
    setError('Unexpected response from the server');
  }
};

  return (
    <div className="signin-container">
      <form className="forms" onSubmit={handleSubmit}>
        <h3>SignIn Form</h3>

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
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

        <div className="button">
          <button type="submit">Submit</button>
        </div>

        {error && <div className="error">{error}</div>}

        <div className="error-messages">
          {validationErrors.email && (
            <div className="error">{validationErrors.email}</div>
          )}
          {validationErrors.password && (
            <div className="error">{validationErrors.password}</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
