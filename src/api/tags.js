import { Router } from 'express'
import { connectToDatabase } from './services'

const router = Router()
router.get('/', (req, res, next) => {
  console.log(process.env.MONGODB_URI)
  connectToDatabase(process.env.MONGODB_URI)
    .then((db) => db.collection('Tags'))
    .catch((error) => console.log('Error finding collection Tags:', error))
    .then((collection) => collection.find({}).toArray())
    .catch((error) => console.log('Error finding object in collection:', error))
    .then((tags) => res.json(tags))
    .catch((error) => console.log('Error while responding:', error))
})

export default router
