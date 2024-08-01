import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import classes from './doctorforms.module.css';
import Footer from '../Footer/footer';

const DoctorForm = () => {
  const { token } = useAuth(); // Get token from AuthContext

  // Define state hooks at the top of the component
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [designation, setDesignation] = useState('');
  const [contactInformation, setContactInformation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      specialty,
      experience: parseInt(experience), // Convert experience to number
      qualification,
      designation,
      contact_information: contactInformation // Use snake_case for consistency
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/doctors/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include the token in the Authorization header
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Doctor added successfully!');
        // Optionally, reset form fields after successful submission
        setName('');
        setSpecialty('');
        setExperience('');
        setQualification('');
        setDesignation('');
        setContactInformation('');
      } else {
        console.error('Failed to add doctor:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Conditional rendering based on the token
  if (!token) {
    return (
      <div className={classes['mybackground']}>
        <div className={classes['box-sign']}>
          <p className={classes['ppp']}>Hello my Dear Friend , You are not Authorized to Visit this Page.</p>
          <p className={classes['ppp']}>
            Please <Link to="/signin">Sign In</Link> to continue.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes['mybackground']}>
      <div className={classes.formContainer}>
        <h2>Add New Doctor</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <label>Specialty:</label>
          <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
          <br />
          <label>Experience (in years):</label>
          <input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} />
          <br />
          <label>Qualification:</label>
          <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} />
          <br />
          <label>Designation:</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
          <br />
          <label>Contact Information:</label>
          <input type="text" value={contactInformation} onChange={(e) => setContactInformation(e.target.value)} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorForm;
