import { Router } from 'express'
import { connectToDatabase, filterTags } from './services'

const router = Router()
router.get('/', (req, res, next) => {
  connectToDatabase(process.env.MONGODB_URI)
    .then((db) => db.collection('Projects'))
    .catch((error) => console.log('Error finding collection Projects:', error))
    .then((collection) => collection.find({}).toArray())
    .catch((error) => console.log('Error finding object in collection:', error))
    .then((tags) => res.json(tags))
    .catch((error) => console.log('Error while responding:', error))
})

export default router
