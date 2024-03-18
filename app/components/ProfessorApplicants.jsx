'use client'
import styles from '../styles/applicants.module.css';
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { acceptStudent, declineStudent } from '../lib/actions';

export default function ProfessorApplicants(props) {
    let applicants = JSON.parse(props.applicants);
    console.log(applicants);
    const [status, setStatus] = useState({});
    const handleAccept = (key, studentId) => {
        setStatus({ ...status, [studentId]: 'accept' });
        acceptStudent(key, studentId);
    }
    const handleDecline = (key, studentId) => {
        setStatus({ ...status, [studentId]: 'decline' });
        declineStudent(key, studentId);    }

    const [pdf, setPdf] = useState('');


    return (
        <div className={styles.container}>
            {
                Object.keys(applicants).map((key) => {
                    return (
                        <div key={key} className={styles.course}>
                            <h1 className={`${styles.top_padding}`}>{key}</h1>
                                        <div key={applicants} className={styles.categories}>
                                            <h4>Name</h4>
                                            <h4>Degree</h4>
                                            <h4>GPA</h4>
                                            <h4>Application Date</h4>
                                            <h4>Transcript</h4>
                                            <h4>Status</h4>
                                        </div>
                            {applicants[key].map((student) => {
                                return (
                                    <>
                                        <ul key={student} className={styles.accordion}>
                                            <li>
                                                <input type='checkbox' name={`accordion-${key}-${student.username}`} id={`accordion-${key}-${student.username}`} />
                                                <label htmlFor={`accordion-${key}-${student.username}`} className={styles.labels}>
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
                                                    {status[student.id] === 'accept' || student.accepted ? <p className={styles.underline}>Accepted</p> :
                                                        status[student.id] === 'decline' || student.declined ? <p className={styles.underline}>Declined</p> :
                                                            <div className={styles.buttons}>
                                                                <form id={`accept-decline-${key}-${student.username}`}></form>
                                                                <button form={`accept-decline-${key}-${student.username}`} type="submit" className={`${styles.buttons} ${styles.green}`} onClick={() => handleAccept(key, student.id)}>Accept</button>
                                                                <button className={`${styles.buttons} ${styles.red}`} onClick={() => handleDecline(key, student.id)}>Decline</button>
                                                            </div>
                                                    }
                                                </label>

                                                <div className={styles.content}>
                                                    <p className={styles.bold}>Pronouns: <span className={styles.lightweight}>{student.pronouns}</span></p>
                                                    <p className={styles.bold}>Courses Taken: <span className={styles.lightweight}>{student.courses.map((course, index) => index === student.courses.length - 1 ? course : `${course}, `)}</span></p>
                                                    <p className={`${styles.bold} ${styles.skills}`}>Skills: <span className={styles.lightweight}>{student.skills.map((skill, index) => index === student.skills.length - 1 ? skill : `${skill}, `)}</span></p>
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
