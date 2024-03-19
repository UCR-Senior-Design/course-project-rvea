// lib/mongodb.js
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = 'mongodb+srv://ethanjfoxy:443OoaEriC1mtWbT@ucr-cse-application-too.4nsb05q.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

let clientPromise;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    clientPromise = client.connect();
    global._mongoClientPromise = clientPromise;
  } else {
    clientPromise = global._mongoClientPromise;
  }
} else {
  clientPromise = client.connect();
}

export async function getStudents() {
  try {
    await clientPromise;
    const db = client.db('UCR-CSE-Application-Tool');
    const collection = db.collection('Student');
    const students = await collection.find({}).toArray();
    return students;
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  } finally {
    if (process.env.NODE_ENV === 'production') {
      await client.close();
    }
  }
}
