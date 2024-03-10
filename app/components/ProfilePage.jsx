'use client';
import {useState, useRef} from "react";
import {addNewSkill, removeSkill, addNewCourse, removeCourse, addYear, removeYear, addExperience, removeExperience, addNewPersonalInfo, removePersonalInfo, handleFileChange} from "./ProfilePageFunctions";

import styles from "../styles/ProfilePage.module.css";


export default function ProfilePage() {
    const [skills, setSkills] = useState([]);
    const [courses, setCourses] = useState([]);
    const [years, setYears] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [pdfs, setPdfs] = useState([]);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [gpa, setGpa] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthday, setBirthday] = useState('');

    const resetPersonalInfo = () => {
        setFirstName('');
        setLastName('');
        setOccupation('');
        setGpa('');
        setPronouns('');
        setEmail('');
        setPhoneNumber('');
        setBirthday('');
    };

    const resetSkills = () => {
        setSkills([]);
    };

    const resetCourses = () => {
        setCourses([]);
    };

    const resetExperiences = () => {
        setExperiences([]);
    };
    const removeResume = () => {
        setPdfs(pdfs.slice(0, -1));
    };
    
    const resetResumes = () => {
        setPdfs([]);
    };

    const resetAll = () => {
        setFirstName('');
        setLastName('');
        setOccupation('');
        setGpa('');
        setPronouns('');
        setEmail('');
        setPhoneNumber('');
        setBirthday('');
        setSkills([]);
        setCourses([]);
        setExperiences([]);
        setPdfs([]);
        setYears([]);
    };

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
        <div className={styles.all_container}>
            <div className={styles.all_upper_container}>
                <button onClick={resetAll} className={`${styles.large_reset_button} ${styles.bg_yellow}`}>Reset All</button>
                <button className={`${styles.large_reset_button} ${styles.bg_yellow}`}>Save</button>
                <button className={`${styles.large_reset_button} ${styles.bg_yellow}`}>Submit</button>
            </div>
            <div className={styles.container}>
                <div className={styles['nested_container_left']}>
                    <div className={styles['skills_container']}>
                        <div className={styles['skills_upper_container']}>
                            <div className={styles['skills_upper_left_container']}> 
                                <h1>Skills</h1>
                            </div>
                            <div className={styles['skills_upper_right_container']}> 
                                <button onClick={resetSkills} className={`${styles.reset_button} ${styles.bg_yellow}`}>Reset</button>
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
                                <button onClick={resetCourses} className={`${styles.reset_button} ${styles.bg_yellow}`}>Reset</button>
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
                                {years.length === 0 && (
                                    <button onClick={() => addYear(years, setYears)} className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                                )}
                                {years.length === 1 && (
                                    <button onClick={() => removeYear(years, setYears)} className={`${styles.button} ${styles.bg_yellow}`}>-</button>
                                )}
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
                            <div className={styles['resume_upper_left_container']}>
                                <h1>Documents</h1>
                            </div>
                            <div className={styles['resume_upper_right_container']}>
                                <button onClick={resetResumes} className={`${styles.reset_button} ${styles.bg_yellow}`}>Reset</button>
                                <button onClick={removeResume} className={`${styles.button} ${styles.bg_yellow}`}>-</button>
                                <button onClick={() => triggerFileInputClick()} className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                            </div>
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
                                <button onClick={resetExperiences} className={`${styles.reset_button} ${styles.bg_yellow}`}>Reset</button>
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
                                <button type="button" onClick={resetPersonalInfo} className={`${styles.reset_button} ${styles.bg_yellow}`}>Reset</button>
                            </div>
                        </div>
                        <div className={styles['personal_info_lower_container']}>
                            <form>
                                <br>
                                </br>
                                <div className={styles.formGroup}>
                                    <label htmlFor="first-name" className={styles.formLabel}>First Name:</label>
                                    <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={styles.inputField} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="last-name" className={styles.formLabel}>Last Name:</label>
                                    <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} className={styles.inputField} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="occupation" className={styles.formLabel}>Occupation:</label>
                                    <input type="text" id="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} className={styles.inputField} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="gpa" className={styles.formLabel}>GPA:</label>
                                    <input type="text" id="gpa" value={gpa} onChange={(e) => setGpa(e.target.value)} className={styles.inputField} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="pronouns" className={styles.formLabel}>Pronouns:</label>
                                    <input type="text" id="pronouns" value={pronouns} onChange={(e) => setPronouns(e.target.value)} className={styles.inputField} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.formLabel}>Email:</label>
                                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.inputField} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phonenumber" className={styles.formLabel}>Phone Number:</label>
                                    <input type="text" id="phonenumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={styles.inputField} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="birthday" className={styles.formLabel}>Birthday:</label>
                                    <input type="text" id="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} className={styles.inputField} />
                                </div>
                            </form>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    )
}