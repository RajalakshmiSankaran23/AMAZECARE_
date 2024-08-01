import React, { useState } from 'react';
import Footer from '../Footer/footer';
import classes from './patientform.module.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'; // Import dialog components from Material-UI

const PatientForm = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [openDialog, setOpenDialog] = useState(false); 
  const [patientId, setPatientId] = useState(''); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      gender,
      date_of_birth: dateOfBirth,
      contact_number: contactNumber
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/patients/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json(); 
        setPatientId(data.id);
        setOpenDialog(true); 
        setName('');
        setGender('');
        setDateOfBirth('');
        setContactNumber('');
      } else {
        console.error('Failed to add patient:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); 
  };

  return (
    <div className={classes['myBackground']}>
      <div className={`${classes['doctor-form-container']}`}>
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
      <div>
        <Footer />
      </div>
      {/* Dialog Box */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Patient Added</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Patient has been successfully added. The patient ID is {patientId}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PatientForm;
