import { parse } from 'url'
import { MongoClient } from 'mongodb'

export async function connectToDatabase(uri) {
  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = client.db(parse(uri).pathname.substr(1))

  // Cache the database connection and return the connection
  return db
}
