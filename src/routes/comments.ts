import express from 'express'
import * as commentServices from '../services/commentServices'
import { toNewCommentEntry } from '../utils'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(commentServices.getEntriesWithouthSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const comment = commentServices.findById(+req.params.id)

  return (comment !== null)
    ? res.send(comment)
    : res.send(404)
})

router.post('/', (req, res) => {
  try {
    const newCommentEntry = toNewCommentEntry(req.body)
    const addedCommentEntry = commentServices.addComment(newCommentEntry)
    res.json(addedCommentEntry)
  } catch (e) {
    res.status(400).send(e)
  }
})

export default router
