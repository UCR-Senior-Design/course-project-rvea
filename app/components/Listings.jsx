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
                    <h1>CS111-Discrete Structures Teaching Assistant</h1>
                    
                    <div className={styles.subtitle}>
                        <Image className={styles.no_margin} src='/pc.png' width='60' height='60'></Image>
                        <div>
                            <p className={`${styles.subtitle_text} ${styles.color_bold}`}>Elena Strzheletska</p>
                            <p className={`${styles.subtitle_text} ${styles.color_gray} ${styles.no_margin}`}>Term: Spring 2024</p>
                        </div>

                    </div>

                    
                    
                    <h2 className={`${styles.underline} ${styles.no_margin}`}>About the Role</h2>
                    <div className={styles.about}>
                        <div className={styles.about_card}>
                            <p className={`${styles.about_heading} ${styles.color_bold}`}>Deadline to Apply</p>
                            <p className={`${styles.no_margin} ${styles.color_gray}`}>one two three four five six seven eight nine ten</p>
                        </div>
                        <div className={styles.about_card}>
                            <p className={`${styles.about_heading} ${styles.color_bold}`}>Wage</p>
                            <p className={`${styles.no_margin} ${styles.color_gray}`}>one two three four five six seven eight nine ten</p>
                        </div>
                        <div className={styles.about_card}>
                            <p className={`${styles.about_heading} ${styles.color_bold}`}>Minimum Hours/Week</p>
                            <p className={`${styles.no_margin} ${styles.color_gray}`}>one two three four five six seven eight nine ten</p>
                        </div>        
                    </div>
                    <p className={styles.prereq_text}><span className={styles.color_bold}>Prerequisite(s): </span><span className={styles.color_gray}>asdfasdf</span></p>

                    <h2 className={`${styles.underline} ${styles.no_margin}`}>Role Description</h2>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra maximus rutrum. Nunc ac congue turpis. Aenean gravida eget massa quis luctus. Integer neque nibh, efficitur ut sollicitudin eu, finibus at felis. Sed rutrum velit eu velit venenatis, et venenatis metus volutpat. Morbi vestibulum, quam eget elementum accumsan, velit dui elementum sem, sed varius sem metus eget diam. Maecenas dolor odio, porttitor sit amet purus facilisis, tristique vulputate lorem. Integer nec enim nisl. Praesent sed eleifend nisi. Donec id efficitur lectus.</p>
                    <button className={`${styles.button} ${styles.color_bold}`}>Apply</button>
                </div>
            </div>
        </div>
    )
}

//useState on click?
//FIXME: overflow scroll not working for details container
//Fixme: scrollbar on outside of details container? (nit picky)