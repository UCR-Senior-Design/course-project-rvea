import styles from '../styles/Listings.module.css'

export default function Listings() {
    return (
        <div className={styles.container}>

            <div className={styles['listings-container']}>
                <div className={styles.cards}>
                    <div className={styles.rankings}>
                        <select className={styles.rankings} name='' id='rankings'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                        </select>
                    </div>
                    <div>
                        <h3 className={`${styles.text} ${styles.title}`}>Job Title</h3>
                        <p className={`${styles.text} ${styles.name}`}>Professor _____</p><br></br>
                        <p className={`${styles.text} ${styles.quarter}`}>Winter and Spring Quarter</p>
                        <p className={styles.text}>Wage: <span className={styles.wage}>$120/hour</span></p>
                        <p className={styles.text}>Seats Remaining: <span className={styles.position}>5</span></p>
                    </div>
                    
                </div>
            </div>

            <div className={styles['details-container']}>
                <div className={styles.details}>
                    <p>Details</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>prereq's </p>
                    <p>min required hrs/week</p>
                    <p>[front info displayed too]</p>
                </div>
            </div>
        </div>
    )
}