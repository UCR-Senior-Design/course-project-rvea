import styles from "../styles/ProfilePage.module.css";

export default function ProfilePage() {
    return(
        <div className={styles.container}>
            <div className={styles['nested_container_left']}>
                <div className={styles['skills_container']}>
                    <div className={styles['skills_upper_container']}>
                        <h1>Skills</h1>
                        <button className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                    </div>
                    <div className={styles['skills_lower_container']}>

                    </div>
                </div>
                <div className={styles['courses_container']}>
                    <div className={styles['courses_upper_container']}>
                        <h1>Courses</h1>
                        <button className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                    </div>
                    <div className={styles['courses_lower_container']}>

                    </div>
                </div>
                <div className={styles['year_container']}>
                    <div className={styles['courses_upper_container']}>
                        <h1>Year</h1>
                        <button className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                    </div>
                    <div className={styles['courses_lower_container']}>

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

                    </div>
                </div>               
                <div className={styles['relevant_experience_container']}>
                    <div className={styles['relevant_experience_upper_container']}>
                        <h1>Relevant Experience</h1>
                        <button className={`${styles.button} ${styles.bg_yellow}`}>+</button>
                    </div>
                    <div className={styles['relevant_experience_lower_container']}>

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

                    </div>        
                </div>
            </div>

        </div>
    )
}