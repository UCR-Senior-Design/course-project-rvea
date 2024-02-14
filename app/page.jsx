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
      const collection = db.collection('Previous Jobs');
      
      console.log('Database name: ', db.databaseName)
      console.log('Collection name: ', collection.collectionName)
  
      // Fetch data from MongoDB for server-side rendering
      const serverData = await collection.find({}).toArray();

      if (serverData.length === 0) {
        console.log('No documents found in the "Student" collection.');
      } else {
        console.log('Data from MongoDB:', serverData);
      }
  
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