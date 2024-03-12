'use client';

import styles from '../styles/LoginForm.module.css';
import Image from 'next/image';
import Link from 'next/link'; 
import { useFormState } from 'react-dom'; 
import { authenticate } from '../lib/actions';

export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <>
            <Image src="/ucr_logo.png" width="210" height="64" alt="ucr school logo" priority />
            <form action={dispatch}>
                <div className={styles.card}>
                    <h2 className={styles.bold}>Sign in</h2>
                    <input id="email" name="email" className={`${styles.border_rounded_8} ${styles.border_grey}`} placeholder="Email" type="text" />
                    <input id="password" name="password" className={`${styles.border_rounded_8} ${styles.border_grey}`} placeholder="Password" type="password" />
                    <button className={`${styles.button_blue} ${styles.margin_top_24}`}> Sign in </button>
                    <h5 className={styles.line_through}><span>or</span></h5>
                    <Link href="/register" className={`${styles.button_yellow} ${styles.margin_btm_24}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ margin: '0', fontSize: '13px', color: '#FFF' }}>Register</p>
                    </Link>


                </div>
            </form>
        </>
    )
}
