import styles from '../styles/Listings.module.css'
import Image from 'next/image'

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
                    {dummyData.map((data, index) => {
                        return (
                            <div className={styles.cards} key={index}>
                                <Image className={styles['card-logo']} src='/pc.png' width='60' height='60'></Image>
                                <div>
                                    <h3 className={`${styles.text} ${styles.title}`}>{data.title}</h3>
                                    <p className={`${styles.text} ${styles.name}`}>{data.name}</p><br></br>
                                    <p className={`${styles.text} ${styles.quarter}`}>{data.quarter}</p>
                                    <p className={styles.text}>Wage: <span className={styles.wage}>{data.wage}</span></p>
                                    <p className={styles.text}>Remaining Seats: <span className={styles.seats}>{data.seats}</span></p>
                                </div>
                            </div>
                        )
                    })}
            </div>



            <div className={styles['details-container']}>
                <div className={styles.details}>
                    <p>--- NOTES ---</p>
                    <p>Job title, Job description</p>
                    <p>prereq's </p>
                    <p>wage</p>
                    <p># of pos left</p>
                    <p>min required hrs/week</p>
                </div>
            </div>
        </div>
    )
}

//useState on click?
//css styling fixes, maybe navbar fix too?