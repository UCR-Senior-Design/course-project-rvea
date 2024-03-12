'use client'
import styles from '../styles/applicants.module.css';
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProfessorApplicants(props) {
    let applicants = JSON.parse(props.applicants);
    console.log(applicants);
    const [status, setStatus] = useState()
    const handleAccept = () => {
        setStatus('accept')
    }
    const handleDecline = () => {
        setStatus('decline')
    }

    return (
        <div className={styles.container}>
            {
                Object.keys(applicants).map((key) => {
                    return (
                        <div className={styles.course}>
                            <h1 className={`${styles.top_padding}`}>{key}</h1>
                            {applicants[key].map((student) => {
                                return (
                                    <>
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
                                                <label htmlFor='first' className={styles.labels}>
                                                    <p>{student.username}</p>
                                                    <p>{student.degreelvl}</p>
                                                    <p>{student.gpa}</p>
                                                    <p>{student.applicationDate}</p>
                                                    <p>
                                                        <Link href='https://www.google.com' target='_blank'>
                                                            <Image className={styles.image} src='/doc_icon.png' width='43' height='43'></Image>
                                                        </Link>
                                                    </p>
                                                    {status === 'accept' ? <p className={styles.underline}>Accepted</p> :
                                                        status === 'decline' ? <p className={styles.underline}>Declined</p> :
                                                            <div className={styles.buttons}>
                                                                <button className={`${styles.buttons} ${styles.green}`} onClick={handleAccept}>Accept</button>
                                                                <button className={`${styles.buttons} ${styles.red}`} onClick={handleDecline}>Decline</button>
                                                            </div>
                                                    }
                                                </label>

                                                <div className={styles.content}>
                                                    <p className={styles.bold}>Pronouns: {student.pronouns} </p>
                                                    <p className={styles.bold}>Courses Taken: {student.courses.map((course) => course + " ")}</p>
                                                    <p className={`${styles.bold} ${styles.skills}`}>Skills: {student.skills.map((skill) => skill + " ")}</p>
                                                    <p className={`${styles.bold} ${styles.resume_container}`}>Resume:
                                                        <Link href='https://www.google.com' target='_blank'>
                                                            <Image className={styles.resume} src='/doc_icon.png' width='43' height='43'></Image>
                                                        </Link>
                                                    </p>

                                                </div>
                                            </li>
                                        </ul>
                                    </>
                                )
                            })}
                        </div>)
                })
            }
        </div>
    )
}