import { MongoClient, ServerApiVersion } from 'mongodb';
import RegisterForm from '../components/RegisterForm';

//import { connectToDatabase } from './connectdb';

export default async function page() {
  //connectToDatabase();
  return (
    <RegisterForm></RegisterForm>
  );
}