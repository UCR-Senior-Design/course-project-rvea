'use client'
import styles from '../styles/Listings.module.css'
import {useState, useEffect, useRef} from 'react'
import Image from 'next/image'

export default function Listings(props) {
    const [jobIndex, setJobIndex] = useState(0);
    const [listings, setListings] = useState(props.jobListings);

    //After the newly filtered listings is passed through as props,
    //update the listings in here to the new one via useEffect
    useEffect(() => {
        setListings(props.jobListings);
        setJobIndex(0); //reset jobindex
    }, [props.jobListings]);

    function applyClick(event) {
        event.preventDefault();
        alert('Job Applied!')
    }
    
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
                <form className={styles.details}>

                    <h1>{listings[jobIndex]?.Title}</h1>
                    <div className={styles.subtitle}>
                        <Image className={styles.no_margin} src='/pc.png' width='60' height='60'></Image>
                        <div>
                            <p className={`${styles.subtitle_text} ${styles.color_bold}`}>{listings[jobIndex]?.Professor}</p>
                            <p className={`${styles.subtitle_text} ${styles.color_gray} ${styles.no_margin}`}>Term: {listings[jobIndex]?.Term}</p>
                        </div>
                    </div>

                    <h2 className={`${styles.underline} ${styles.no_margin}`}>About the Role</h2>
                    <div className={styles.about}>
                        <div className={styles.about_card}>
                            <p className={`${styles.about_heading} ${styles.color_bold}`}>Deadline to Apply</p>
                            <p className={`${styles.no_margin} ${styles.color_gray}`}>{listings[jobIndex]?.deadline}</p>
                        </div>
                        <div className={styles.about_card}>
                            <p className={`${styles.about_heading} ${styles.color_bold}`}>Wage</p>
                            <p className={`${styles.no_margin} ${styles.color_gray}`}>{listings[jobIndex]?.hourlyWage}/hour</p>
                        </div>
                        <div className={styles.about_card}>
                            <p className={`${styles.about_heading} ${styles.color_bold}`}>Minimum Hours/Week</p>
                            <p className={`${styles.no_margin} ${styles.color_gray}`}>{listings[jobIndex]?.minHrs} hours/week</p>
                        </div>        
                    </div>
                    <p className={styles.prereq_text}><span className={styles.color_bold}>Prerequisite(s): </span><span className={styles.color_gray}>{listings[jobIndex]?.prerequisites}</span></p>

                    <h2 className={`${styles.underline} ${styles.no_margin}`}>Role Description</h2>
                    <p className={styles.description}>{listings[jobIndex]?.Description}</p>
                    <button className={`${styles.button} ${styles.color_bold}`} onClick={applyClick}>Apply</button>
                </form>
            </div>
        </div>
    )
}

//Apply button click --> saves job list to a user in a databas
//Applied jobs (pull from user's collection in db and populate page)