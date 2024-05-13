import React, { useState } from 'react';

const PatientForm = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to the backend or perform any other action
    console.log('Form submitted:', { name, gender, dateOfBirth, contactNumber });
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Gender:</label>
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        <br />
        <label>Date of Birth:</label>
        <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        <br />
        <label>Contact Number:</label>
        <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatientForm;