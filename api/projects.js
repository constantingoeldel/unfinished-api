import { Router } from 'express'
import connectToDatabase from './services'

const router = Router()
router.get('/', (req, res, next) => {
  connectToDatabase(
    'mongodb+srv://Consti:Goe1409ldel@unfinisheddatabase.usat4.mongodb.net/Unfinished?retryWrites=true&w=majority'
  )
    .then((db) => db.collection('Projects'))
    .then((collection) => collection.find({}).toArray())
    .then((projects) => res.json(projects))
})

export default router
