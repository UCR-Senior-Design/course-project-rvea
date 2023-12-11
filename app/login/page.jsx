// app/page.jsx
import styles from '/app/styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import RegisterPage from '../app/register/register.jsx';
  

  export default function Page() {
    return (
        <>
            <Image src="/ucr_logo.png" width="210" height="64"></Image>
            <div className={styles.card}>
                <h2 className={styles.bold}>Sign in</h2>
                <input className={`${styles.border_rounded_8} ${styles.border_grey}`} placeholder="Email" type="text"></input>
                <input className={`${styles.border_rounded_8} ${styles.border_grey}`} placeholder="Password" type="text"></input>
                <button className={`${styles.button} ${styles.bg_blue} ${styles.margin_top_24}`}>Sign in</button>
                <h5 className={styles.line_through}><span>or</span></h5>
                <Link href="./register">
                <button className={`${styles.button} ${styles.bg_yellow} ${styles.margin_btm_24}`}>
                    Register Now
                </button>
                </Link>

            </div>
        </>
    )
}

