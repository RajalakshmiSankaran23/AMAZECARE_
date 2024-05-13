import React, { useState } from 'react';

const DoctorForm = () => {
    // Define state variables for form fields
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [experience, setExperience] = useState('');
    const [designation, setDesignation] = useState('');
    const [qualification, setQualification] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here (e.g., send it to a backend server)
        console.log('Form submitted:', { name, specialty, experience, designation, qualification });
        // You can add additional logic here, such as form validation and submission to a server
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Doctor Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required // Make this field required
                />
            </div>
            <div>
                <label htmlFor="specialty">Specialty:</label>
                <input
                    type="text"
                    id="specialty"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    required // Make this field required
                />
            </div>
            <div>
                <label htmlFor="experience">Experience (in years):</label>
                <input
                    type="number"
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required // Make this field required
                />
            </div>
            <div>
                <label htmlFor="designation">Designation:</label>
                <input
                    type="text"
                    id="designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    required // Make this field required
                />
            </div>
            <div>
                <label htmlFor="qualification">Qualification:</label>
                <input
                    type="text"
                    id="qualification"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    required // Make this field required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default DoctorForm;
