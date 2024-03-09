'use client';
import {useState, useRef} from "react";
import {addNewSkill, removeSkill, addNewCourse, removeCourse, addYear, removeYear, addExperience, removeExperience, addNewPersonalInfo, removePersonalInfo, handleFileChange} from "./ProfilePageFunctions";

import styles from "../styles/ProfilePage.module.css";


export default function ProfilePage() {
    const [skills, setSkills] = useState(['C++', 'Python', 'Github/Git']);
    const [courses, setCourses] = useState(['A', 'B', 'C']);
    const [years, setYears] = useState([]);
    const [experiences, setExperiences] = useState(['Engineered a full-stack web application for a university project using React for the frontend and Node.js for the backend, implementing RESTful APIs and real-time data with WebSocket.', 'Contributed to an open-source machine learning project on GitHub, enhancing algorithms and optimizing data processing pipelines in Python.', 'Led a team in a national coding hackathon to develop a mobile app prototype that won second place for its innovative use of AI in educational technology.']);
    const [personal_infos, setPersonal_Infos] = useState(['Name: First Last', 'GPA: 5.0', 'Occupation: Student']);
    const [pdfs, setPdfs] = useState([]);

    const fileInputRef = useRef(null);

    const triggerFileInputClick = () => fileInputRef.current.click();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            const newPdfUrl = URL.createObjectURL(file);
            setPdfs(prevPdfs => [...prevPdfs, newPdfUrl]);
        }
      };
      


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
                        <div className={styles['courses_upper_left_container']}>
                            <h1>Courses</h1>
                        </div>
                        <div className={styles['courses_upper_right_container']}>
                            <button onClick={() => removeCourse(courses, setCourses)} className={`${styles.button} ${styles.bg_yellow}`}>-</button>
                            <button onClick={() => addNewCourse(courses, setCourses)} className={`${styles.button} ${styles.bg_yellow}`}>+</button> 
                        </div>
                    </div>
                    <div className={styles['courses_lower_container']}>
                        {courses.map((course, index) => (
                            <button key={index} className={`${styles.pill}`}>{course}</button>
                        ))}
                    </div>
                </div>
                <div className={styles['year_container']}>
                    <div className={styles['year_upper_container']}>
                        <div className={styles['year_upper_left_container']}>
                            <h1>Graduation Year</h1>
                        </div>
                        <div className={styles['courses_upper_right_container']}>
                            <button onClick={() => removeYear(years, setYears)} className={`${styles.button} ${styles.bg_yellow}`}>-</button>
                            <button onClick={() => addYear(years, setYears)} className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                        </div>
                    </div>
                    <div className={styles['year_lower_container']}>
                        {years.map((year, index) => (
                            <button key={index} className={`${styles.pill}`}>{year}</button>
                        ))}
                    </div>                
                </div>
            </div>
            <div className={styles['nested_container_middle']}>
                <div className={styles['resume_container']}>
                    <div className={styles['resume_upper_container']}>
                        <h1>Resume</h1>
                        <button onClick={() => triggerFileInputClick()} className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            accept="application/pdf"
                            onChange={handleFileChange} // Trigger this function when a file is selected
                        />
                    </div>
                    <div className={styles['resume_lower_container']}>
                        <div className={styles['resume_lower_lower_container']}>
                            {pdfs.map((pdfPath, index) => (
                                <iframe 
                                key={index}
                                src={pdfPath}
                                style={{ width: '100%', height: '750px', border: 'none' }}
                                frameBorder="0"
                                ></iframe>
                            ))}
                        </div>
                    </div>
                </div>               
                <div className={styles['relevant_experience_container']}>
                    <div className={styles['relevant_experience_upper_container']}>
                        <div className={styles['relevant_experience_upper_left_container']}>
                            <h1>Relevant Experience</h1>
                        </div>
                        <div className={styles['relevant_experience_upper_right_container']}>
                            <button onClick={() => removeExperience(experiences, setExperiences)} className={`${styles.button} ${styles.bg_yellow}`}>-</button>
                            <button onClick={() => addExperience(experiences, setExperiences)} className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                        </div>
                    </div>
                    <div className={styles['relevant_experience_lower_container']}>
                        {experiences.map((experience, index) => (
                            <button key={index} className={`${styles.pill}`}>{experience}</button>
                        ))}
                    </div>                 
                </div>  
            </div>
            <div className={styles['nested_container_right']}>
                <div className={styles['personal_info_container']}>
                    <div className={styles['personal_info_upper_container']}>
                        <div className={styles['personal_info_upper_left_container']}>
                            <h1>Personal Info</h1>
                        </div>
                        <div className={styles['personal_info_upper_right_container']}>
                            <button onClick={() => removePersonalInfo(personal_infos, setPersonal_Infos)} className={`${styles.button} ${styles.bg_yellow}`}>-</button>
                            <button onClick={() => addNewPersonalInfo(personal_infos, setPersonal_Infos)} className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                        </div>
                    </div>
                    <div className={styles['personal_info_lower_container']}>
                        {personal_infos.map((personal_info, index) => (
                            <button key={index} className={`${styles.pill}`}>{personal_info}</button>
                        ))}
                    </div>        
                </div>
            </div>
        </div>
    )
}