'use client'

import { useState } from 'react';
import styles from '../styles/ProfessorProfile.module.css';
import { saveProfessorInfo } from '../lib/actions';

export default function ProfessorProfilePage(props) {
    const profileInfo = props.profileInfo;

    const [mode, setMode] = useState(1);
    const [mode2, setMode2] = useState(1);

    return (
        <div className={styles.profileContainer}>
            <div>
                <div className={styles.col}>
                    <div className={`${styles.col_entry} ${styles.card}`}>
                        <div className={styles.card_top}>
                            <h3>General & Contact Info</h3>
                            <button type="submit" form="professor-info-general" className={styles.btn} onClick={() => setMode(mode == 0 ? 1 : 0)} formAction={() => saveProfessorInfo(mode, profileInfo)}>+</button>
                        </div>
                        <h5 className={mode ? styles.nothidden : styles.hidden}>Email: {profileInfo.Email}</h5>
                        <h5 className={mode ? styles.nothidden : styles.hidden}>Phone Number: {profileInfo.phone_number}</h5>
                        <h5 className={mode ? styles.nothidden : styles.hidden}>Pronouns: {profileInfo.pronouns}</h5>
                        <form id="professor-info-general">
                            <input className={`${styles.block} ${!mode && styles.nothidden} ${mode && styles.hidden}`} placeholder='Email' defaultValue={profileInfo.email} onChange={(e) => e.target.value ? profileInfo.email = e.target.value : profileInfo}></input>
                            <input className={`${styles.block} ${!mode && styles.nothidden} ${mode && styles.hidden}`} placeholder='Phone Number' defaultValue={profileInfo.phone_number} onChange={(e) => e.target.value ? profileInfo.phone_number = e.target.value : profileInfo}></input>
                            <input className={`${styles.block} ${!mode && styles.nothidden} ${mode && styles.hidden}`} placeholder='Pronouns' defaultValue={profileInfo.pronouns} onChange={(e) => e.target.value ? profileInfo.pronouns = e.target.value : profileInfo}></input>
                        </form>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={`${styles.col_entry} ${styles.card}`}>
                        <div className={styles.card_top}>
                            <h3>Description</h3>
                            <button type="submit" form="professor-info-description" className={styles.btn} onClick={() => setMode2(mode2 == 0 ? 1 : 0)} formAction={() => saveProfessorInfo(mode2, profileInfo)}>+</button>
                        </div>
                        <p className={mode2 ? styles.nothidden : styles.hidden}>{profileInfo.description}</p>
                        <form id="professor-info-description">
                            <textarea className={`${!mode2 && styles.nothidden} ${mode2 && styles.hidden}`} name="description" id="description" cols="88" rows="10" placeholder='Enter your Description...' defaultValue={profileInfo.description} onChange={(e) => e.target.value ? profileInfo.description = e.target.value : profileInfo}></textarea>
                        </form>
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
