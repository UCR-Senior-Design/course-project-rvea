'use client'

import { useState } from 'react';
import styles from '../../styles/ProfessorProfile.module.css'

export default function Profile() {

    const [mode, setMode] = useState(1);
    const [mode2, setMode2] = useState(1);

    return (
        <div className={styles.profileContainer}>
            <div>
                <div className={styles.col}>
                    <div className={`${styles.col_entry} ${styles.card}`}>
                        <div className={styles.card_top}>
                            <h3>General & Contact Info</h3>
                            <button className={styles.btn} onClick={() => setMode(mode == 0 ? 1 : 0)}>+</button>
                        </div>
                        <h5 className={mode ? styles.nothidden : styles.hidden}>Email: </h5>
                        <h5 className={mode ? styles.nothidden : styles.hidden}>Phone Number: </h5>
                        <h5 className={mode ? styles.nothidden : styles.hidden}>Pronouns: </h5>
                        <input className={`${styles.block} ${!mode && styles.nothidden} ${mode && styles.hidden}`} placeholder='Email'></input>
                        <input className={`${styles.block} ${!mode && styles.nothidden} ${mode && styles.hidden}`} placeholder='Phone Number'></input>
                        <input className={`${styles.block} ${!mode && styles.nothidden} ${mode && styles.hidden}`} placeholder='Pronouns'></input>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={`${styles.col_entry} ${styles.card}`}>
                        <div className={styles.card_top}>
                            <h3>Description</h3>
                            <button className={styles.btn} onClick={() => setMode2(mode2 == 0 ? 1 : 0)}>+</button>
                        </div>
                        <p className={mode2 ? styles.nothidden : styles.hidden}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda obcaecati eius
                            ducimus ad sequi a aliquam incidunt quo impedit, adipisci minima tempora nostrum
                            fugit accusamus? Aspernatur quibusdam quae quam pariatur.
                        </p>
                        <textarea className={`${!mode2 && styles.nothidden} ${mode2 && styles.hidden}`} name="description" id="description" cols="88" rows="10" placeholder='Enter your Description...'></textarea>
                    </div>
                </div>
            </div>
            <div className={styles.col}>
                <div className={`${styles.col_entry} ${styles.bar}`}>
                    <h3>Current Positions</h3>
                    <div className={styles.bar_entry}>
                        <h4>CS120B - Intro to Embedded Systems</h4>
                    </div>
                    <div className={styles.bar_entry}>
                        <h4>CS120B - Intro to Embedded Systems</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}