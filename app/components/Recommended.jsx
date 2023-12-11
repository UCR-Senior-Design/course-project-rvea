import styles from '../styles/Recommended.module.css'


const dummyData = [{
    class_name: 'MATH 9C',
    position: 'Grader',
    name: 'Professor Kirkland',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'MATH 9C',
    position: 'TA',
    name: 'Professor Kirkland',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'MATH 9C',
    position: 'Reader',
    name: 'Professor Kirkland',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'STAT 105',
    position: 'Grader',
    name: 'Professor Kleenex',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'STAT 105',
    position: 'TA',
    name: 'Professor Kleenex',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'STAT 105',
    position: 'Reader',
    name: 'Professor Kleenex',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'CS 100',
    position: 'Grader',
    name: 'Professor Dell',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'CS 100',
    position: 'TA',
    name: 'Professor Dell',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'CS 100',
    position: 'Reader',
    name: 'Professor Dell',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'MATH 9A',
    position: 'Grader',
    name: 'Professor Chair',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'MATH 9A',
    position: 'TA',
    name: 'Professor Chair',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'MATH 9A',
    position: 'Reader',
    name: 'Professor Chair',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'CS 111',
    position: 'Grader',
    name: 'Professor Kirkland',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'CS 111',
    position: 'TA',
    name: 'Professor Kirkland',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'CS 111',
    position: 'Reader',
    name: 'Professor Kirkland',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'MATH 9B',
    position: 'Grader',
    name: 'Professor Cup',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'MATH 9B',
    position: 'TA',
    name: 'Professor Cup',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    class_name: 'MATH 9B',
    position: 'Reader',
    name: 'Professor Cup',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
];

{/*
    return(
            <>
            <div className={styles['bg-container']}>
                <div className={styles.bg}>
                <h1>Recommended Jobs</h1>
                <p>MATH 9C Grader - Professor Kirkland - Winter and Spring Quarter - Wage: $120/hour</p>
                <p>MATH 9C TA - Professor Kirkland - Winter and Spring Quarter - Wage: $120/hour</p>
                <p>MATH 9C Reader - Professor Kirkland - Winter and Spring Quarter - Wage: $120/hour</p>
                <p>STAT 105 Grader - Professor Kleenex - Winter and Spring Quarter - Wage: $120/hour</p>
                <p>STAT 105 TA - Professor Kleenex - Winter and Spring Quarter - Wage: $120/hour</p>
                <p>STAT 105 Reader - Professor Kleenex - Winter and Spring Quarter - Wage: $120/hour</p>
                <p>CS100 Grader - Professor Dell - Winter and Spring Quarter - Wage: $120/hour</p>
                <p>CS100 TA - Professor Dell - Winter and Spring Quarter - Wage: $120/hour</p>
                <p>CS100 Reader - Professor Dell - Winter and Spring Quarter - Wage: $120/hour</p>
                <p>MATH 9A Grader - Professor Chair - Winter and Spring Quarter - Wage: $120/hour</p>
                <p>MATH 9A TA- Professor Chair - Winter and Spring Quarter - Wage: $120/hour</p>
                <p>MATH 9A Reader - Professor Chair - Winter and Spring Quarter - Wage: $120/hour</p>
                <p>CS 111 Grader - Professor Mead - Winter and Spring Quarter - Wage $120/hour</p>
                <p>CS 111 TA - Professor Mead - Winter and Spring Quarter - Wage $120/hour</p>
                <p>CS 111 Reader - Professor Mead - Winter and Spring Quarter - Wage $120/hour</p>
                <p>MATH 9B Grader - Professor Cup - Winter and Spring Quarter - Wage $120/hour</p>
                <p>MATH 9B TA - Professor Cup - Winter and Spring Quarter - Wage $120/hour</p>
                <p>MATH 9B Reader - Professor Cup - Winter and Spring Quarter - Wage $120/hour</p>
                </div>
            </div>
            </>
*/}
export default function Recommended() {
    return(
        <div className={styles.bg}>
            <div className={styles['listings-container']}>
                {dummyData.map((data) => {
                    return (
                        <div className={styles.cards}>
                            <div>
                                <h3 className={`${styles.text} ${styles.title}`}>{data.class_name}</h3>
                                <p className={`${styles.text} ${styles.name}`}>{data.name}</p><br></br>
                                <p className={`${styles.text} ${styles.quarter}`}>{data.quarter}</p>
                                <p className={styles.text}>Wage: <span className={styles.wage}>{data.wage}</span></p>
                                <p className={styles.text}><span className={styles.seats}>{data.seats}</span></p>
                            </div>
                        </div>
                    )
                })}  
            </div>
        </div>
    )
}
