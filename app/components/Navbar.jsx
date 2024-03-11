'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { SignOut } from '../lib/actions';
import { useState } from 'react';

export default function Navbar(props) {
    const routes = props.routes;
    console.log(props.routes);
    const { data: session } = useSession();
    const [userName, setUserName] = useState(session?.user?.name);

    return (
        <header className={styles.navbar_container}>
            <a href="/">
                <Image className={styles.img} alt="ucr school logo" src="/ucr_logo.png" width="210" height="64"></Image>
            </a>
            <nav className={styles.navbar}>
                <ul className={`${styles.navbar_list} ${styles.navbar_list_primary}`}>
                    {
                        routes.map((route, index) => {
                            return (
                                <li key={index} className={styles.navbar_item}><a key={index * 10} className={styles.navbar_link} href={route.link}>{route.name}</a></li>
                            )
                        })
                    }
                </ul>
                <ul className={styles.navbar_list}>
                    <li className={styles.navbar_item}><a className={styles.navbar_link} href="/student/profile">{userName}</a></li>
                    <form action={SignOut}>
                        <button className={`${styles.button} ${styles.bg_blue}`}>Log out</button>
                    </form>
                </ul>
            </nav>
        </header>
    );
}
