import { MongoClient, ServerApiVersion } from 'mongodb';
import LoginForm from './components/LoginForm';

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
      const serverData = await collection.find({}).toArray();
  
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      return { props: { serverData: [] } }; 
    } finally {
      await client.close();
    }
    
  return (
    <LoginForm></LoginForm>
  );
}

// export async function getStaticProps() {
//   const serverData = await getStudents();
//   print("connected")
//   return { props: { serverData } };
// }