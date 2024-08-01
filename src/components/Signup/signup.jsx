import React, { useState } from 'react';
import axios from 'axios';
import styles from './signup.module.css'; 


const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/signup/', {
                username,
                password,
            });
            console.log(response.data);
            console.log('Registered  successfully')
            // Handle success
        } catch (error) {
            console.error(error); // Handle error
        }
    };

    return (
        <div className={styles.backgroundsignup}>
        <div className={styles.signupContainer}> {/* Use CSS module class */}
            <form className={styles.signupForm} onSubmit={handleSubmit}> {/* Use CSS module class */}
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.signupInput} /> {/* Use CSS module class */}
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.signupInput} /> {/* Use CSS module class */}
                <button type="submit" className={styles.signupButton}>Register</button> {/* Use CSS module class */}
            </form>
        </div>
        </div>
       
    );
};

export default SignupForm;
