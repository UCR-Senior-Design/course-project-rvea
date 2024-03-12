import { MongoClient, ServerApiVersion } from 'mongodb';

//Connect to db, then export db so other components can use it to fetch data
async function connectToDatabase() {
    const uri =
    'mongodb+srv://ethanjfoxy:443OoaEriC1mtWbT@ucr-cse-application-too.4nsb05q.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1,
    });

    try {
    await client.connect();
    console.log('Connected to MongoDB uri!');

    const db = client.db("UCR_CSE_APP");
    const databaseName = db.databaseName;
    //console.log('Database:', databaseName);

    // Check if the database exists
    const collections = await db.listCollections().toArray();
    const databaseExists = collections.length > 0;
    //console.log('Database Exists:', databaseExists);

    if (databaseExists) {
    // Check if the collection exists
    const collectionName = 'Previous Jobs';
    const collectionExists = await db.listCollections({ name: collectionName }).hasNext();
    //console.log('Collection Exists:', collectionExists);

    if (collectionExists) {
        const collection = db.collection(collectionName);

        // Check if there are any documents in the collection
        const serverData = await collection.find({}).toArray();
        //console.log('Student Data:', serverData);

        return db;        
    } else {
        console.log('Collection does not exist.');
    }
    } else {
    console.log('Database does not exist.');
    }
    } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    }
    // finally {
    // await client.close();
    // console.log('MongoDB connection closed.');
    // }
}


async function closeDatabase(client) {
    try {
        await client.close();
        console.log('MongoDB connection closed.');
    } catch (error) {
        console.error('Error closing MongoDB connection:', error.message);
    }
}

export { connectToDatabase, closeDatabase };
