'use client'
import styles from '../styles/Listings.module.css'
import {useState} from 'react'
import Image from 'next/image'


export default function Listings(props) {
    const listings = props.jobListings;
    const [jobIndex, setJobIndex] = useState(0);

    const handleApply = async (jobId) => {
        console.log("Trying to apply for job with ID:", jobId); // Check if handleApply is being called
        try {
            const db = await connectToDatabase();
            const collection = db.collection('Previous Jobs');
            await collection.updateOne({ _id: jobId }, { $set: { applied: true } });
            console.log('Application submitted successfully!');
            // Optionally, update the UI to indicate that the application was successful
        } catch (error) {
            console.error('Error submitting application:', error);
            // Optionally, handle errors and update the UI accordingly
        }
    };

    // Check if listings is not undefined or empty
    console.log("Listings:", listings);

    // Check if jobIndex is being updated correctly
    console.log("Job Index:", jobIndex);

    return (
        <div className={styles.container}>

            <div className={styles['listings-container']}>
                    {listings.map((data, index) => {
                        return (
                            <div className={styles.cards} key={index} onClick={() => setJobIndex(index)}>
                                <Image className={styles['card-logo']} src='/pc.png' width='60' height='60'></Image>
                                <div>
                                    <h3 className={`${styles.text} ${styles.title}`}>{data.Title}</h3>
                                    <p className={`${styles.text} ${styles.name}`}>{data.Professor}</p><br></br>
                                    <p className={`${styles.text} ${styles.quarter}`}>Term: {data.Term}</p>
                                    <p className={styles.text}>Wage: <span className={styles.wage}>{data.hourlyWage}</span></p>
                                    <p className={styles.text}>Remaining Seats: <span className={styles.seats}>{data.totalSeats}</span></p>
                                </div>
                            </div>
                        )
                    })}
            </div>


            <div className={styles['details-container']}>
                <div className={styles.details}>

                    <h1>{listings[jobIndex].Title}</h1>
                    <div className={styles.subtitle}>
                        <Image className={styles.no_margin} src='/pc.png' width='60' height='60'></Image>
                        <div>
                            <p className={`${styles.subtitle_text} ${styles.color_bold}`}>{listings[jobIndex].Professor}</p>
                            <p className={`${styles.subtitle_text} ${styles.color_gray} ${styles.no_margin}`}>Term: {listings[jobIndex].Term}</p>
                        </div>
                    </div>

                    <h2 className={`${styles.underline} ${styles.no_margin}`}>About the Role</h2>
                    <div className={styles.about}>
                        <div className={styles.about_card}>
                            <p className={`${styles.about_heading} ${styles.color_bold}`}>Deadline to Apply</p>
                            <p className={`${styles.no_margin} ${styles.color_gray}`}>{listings[jobIndex].deadline}</p>
                        </div>
                        <div className={styles.about_card}>
                            <p className={`${styles.about_heading} ${styles.color_bold}`}>Wage</p>
                            <p className={`${styles.no_margin} ${styles.color_gray}`}>{listings[jobIndex].hourlyWage}/hour</p>
                        </div>
                        <div className={styles.about_card}>
                            <p className={`${styles.about_heading} ${styles.color_bold}`}>Minimum Hours/Week</p>
                            <p className={`${styles.no_margin} ${styles.color_gray}`}>{listings[jobIndex].minHrs} hours/week</p>
                        </div>        
                    </div>
                    <p className={styles.prereq_text}><span className={styles.color_bold}>Prerequisite(s): </span><span className={styles.color_gray}>{listings[jobIndex].prerequisites}</span></p>

                    <h2 className={`${styles.underline} ${styles.no_margin}`}>Role Description</h2>
                    <p className={styles.description}>{listings[jobIndex].Description}</p>
                    <button className={`${styles.button} ${styles.color_bold}`} onClick={() => handleApply(listings[jobIndex]._id)}>Apply</button>
                </div>
            </div>
        </div>
    )
}



//*display green container upon submission?
//Fixme: scrollbar on outside of details container? (nit picky)
//pfp json data is defaultly included in span?
