'use client'
import styles from '../../styles/applicants.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Applicants() {

    const [status, setStatus] = useState()
    const handleAccept = () => {
        setStatus('accept')
    }
    const handleDecline = () => {
        setStatus('decline')
    }

    return (
        <div className={styles.container}>

            <div className={styles.course}>
                <h1 className={`${styles.underline} ${styles.top_padding}`}>CS170 - Intro to AI</h1>

                <div className={styles.categories}>
                    <h4>Name</h4>
                    <h4>Degree</h4>
                    <h4>GPA</h4>
                    <h4>Application Date</h4>
                    <h4>Transcript</h4>
                    <h4>Status</h4>
                </div>

                <ul className={styles.accordion}>
                    <li>
                        <input type='checkbox' name='accordion' id='first' />
                        <label for='first'>
                            <p>Ethan Fox</p>
                            <p>Bachelors</p>
                            <p>3.4</p>
                            <p>December 8th, 2023</p>
                            <Image onClick={handleAccept} src='/doc_icon.png' width='43' height='43'></Image>
                            {status === 'accept' ? <p className={styles.underline}>Accepted</p> :
                             status === 'decline' ? <p className={styles.underline}>Declined</p> :
                             <div className={styles.buttons}>
                                <button className={`${styles.buttons} ${styles.green}`} onClick={handleAccept}>Accept</button>
                                <button className={`${styles.buttons} ${styles.red}`} onClick={handleDecline}>Decline</button>
                             </div>
                            }
                        </label>

                        <div className={styles.content}>
                            <p className={styles.bold}>Pronouns: aaaaaaaaaaaaaa</p>
                            <p className={styles.bold}>Courses Taken: aaaaaaaaaaaaaaaaaa</p>
                            <p className={`${styles.bold} ${styles.skills}`}>Skills: aaaaaaaaaaaaaa</p>
                            <p className={`${styles.bold} ${styles.resume_container}`}>Resume:
                                <Link href='https://google.com' target='_blank'>
                                    <Image className={styles.resume} src='/doc_icon.png' width='43' height='43'></Image>
                                </Link>
                            </p>

                        </div>
                    </li>
                </ul>

            </div>



            <div className={styles.course}>
                <h1 className={`${styles.underline} ${styles.top_padding}`}>CS180 - Intro to Software Engineering</h1>

                <div className={styles.categories}>
                    <h4>Name</h4>
                    <h4>Degree</h4>
                    <h4>GPA</h4>
                    <h4>Application Date</h4>
                    <h4>Transcript</h4>
                    <h4>Status</h4>
                </div>

                <ul className={styles.accordion}>
                    <li>
                        <input type='checkbox' name='accordion' id='second' />
                        <label for='second'>
                            <p>Ethan Fox</p>
                            <p>Bachelors</p>
                            <p>3.4</p>
                            <p>December 8th, 2023</p>
                            <p>Transcript</p>
                            <div className={styles.buttons}>
                                <button className={`${styles.buttons} ${styles.green}`}>Accept</button>
                                <button className={`${styles.buttons} ${styles.red}`}>Decline</button>
                            </div>
                        </label>

                        <div className={styles.content}>
                            <p className={styles.bold}>Pronouns:</p>
                            <p className={styles.bold}>Courses Taken: </p>
                            <p className={styles.bold}>Skills:</p>
                            <p className={styles.bold}>Resume:</p>
                        </div>
                    </li>
                </ul>


                <ul className={styles.accordion}>
                    <li>
                        <input type='checkbox' name='accordion' id='third' />
                        <label for='third'>
                            <p>Ethan Fox</p>
                            <p>Bachelors</p>
                            <p>3.4</p>
                            <p>December 8th, 2023</p>
                            <p>Transcript</p>
                            <div className={styles.buttons}>
                                <button className={`${styles.buttons} ${styles.green}`}>Accept</button>
                                <button className={`${styles.buttons} ${styles.red}`}>Decline</button>
                            </div>
                        </label>

                        <div className={styles.content}>
                            <p className={styles.bold}>Pronouns:</p>
                            <p className={styles.bold}>Courses Taken: </p>
                            <p className={styles.bold}>Skills:</p>
                            <p className={styles.bold}>Resume:</p>
                        </div>
                    </li>
                </ul>

                <ul className={styles.accordion}>
                    <li>
                        <input type='checkbox' name='accordion' id='fourth' />
                        <label for='fourth'>
                            <p>Ethan Fox</p>
                            <p>Bachelors</p>
                            <p>3.4</p>
                            <p>December 8th, 2023</p>
                            <p>Transcript</p>
                            <div className={styles.buttons}>
                                <button className={`${styles.buttons} ${styles.green}`}>Accept</button>
                                <button className={`${styles.buttons} ${styles.red}`}>Decline</button>
                            </div>
                        </label>

                        <div className={styles.content}>
                            <p className={styles.bold}>Pronouns:</p>
                            <p className={styles.bold}>Courses Taken: </p>
                            <p className={styles.bold}>Skills:</p>
                            <p className={styles.bold}>Resume:</p>
                        </div>
                    </li>
                </ul>
            </div>


        </div>
    )
}

/*
 transcript & buttons opens/closes label (put it outside label w position absolute?)
 fixing spacing
*/