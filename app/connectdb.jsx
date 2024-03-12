import { MongoClient, ServerApiVersion } from 'mongodb';

//Connect to db, then export db so other components can use it to fetch data
async function connectToDatabase() {
    const uri =
    'mongodb+srv://ethanjfoxy:443OoaEriC1mtWbT@ucr-cse-application-too.4nsb05q.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1,
    });

    try {
        // Connect to Database
        await client.connect();
        console.log('Connected to MongoDB uri!');
        const db = client.db("UCR_CSE_APP");

        // Check if the database exists
        const collections = await db.listCollections().toArray();
        const databaseExists = collections.length > 0;

        // Return Database
        if (databaseExists) { return db; }
        else { console.log('Database does not exist.'); }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}


async function closeDatabase() {
    const uri =
    'mongodb+srv://ethanjfoxy:443OoaEriC1mtWbT@ucr-cse-application-too.4nsb05q.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1,
    });

    try {
        await client.close();
        console.log('MongoDB connection closed.');
    } catch (error) {
        console.error('Error closing MongoDB connection:', error.message);
    }
}

export { connectToDatabase, closeDatabase };
