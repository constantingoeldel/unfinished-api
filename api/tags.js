import { Router } from 'express'
import { connectToDatabase } from './services'

const router = Router()
router.get('/', (req, res, next) => {
  connectToDatabase(process.env.MONGODB_URI)
    .then((db) => db.collection('Tags'))
    .then((collection) => collection.find({}).toArray())
    .then((tags) => res.json(tags))
})

export default router
