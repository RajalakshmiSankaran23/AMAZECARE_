import React, { useState, useEffect } from 'react';
import Footer from '../Footer/footer';
import classes from './appointmentform.module.css';
import axios from 'axios'; // Import Axios for making HTTP requests

const AppointmentForm = () => {
  const [dateTime, setDateTime] = useState('');
  const [doctor, setDoctor] = useState('');
  const [doctors, setDoctors] = useState([]); // State to store the list of doctors
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [status, setStatus] = useState('Scheduled');
  const [symptoms, setSymptoms] = useState('');
  const [natureOfVisit, setNatureOfVisit] = useState('');
  const [preferredDateTime, setPreferredDateTime] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(''); // State to manage success message

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/doctors/');
        setDoctors(response.data); // Set the fetched doctors data to state
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const fetchPatientData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/patients/${patientId}/`);
      if (response.ok) {
        const data = await response.json();
        setPatientData(data);
        setError(null);
      } else {
        const errorData = await response.json();
        setPatientData(null);
        setError(`Patient not found: ${errorData.detail}`);
      }
    } catch (error) {
      setPatientData(null);
      setError(`Failed to fetch patient data: ${error.message}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!patientData) {
      setError('Please enter a valid patient ID');
      return;
    }

    const formattedDateTime = new Date(dateTime).toISOString().slice(0, 19).replace('T', ' ');

    const formData = {
      date_time: formattedDateTime,
      doctor: parseInt(doctor),
      patient: patientData.id,
      status,
      full_name: patientData.name,
      date_of_birth: patientData.date_of_birth,
      gender: patientData.gender,
      contact_information: patientData.contact_number,
      symptoms,
      nature_of_visit: natureOfVisit,
      preferred_date_time: preferredDateTime,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/appointments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Appointment added successfully!');
        setDateTime('');
        setDoctor('');
        setPatientId('');
        setPatientData(null);
        setStatus('Scheduled');
        setSymptoms('');
        setNatureOfVisit('');
        setPreferredDateTime('');
        setError(null);
        setSuccessMessage('Appointment booked successfully!'); // Set success message
      } else {
        const errorData = await response.json();
        console.error('Failed to add appointment:', response.statusText, errorData);
        setError(`Failed to add appointment: ${response.statusText} - ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while adding the appointment');
    }
  };

  return (
    <div className={classes.MyBackground}>
      <div className={classes['appointment-form-container']}>
        <h2>Add Appointment</h2>
        <form onSubmit={handleSubmit}>
          <label>Date and Time:</label>
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
          <label>Doctor:</label>
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          >
            <option value="">Select a Doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>{doc.name}</option>
            ))}
          </select>
          <label>Patient ID:</label>
          <input
            type="text"
            value={patientId}
            onBlur={fetchPatientData}
            onChange={(e) => setPatientId(e.target.value)}
          />
          {patientData && (
            <div className={classes.patientData}>
              <p><strong>Name:</strong> {patientData.name}</p>
              <p><strong>Gender:</strong> {patientData.gender}</p>
              <p><strong>Date of Birth:</strong> {patientData.date_of_birth}</p>
              <p><strong>Contact Number:</strong> {patientData.contact_number}</p>
            </div>
          )}
          {error && <p className={classes.error}>{error}</p>}
          {successMessage && <p className={classes.success}>{successMessage}</p>} {/* Display success message */}
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
            <option value="Canceled">Canceled</option>
          </select>
          <label>Symptoms:</label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
          <label>Nature of Visit:</label>
          <input
            type="text"
            value={natureOfVisit}
            onChange={(e) => setNatureOfVisit(e.target.value)}
          />
          <label>Preferred Date and Time:</label>
          <input
            type="datetime-local"
            value={preferredDateTime}
            onChange={(e) => setPreferredDateTime(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentForm;
