import styles from '../styles/Listings.module.css'

const dummyData = [{
    title: 'Job Title 1',
    name: 'Professor _____',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    title: 'Job Title 2',
    name: 'Professor _____',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    title: 'Job Title 3',
    name: 'Professor _____',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    title: 'Job Title 4',
    name: 'Professor _____',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    title: 'Job Title 5',
    name: 'Professor _____',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    title: 'Job Title 6',
    name: 'Professor _____',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    title: 'Job Title 7',
    name: 'Professor _____',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    title: 'Job Title 8',
    name: 'Professor _____',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    title: 'Job Title 9',
    name: 'Professor _____',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
},
{
    title: 'Job Title 10',
    name: 'Professor _____',
    quarter: 'Winter and Spring Quarter',
    wage: '$120/hour',
    seats: '5',
}
];

export default function Listings() {
    return (
        <div className={styles.container}>

            <div className={styles['listings-container']}>
                    {dummyData.map((data) => {
                        return (
                            <div className={styles.cards}>
                                <div>
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
                                    <h3 className={`${styles.text} ${styles.title}`}>{data.title}</h3>
                                    <p className={`${styles.text} ${styles.name}`}>{data.name}</p><br></br>
                                    <p className={`${styles.text} ${styles.quarter}`}>{data.quarter}</p>
                                    <p className={styles.text}>Wage: <span className={styles.wage}>{data.wage}</span></p>
                                    <p className={styles.text}><span className={styles.seats}>{data.seats}</span></p>
                                </div>
                            </div>
                        )
                    })}
            </div>



            <div className={styles['details-container']}>
                <div className={styles.details}>
                    <p>--- NOTES ---</p>
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