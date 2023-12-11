// app/index.jsx
import { MongoClient, ServerApiVersion } from 'mongodb';
import Image from 'next/image';
import styles from '/app/styles.module.css';

export default async function page() {
    const uri =
      'mongodb+srv://ethanjfoxy:443OoaEriC1mtWbT@ucr-cse-application-too.4nsb05q.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri, {
      serverApi: ServerApiVersion.v1,
    });
  
    try {
      await client.connect();
      console.log('Connected to MongoDB successfully!');
      const db = client.db('UCR-CSE-Application-Tool');
      const collection = db.collection('Student');
  
      // Fetch data from MongoDB for server-side rendering
      //const serverData = await collection.find({}).toArray();
  
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      return { props: { serverData: [] } }; 
    } finally {
      await client.close();
    }
    return (
      <>
            <Image src="/ucr_logo.png" width="210" height="64"></Image>
            <div className={styles.card}>
                <h2 className={styles.bold}>Sign in</h2>
                <input className={`${styles.border_rounded_8} ${styles.border_grey}`} placeholder="Email" type="text"></input>
                <input className={`${styles.border_rounded_8} ${styles.border_grey}`} placeholder="Password" type="text"></input>
                <button className={`${styles.button} ${styles.bg_blue} ${styles.margin_top_24}`}>Sign in</button>
                <h5 className={styles.line_through}><span>or</span></h5>
                <button className={`${styles.button} ${styles.bg_yellow} ${styles.margin_btm_24}`}>Register Now</button>
            </div>
        </>
    )
    //location.href('/student/profile') as a default once user is auth in db
}
