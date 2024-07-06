// Appointment.js
import React, { useState } from 'react';



const disorderOptions = [
  'Autism',
  'Down Syndrome',
  'Mental Retardation',
  'Muscular Dystrophy',
  'Cerebral Palsy',
  'Other'
];

const Appointment = () => {
  const [name, setName] = useState('');

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [disorderType, setDisorderType] = useState('');
  const [date, setDate] = useState('');
  const [contactNo, setContactNo] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault();

  
  try {
    const response = await fetch('/api/router/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        age,
        gender,
        email,
        disorderType,
        date,
        contactNo,
      }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Form submitted successfully', data);
      // Add any further actions upon successful submission
  
    } catch (error) {
      console.error('Form submission failed', error);
      // Add error handling logic, e.g., show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />


      <label>Age</label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />

      <label>Gender</label>
      <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />

      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Disorder Type</label>
      <select value={disorderType} onChange={(e) => setDisorderType(e.target.value)} required>
        <option value="">Select Disorder</option>
        {disorderOptions.map((disorder) => (
          <option key={disorder} value={disorder}>
            {disorder}
          </option>
        ))}
      </select>

      <label>Date</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} required />


      <label htmlFor="contactNo">Contact Number</label>
<input type="tel" id="contactNo" value={contactNo} onChange={(e) => setContactNo(e.target.value)} required />


      <button type="submit">Submit</button>
    </form>
  );
};

export default Appointment;
