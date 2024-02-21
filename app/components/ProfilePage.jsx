'use client';
import {useState} from "react";
import {addNewSkill, removeSkill} from "./ProfilePageFunctions";

import styles from "../styles/ProfilePage.module.css";


export default function ProfilePage() {
    const [skills, setSkills] = useState(['C++', 'Python', 'Github/Git']);

    return(
        <div className={styles.container}>
            <div className={styles['nested_container_left']}>
                <div className={styles['skills_container']}>
                    <div className={styles['skills_upper_container']}>
                        <div className={styles['skills_upper_left_container']}> 
                            <h1>Skills</h1>
                        </div>
                        <div className={styles['skills_upper_right_container']}> 
                            <button onClick={() => removeSkill(skills, setSkills)} className={`${styles.button} ${styles.bg_yellow}`}>-</button>
                            <button onClick={() => addNewSkill(skills, setSkills)} className={`${styles.button} ${styles.bg_yellow}`}>+</button>    
                        </div>
                    </div>
                    <div className={styles['skills_lower_container']}>
                        {skills.map((skill, index) => (
                            <button key={index} className={`${styles.pill}`}>{skill}</button>
                        ))}
                    </div>
                </div>
                <div className={styles['courses_container']}>
                    <div className={styles['courses_upper_container']}>
                        <h1>Courses</h1>
                        <button className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                    </div>
                    <div className={styles['courses_lower_container']}>
                    <button className={`${styles.pill}`}>C++</button>
                            <button className={`${styles.pill}`}>CS 100</button>
                            <button className={`${styles.pill}`}>STAT 156A</button>
                            <button className={`${styles.pill}`}>CS 101</button>
                    </div>
                </div>
                <div className={styles['year_container']}>
                    <div className={styles['courses_upper_container']}>
                        <h1>Year</h1>
                        <button className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                    </div>
                    <div className={styles['courses_lower_container']}>
                            <button className={`${styles.pill}`}>2024</button>
                    </div>                
                </div>
            </div>
            <div className={styles['nested_container_middle']}>
                <div className={styles['resume_container']}>
                    <div className={styles['resume_upper_container']}>
                        <h1>Resume</h1>
                        <button className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                    </div>
                    <div className={styles['resume_lower_container']}>
                        <iframe src="/public/College Student Part-Time Job Resume Template.pdf" frameborder="0"></iframe>
                    </div>
                </div>               
                <div className={styles['relevant_experience_container']}>
                    <div className={styles['relevant_experience_upper_container']}>
                        <h1>Relevant Experience</h1>
                        <button className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                    </div>
                    <div className={styles['relevant_experience_lower_container']}>
                            <button className={`${styles.pill} ${styles.pill_large_text}`}>Engineered a full-stack web application for a university project using React for the frontend and Node.js for the backend, implementing RESTful APIs and real-time data with WebSocket.</button>
                            <button className={`${styles.pill} ${styles.pill_large_text}`}>Contributed to an open-source machine learning project on GitHub, enhancing algorithms and optimizing data processing pipelines in Python.</button>
                            <button className={`${styles.pill} ${styles.pill_large_text}`}>Led a team in a national coding hackathon to develop a mobile app prototype that won second place for its innovative use of AI in educational technology.</button>
                    </div>                 
                </div> 
            </div>
            <div className={styles['nested_container_right']}>
                <div className={styles['personal_info_container']}>
                    <div className={styles['personal_info_upper_container']}>
                        <h1>Personal Info</h1>
                        <button className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                    </div>
                    <div className={styles['personal_info_lower_container']}>
                            <button className={`${styles.pill}`}>Name: First Last</button>
                            <button className={`${styles.pill}`}>GPA: 5.0</button>
                            <button className={`${styles.pill}`}>Occupation: Student</button>
                    </div>        
                </div>
            </div>
        </div>
    )
}