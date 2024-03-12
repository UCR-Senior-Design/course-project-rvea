'use client';

import { saveNewProfessor, saveNewStudent, authenticate } from '../lib/actions';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation instead of next/router
import styles from '../styles/LoginForm.module.css'; // Import styles from LoginForm.module.css
import Image from 'next/image';
import Link from 'next/link'; 

export default function RegisterForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const handleRegister = async (event) => {
        event.preventDefault();

        if (formData.password.length > 0) {

            if (formData.email.includes('student')) {

                await saveNewStudent(formData);

            } else if (formData.email.includes('prof')) {

                await saveNewProfessor(formData);

            }

            await authenticate(formData);

            router.push('/')
            
        }
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
            <Image src="/ucr_logo.png" width="210" height="64" alt="ucr school logo" priority />
            <div className={styles.toggleContainer}>
            </div>
            <form onSubmit={handleRegister}>
                <div className={styles.card}>
                    <h2 className={styles.bold}>{ 'Register' }</h2>
                    
                    <input
                        id="fullName"
                        name="fullName"
                        className={`${styles.border_rounded_8} ${styles.border_grey} ${styles.registerInput}`}
                        placeholder="Full Name"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <input
                        id="email"
                        name="email"
                        className={`${styles.border_rounded_8} ${styles.border_grey} ${styles.registerInput}`}
                        placeholder="Email"
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        id="password"
                        name="password"
                        className={`${styles.border_rounded_8} ${styles.border_grey} ${styles.registerInput}`}
                        placeholder="Password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button className={`${styles.button_blue} ${styles.margin_top_24}`} type="submit">
                        Register Now
                    </button>
                    <h5 className={styles.line_through}>
                        <span>or</span>
                    </h5>
                    <Link
                        href="/"
                        className={`${styles.button_yellow} ${styles.margin_btm_24}`}
                        style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ margin: '0', fontSize: '13px', color: '#FFF' }}>Back to Login</p>
                    </Link>
                </div>
            </form>
        </>
    );
}