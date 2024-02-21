import styles from '../../styles/ProfessorProfile.module.css'

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <div>
                <div className={styles.col}>
                    <div className={`${styles.col_entry} ${styles.card}`}>
                        <div className={styles.card_top}>
                            <h3>General & Contact Info</h3>
                            <button className={styles.btn}>+</button>
                        </div>
                        <h5>Email: </h5>
                        <h5>Phone Number: </h5>
                        <h5>Pronouns: </h5>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={`${styles.col_entry} ${styles.card}`}>
                        <div className={styles.card_top}>
                            <h3>Description</h3>
                            <button className={styles.btn}>+</button>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda obcaecati eius
                            ducimus ad sequi a aliquam incidunt quo impedit, adipisci minima tempora nostrum
                            fugit accusamus? Aspernatur quibusdam quae quam pariatur.</p>
                    </div>
                </div>
            </div>
            <div className={styles.col}>
                <div className={`${styles.col_entry} ${styles.bar}`}>
                    <h3>Current Positions</h3>
                    <div className={styles.bar_entry}>
                        <h4>CS120B - Intro to Embedded Systems</h4>
                    </div>
                    <div className={styles.bar_entry}>
                        <h4>CS120B - Intro to Embedded Systems</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}