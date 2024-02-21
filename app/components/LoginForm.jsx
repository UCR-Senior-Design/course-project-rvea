'use client';

import styles from '../styles/LoginForm.module.css';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '../lib/actions';


export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <>
            <Image src="/ucr_logo.png" width="210" height="64" alt="ucr school logo" priority></Image>
            <form action={dispatch}>
                <div className={styles.card}>
                    <h2 className={styles.bold}>Sign in</h2>
                    <input id="email" name="email" className={`${styles.border_rounded_8} ${styles.border_grey}`} placeholder="Email" type="text"></input>
                    <input id="password"  name="password" className={`${styles.border_rounded_8} ${styles.border_grey}`} placeholder="Password" type="password"></input>
                    <button className={`${styles.button_blue} ${styles.margin_top_24}`}> Sign in </button>
                    <h5 className={styles.line_through}><span>or</span></h5>
                    <button className={`${styles.button_yellow} ${styles.margin_btm_24}`}>Register Now</button>
                </div>
            </form>
        </>
    )
}