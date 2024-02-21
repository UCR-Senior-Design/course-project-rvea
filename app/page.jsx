import { MongoClient, ServerApiVersion } from 'mongodb';
import LoginForm from './components/LoginForm';

import { connectToDatabase } from './connectdb';

export default async function page() {
  connectToDatabase();
  return (
    <LoginForm></LoginForm>
  );
}
