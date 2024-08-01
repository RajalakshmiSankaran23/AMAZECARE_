import React from 'react';
import './careers.css';
import Footer from '../Footer/footer';

function JobOpening({ title, department ,qualification }) {
    return (
        <div className="job-opening">
            <h4>{title}</h4>
            <div className="job-details">
                <div className="detail">
                    <h6>Department</h6>
                    <p>{department}</p>
                </div>
                <div className="detail">
                    <h6>Qualification</h6>
                    <p>{qualification}</p>
                </div>
            </div>
            <p>Send your resume to "amzcare_007@gmail.com"</p>
        </div>
    );
}

function Careers() {
    return (
        <div className='my-background'>
        <div className="careers-container">
            
            <h3>To Care. To Teach. To Grow.</h3>
            <p>These words embody the opportunities available to doctors, nurses, lecturers, technicians and support staff who seek to grow their careers and experience the meaning of growing together. We are proud of our institution’s code of ethics, transparency, credibility and today we’ve grown to over 2000 employees to make BBH a place that people love to come to work every day. Caring for patients and their families; spearheading medical knowledge, technologies and practices; educating future healthcare professionals – you can help us with this and more when you join us.</p>
            <div>
                {/* Display job openings */}
                <JobOpening 
                    title="Senior Consultant: Emergency Medicine" 
                    department="Emergency Medicine" 
                    qualification="MD/DNB Emergency Medicine (10+ Years of Experience)" 
                />
                <JobOpening 
                    title="Fetal Medicine Consultant" 
                    department="OBG Department" 
                    qualification="MS/DNB/ Fellowship in Fetal Medicine with 0-5 years experience" 
                />
                {/* Add more job openings as needed */}
            </div>
            
            {/* Testimonials section */}
            <h2>Testimonials</h2>
            <div className="quotes-box">
                <div className="quote">
                    <p>"It has been a amazing journey at Amaze Care."</p>
                    <p>Dr. Murugan </p>
                </div>
                <div className="quote">
                    <p>"A Dream come true for a perfect work environment".</p>
                    <p>Dr. Kayal</p>
                </div>
            </div>
            <Footer/>
        </div>
        </div>
    );
}

export default Careers;