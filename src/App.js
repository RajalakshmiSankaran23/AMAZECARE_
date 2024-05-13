import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Link
import './App.css';
import Home from './components/Home';
import PatientForm from './components/PatientForm';
import DoctorForm from './components/DoctorForm';
import AppointmentForm from './components/AppointmentForm';
import AboutUs from './components/Aboutus';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/patients/new">Patient</Link>
            </li>
            <li>
              <Link to="/doctors/new">Doctor</Link>
            </li>
            <li>
              <Link to="/appointments/new">Book Appointment</Link>
            </li>
            <li>
              <Link to="/aboutus/new">About us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients/new" element={<PatientForm />} />
          <Route path="/doctors/new" element={<DoctorForm />} />
          <Route path="/appointments/new" element={<AppointmentForm />} />
          <Route path="/aboutus/new" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



