import React, { useState } from 'react';

const AppointmentForm = () => {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [contactInformation, setContactInformation] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [natureOfVisit, setNatureOfVisit] = useState('');
  const [preferredDateTime, setPreferredDateTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to the backend or perform any other action
    console.log('Form submitted:', { fullName, dateOfBirth, gender, contactInformation, symptoms, natureOfVisit, preferredDateTime });
  };

  return (
    <div>
      <h2>Add Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <br />
        <label>Date of Birth:</label>
        <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        <br />
        <label>Gender:</label>
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        <br />
        <label>Contact Information:</label>
        <input type="text" value={contactInformation} onChange={(e) => setContactInformation(e.target.value)} />
        <br />
        <label>Symptoms:</label>
        <input type="text" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} />
        <br />
        <label>Nature of Visit:</label>
        <input type="text" value={natureOfVisit} onChange={(e) => setNatureOfVisit(e.target.value)} />
        <br />
        <label>Preferred Date and Time:</label>
        <input type="datetime-local" value={preferredDateTime} onChange={(e) => setPreferredDateTime(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;