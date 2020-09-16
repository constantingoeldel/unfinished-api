import server from './api/server'
require('dotenv').config()

const port = process.env.PORT || 4000
server.listen(port, () =>
  console.log(`SCAAPI listening at http://localhost:${port}`, process.env.MONGODB_URI)
)
