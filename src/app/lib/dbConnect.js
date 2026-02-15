import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

export const connect = async (collectionName) => {
  if (!db) {
    await client.connect();
    db = client.db(process.env.DB_NAME);
  }
  return db.collection(collectionName);
}