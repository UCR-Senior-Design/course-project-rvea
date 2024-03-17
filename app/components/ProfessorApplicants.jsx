'use client'
import styles from '../styles/applicants.module.css';
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { acceptStudent } from '../lib/actions';

export default function ProfessorApplicants(props) {
    let applicants = JSON.parse(props.applicants);
    console.log(applicants);
    const [status, setStatus] = useState();
    const handleAccept = () => {
        setStatus('accept')
    }
    const handleDecline = () => {
        setStatus('decline')
    }

    const [pdf, setPdf] = useState('');


    return (
        <div className={styles.container}>
            {
                Object.keys(applicants).map((key) => {
                    return (
                        <div key={key} className={styles.course}>
                            <h1 className={`${styles.top_padding}`}>{key}</h1>
                            {applicants[key].map((student) => {
                                return (
                                    <>
                                        <div key={student} className={styles.categories}>
                                            <h4>Name</h4>
                                            <h4>Degree</h4>
                                            <h4>GPA</h4>
                                            <h4>Application Date</h4>
                                            <h4>Transcript</h4>
                                            <h4>Status</h4>
                                        </div>

                                        <ul key={student} className={styles.accordion}>
                                            <li>
                                                <input type='checkbox' name='accordion' id='first' />
                                                <label htmlFor='first' className={styles.labels}>
                                                    <p>{student.username}</p>
                                                    <p>{student.degreelvl}</p>
                                                    <p>{student.gpa}</p>
                                                    <p>{student.applicationDate}</p>
                                                    <p>
                                                        <button onClick={() => setPdf(student.transcript)}>
                                                            <Link legacyBehavior href={pdf ? `${pdf}` : ''} passHref>
                                                                <a target="_blank">
                                                                    <Image className={styles.image} src='/doc_icon.png' width='43' height='43'></Image>
                                                                </a>
                                                            </Link>
                                                        </button>
                                                    </p>
                                                    {status === 'accept' || student.accepted ? <p className={styles.underline}>Accepted</p> :
                                                        status === 'decline' ? <p className={styles.underline}>Declined</p> :
                                                            <div className={styles.buttons}>
                                                                <form id="accept-decline"></form>
                                                                <button form="accept-decline" type="submit" className={`${styles.buttons} ${styles.green}`} formAction={() => {acceptStudent(key, student.id); setStatus('accept')}}>Accept</button>
                                                                <button className={`${styles.buttons} ${styles.red}`} onClick={handleDecline}>Decline</button>
                                                            </div>
                                                    }
                                                </label>

                                                <div className={styles.content}>
                                                    <p className={styles.bold}>Pronouns: {student.pronouns} </p>
                                                    <p className={styles.bold}>Courses Taken: {student.courses.map((course) => course + " ")}</p>
                                                    <p className={`${styles.bold} ${styles.skills}`}>Skills: {student.skills.map((skill) => skill + " ")}</p>
                                                    <p className={`${styles.bold} ${styles.resume_container}`}>Resume:
                                                        <button onClick={() => setPdf(student.resume)}>
                                                            <Link legacyBehavior href={pdf ? `${pdf}` : ''} passHref>
                                                                <a target="_blank">
                                                                    <Image className={styles.image} src='/doc_icon.png' width='43' height='43'></Image>
                                                                </a>
                                                            </Link>
                                                        </button>
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