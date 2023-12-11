import styles from '/app/styles.module.css';
import Image from 'next/image';
import RegisterPage from '../app/register/register.jsx';

export default function RegisterPage() {
  return (
    <>
      <Image src="/ucr_logo.png" width={210} height={64} />
      <div className={styles.card}>
        <h2 className={styles.bold}>Create Account</h2>
        <input
          className={`${styles.border_rounded_8} ${styles.border_grey}`}
          placeholder="Username"
          type="text"
        />
        <input
          className={`${styles.border_rounded_8} ${styles.border_grey}`}
          placeholder="Email"
          type="email"
        />
        <input
          className={`${styles.border_rounded_8} ${styles.border_grey}`}
          placeholder="Password"
          type="password"
        />
        <input
          className={`${styles.border_rounded_8} ${styles.border_grey}`}
          placeholder="Confirm Password"
          type="password"
        />
        <button
          className={`${styles.button} ${styles.bg_blue} ${styles.margin_top_24}`}
        >
          Register New Account
        </button>
      </div>
    </>
  );
}
