'use client';
import { useState } from "react";
import styles from "../styles/AppliedJobs.module.css";
import Popup from "./popup";

export default function AppliedJobs(props) {
    const appliedJobs = props.appliedJobs;
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className={styles.container}>
            {
                appliedJobs.map((job, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <div className={styles.card_top}>
                                <img src="/cs_icon.png" alt="cs icon for cards" width="55" height="60" />
                                <div className={styles.card_info}>
                                    <h4>{job.Title + "-" + job.Term + "-" + job.Position}</h4>
                                    <h4>{job.Professor}</h4>
                                </div>
                                <button className={`${styles.button} ${styles.bg_yellow}`} onClick={() => { setButtonPopup(true); document.body.style.overflow = "hidden" }}>View</button>
                            </div>
                            <p className={styles.card_description}>{job.Description}</p>
                            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <object data="/mock_contract.pdf" type="application/pdf" width="1000" height="800"></object>
                            </Popup>
                        </div>
                    );
                })
            }
        </div>);
}