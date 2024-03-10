'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation instead of next/router
import styles from '../styles/LoginForm.module.css'; // Import styles from LoginForm.module.css

import Link from 'next/link'; 

export default function RegisterForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Perform registration logic here
        // For example, you can send the form data to your server
        // and handle the registration process
        // After successful registration, navigate to another page
        router.push('/'); // Redirect to the home page
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <form onSubmit={handleRegister}>
                <div className={styles.card}>
                    <h2 className={styles.bold}>Register</h2>
                    <input id="fullName" name="fullname" className={`${styles.border_rounded_8} ${styles.border_grey} ${styles.registerInput}`} placeholder="Full Name" type="text" value={formData.email} onChange={handleChange} />
                    <input id="email" name="email" className={`${styles.border_rounded_8} ${styles.border_grey} ${styles.registerInput}`} placeholder="Email" type="text" value={formData.email} onChange={handleChange} />
                    <input id="password" name="password" className={`${styles.border_rounded_8} ${styles.border_grey} ${styles.registerInput}`} placeholder="Password" type="password" value={formData.password} onChange={handleChange} />
                    <button className={`${styles.button_blue} ${styles.margin_top_24}`} type="submit"> Register </button>
                    <h5 className={styles.line_through}><span>or</span></h5>
                    <Link href="/" className={`${styles.button_yellow} ${styles.margin_btm_24}`}>
                    <button className={`${styles.button_yellow} ${styles.margin_btm_24}`}>Back to Login</button>
                    </Link>
                </div>
            </form>
        </>
    );
}
