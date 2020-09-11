import { Router } from 'express'
import { connectToDatabase, filterTags } from './services'

const router = Router()
router.get('/', (req, res, next) => {
  connectToDatabase(process.env.MONGODB_URI)
    .then((db) => db.collection('Projects'))
    .then((collection) => collection.find({}).toArray())
    .then((projects) => res.json(projects))
})

export default router
