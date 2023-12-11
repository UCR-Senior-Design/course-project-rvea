import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { signOut } from '../../auth';

export default function Navbar() {
    return (
        <header className={styles.navbar_container}>
            <a href="/">
                <Image className={styles.img} alt="ucr school logo" src="/ucr_logo.png" width="210" height="64"></Image>
            </a>
            <nav className={styles.navbar}>
                <ul className={`${styles.navbar_list} ${styles.navbar_list_primary}`}>
                    <li className={styles.navbar_item}><a className={styles.navbar_link} href="/student/job-listings">Job Listings</a></li>
                    <li className={styles.navbar_item}><a className={styles.navbar_link} href="/student/profile">Profile</a></li>
                    <li className={styles.navbar_item}><a className={styles.navbar_link} href="/student/rec-jobs">Recommended  Jobs</a></li>
                    <li className={styles.navbar_item}><a className={styles.navbar_link} href="/student/applied-jobs">Applied Jobs</a></li>
                </ul>
                <ul className={styles.navbar_list}>
                    <li className={styles.navbar_item}><a className={styles.navbar_link} href="/student/profile">Current User</a></li>
                    <form action={async () => {
                        'use server';
                        await signOut();
                    }}>
                        <button className={`${styles.button} ${styles.bg_blue}`}>Log out</button>
                    </form>
                </ul>
            </nav>
        </header>
    )
}
