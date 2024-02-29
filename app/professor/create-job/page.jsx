'use client';
import styles from '../../styles/create-job.module.css'

function handleSubmit() {
    alert('Job Created!')
}

export default function CreateJob() {
    return (
        <div className={styles['createjob-container']}>
            <h2>Create A Job Position</h2>
            <form className={styles.jobform}>
                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required></input>
                    <span className={styles.labels}>Job Title</span>
                </label>

                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required></input>
                    <span className={styles.labels}>School Term(s)</span>
                </label>

                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required></input>
                    <span className={styles.labels}>Deadline To Apply [mm/dd/yyyy]</span>
                </label>

                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required></input>
                    <span className={styles.labels}>Wage / Hour</span>
                </label>

                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required></input>
                    <span className={styles.labels}>Minimum Hours / Week</span>
                </label>
                
                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required></input>
                    <span className={styles.labels}>Total Positions</span>
                </label>
                
                <label className={styles['input-container']}>
                    <input className={styles.inputs} type='text' required></input>
                    <span className={styles.labels}>Prerequisite Classes</span>
                </label>

                {/* <textarea className={styles.description} placeholder='Role Description'></textarea> */}
                <label className={styles['input-container']}>
                    <textarea className={`${styles.inputs} ${styles.description}`} type='text' required></textarea>
                    <span className={styles.labels}>Role Description</span>
                </label>
                
                <button className={styles.button} onClick={handleSubmit}>Publish</button>

            </form>
        </div>
    )
}

//css grid for the text boxes? maybe?