"use client"; //makes page interactable with user instead of just rendering on server

import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
//import {redirect} from 'next/navigation'

export default function Navbar() {

    function handleClick() {
        //sign out user
        //reroute to login page
        location.href = '/';
        
    }

    return(
        <div className={styles.navbar}>
            <Image className={styles.image} src="/ucr_logo.png" width="210" height="64"></Image>
            <nav>
                <Link className={styles.links} href='/'>Login</Link>
                <Link className={styles.links} href='/student/job-listings'>Job Listings</Link>
                <Link className={styles.links} href='/student/rec-jobs'>Recommended Jobs</Link>
                <Link className={styles.links} href='/student/applied-jobs'>Applied Jobs</Link>
                <Link className={styles.links} href='/student/profile'>Profile</Link>
            </nav>
                <div className={styles.signout}>
                    <p>Hello [Current User]</p>
                    <button className={styles.button} onClick={handleClick}>Sign Out</button>
                </div>
        </div>
    )
}
