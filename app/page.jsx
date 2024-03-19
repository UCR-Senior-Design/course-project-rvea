import { MongoClient, ServerApiVersion } from 'mongodb';
import LoginForm from './components/LoginForm';

import { connectToDatabase, closeDatabase } from './connectdb';

export default async function page() {
  try {
    connectToDatabase();
  }
  finally {
    closeDatabase();
    //console.log('closed database')
  }
  
  return (
    <LoginForm></LoginForm>
  );
}