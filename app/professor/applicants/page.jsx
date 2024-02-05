import styles from '../../styles/applicants.module.css'

export default function Applicants() {
    return (
        <div className={styles.container}>

            <div className={styles.course}>
                <h1 className={`${styles.underline} ${styles.top_padding}`}>CS170 - Intro to AI</h1>

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
                        <label for='first'>
                            <p>Ethan Fox</p>
                            <p>Bachelors</p>
                            <p>3.4</p>
                            <p>December 8th, 2023</p>
                            <p>Transcript</p>
                            <p>Status</p>
                        </label>

                        <div className={styles.content}>
                            <p className={styles.bold}>Pronouns:</p>
                            <p className={styles.bold}>Courses Taken: </p>
                            <p className={styles.bold}>Skills:</p>
                            <p className={styles.bold}>Resume:</p>
                        </div>
                    </li>
                </ul>

            </div>



            <div className={styles.course}>
                <h1 className={`${styles.underline} ${styles.top_padding}`}>CS180 - Intro to Software Engineering</h1>

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
                        <input type='checkbox' name='accordion' id='second' />
                        <label for='second'>
                            <p>Ethan Fox</p>
                            <p>Bachelors</p>
                            <p>3.4</p>
                            <p>December 8th, 2023</p>
                            <p>Transcript</p>
                            <p>Status</p>
                        </label>

                        <div className={styles.content}>
                            <p className={styles.bold}>Pronouns:</p>
                            <p className={styles.bold}>Courses Taken: </p>
                            <p className={styles.bold}>Skills:</p>
                            <p className={styles.bold}>Resume:</p>
                        </div>
                    </li>
                </ul>


                <ul className={styles.accordion}>
                    <li>
                        <input type='checkbox' name='accordion' id='third' />
                        <label for='third'>
                            <p>Ethan Fox</p>
                            <p>Bachelors</p>
                            <p>3.4</p>
                            <p>December 8th, 2023</p>
                            <p>Transcript</p>
                            <p>Status</p>
                        </label>

                        <div className={styles.content}>
                            <p className={styles.bold}>Pronouns:</p>
                            <p className={styles.bold}>Courses Taken: </p>
                            <p className={styles.bold}>Skills:</p>
                            <p className={styles.bold}>Resume:</p>
                        </div>
                    </li>
                </ul>

                <ul className={styles.accordion}>
                    <li>
                        <input type='checkbox' name='accordion' id='fourth' />
                        <label for='fourth'>
                            <p>Ethan Fox</p>
                            <p>Bachelors</p>
                            <p>3.4</p>
                            <p>December 8th, 2023</p>
                            <p>Transcript</p>
                            <p>Status</p>
                        </label>

                        <div className={styles.content}>
                            <p className={styles.bold}>Pronouns:</p>
                            <p className={styles.bold}>Courses Taken: </p>
                            <p className={styles.bold}>Skills:</p>
                            <p className={styles.bold}>Resume:</p>
                        </div>
                    </li>
                </ul>
            </div>


        </div>
    )
}