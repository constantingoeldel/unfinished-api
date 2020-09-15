import server from './api/server'
require('dotenv').config()

const port = process.env.PORT || 4001
server.listen(port, () => console.log(`SCAAPI listening at http://localhost:${port}`))
