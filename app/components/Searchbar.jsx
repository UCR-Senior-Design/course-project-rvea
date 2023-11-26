import styles from '../styles/Searchbar.module.css'

export default function Searchbar() {
    return (
        <form className={styles.container}>
            <input className={styles.searchbar} type='text' placeholder='Search'></input>
            <button className={styles.button} type='submit'>Submit</button>
        </form>
    )
}