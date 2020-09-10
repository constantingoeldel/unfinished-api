import server from './api/server'

// const mongoDBUrl = process.env.MONGO_DB_URL
// setupMongoDBConnection(mongoDBUrl)

const port = process.env.PORT

server.listen(port, () => console.log(`SCAAPI listening at http://localhost:${port}`))
