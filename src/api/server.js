import express from 'express'
import projects from './projects'
import tags from './tags'
import cors from 'cors'

const server = express()
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/api/projects', projects)
server.use('/api/tags', tags)
server.get('/', (req, res) => {
  res.send('This api is connected to the unfinished project')
})

export default server
