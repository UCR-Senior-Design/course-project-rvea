'use client'
import styles from '../styles/Searchbar.module.css'

import Listings from '../components/Listings'
import {useState} from 'react'

export default function Searchbar({jobListings}) {
    let searchitem = '';
    let filtered_list = jobListings;

    //Used to update the filtered search list and pass to Listings component
    const [listing, setListing] = useState(jobListings);

    //OnSubmit? ==> update the list via useState
    const handleSubmit = (event) => {
        //Grabs input from searchbar
        event.preventDefault();
        searchitem = event.target[0].value
        filtered_list = []

        //If user searches something in the searchbar, lookup items w/ that word
        if (searchitem != '') {    
            for (let i in jobListings) {
                if (jobListings[i].Title === searchitem.toUpperCase()) {
                    filtered_list.push(jobListings[i]);
                }
            }
            //if no results found with searched word, reset to display all jobs
            if (filtered_list.length === 0) {
                filtered_list = jobListings;
            }
        }
        //If searchbar is empty, just display all job positions
        else {
            filtered_list = jobListings
        }
        setListing(filtered_list);
    }

    return (
        <div>
            <form className={styles.container} onSubmit={handleSubmit}>
                <input className={styles.searchbar} type='text' placeholder='Search'></input>
                <button className={styles.button} type='submit'>Search</button>
            </form>
            <Listings jobListings={listing}/>
        </div>

    )
}