// app/page.jsx
import { MongoClient, ServerApiVersion } from 'mongodb';
import { useState } from 'react';
import styles from '/app/styles.module.css';
import Image from 'next/image';

export default function Page({ serverData }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const handleRegister = async () => {
    // Your client-side registration logic
  };

  const handleLogin = async () => {
    // Your client-side login logic
  };

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
}

export async function getServerSideProps() {
  const uri =
    'mongodb+srv://ethanjfoxy:443OoaEriC1mtWbT@ucr-cse-application-too.4nsb05q.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1,
  });

  try {
    await client.connect();
    console.log('Connected to MongoDB successfully!'); // Added log statement
    const db = client.db('UCR-CSE-Application-Tool');
    const collection = db.collection('Student');

    // Fetch data from MongoDB for server-side rendering
    const serverData = await collection.find({}).toArray();

    // Pass the data as props
    return { props: { serverData } };
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    return { props: { serverData: [] } }; // Handle errors gracefully
  } finally {
    await client.close();
  }
}

