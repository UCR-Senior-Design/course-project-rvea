'use client';
import styles from '../../styles/create-job.module.css'
import { createJobPosting } from '../../lib/actions';
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function CreateJob() {
    const { data: session } = useSession();
    const [userName, setUserName] = useState(session?.user?.name);

    const createJobInfo = {
        //Grab inputs from boxes and save them to the database
        jobTitle: "",
        schoolTerm: "",
        deadline: "",
        hourlyWage: "",
        minHrs: "",
        totalPos: "",
        prereqs: "",
        description: "",
        professor: userName
    }
    
    function publishJob(event) {
        //event.preventDefault();

        //Make sure all values aren't empty before publishing
        if (Object.values(createJobInfo).includes("")) {
            alert("Please fill in empty boxes before submitting.");
        }
        else {
            alert("Job has been created!");
            createJobPosting(createJobInfo);
        }
    }


    return (
        <div className={styles['createjob-container']}>
            <h2>Create A Job Position</h2>
            <form className={styles.jobform}>
                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required onChange={(e) => createJobInfo.jobTitle = e.target.value}></input>
                    <span className={styles.labels}>Job Title</span>
                </label>

                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required onChange={(e) => createJobInfo.schoolTerm = e.target.value}></input>
                    <span className={styles.labels}>School Term(s)</span>
                </label>

                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required onChange={(e) => createJobInfo.deadline = e.target.value}></input>
                    <span className={styles.labels}>Deadline To Apply [mm/dd/yyyy]</span>
                </label>

                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required onChange={(e) => createJobInfo.hourlyWage = e.target.value}></input>
                    <span className={styles.labels}>Wage / Hour</span>
                </label>

                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required onChange={(e) => createJobInfo.minHrs = e.target.value}></input>
                    <span className={styles.labels}>Minimum Hours / Week</span>
                </label>
                
                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required onChange={(e) => createJobInfo.totalPos = e.target.value}></input>
                    <span className={styles.labels}>Total Positions</span>
                </label>
                
                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required onChange={(e) => createJobInfo.prereqs = e.target.value}></input>
                    <span className={styles.labels}>Prerequisite Classes</span>
                </label>

                <label className={styles['input-container']}>
                    <textarea className={`${styles.inputs} ${styles.description}`} type='text' required onChange={(e) => createJobInfo.description = e.target.value}></textarea>
                    <span className={styles.labels}>Role Description</span>
                </label>
                
                <button className={styles.button} onClick={publishJob}>Publish</button>

            </form>
        </div>
    )
}

//css grid for the text boxes? maybe?