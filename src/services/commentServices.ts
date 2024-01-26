import { CommentEntry, NonSensitiveCommentEntries, NewCommentEntry } from '../types'
import commentData from './comment.json'

const comments: CommentEntry[] = commentData

export const getEntries = (): CommentEntry[] => comments

export const findById = (id: number): NonSensitiveCommentEntries | undefined => {
  const entry = comments.find(c => c.id === id)
  return entry
}

export const getEntriesWithouthSensitiveInfo = (): NonSensitiveCommentEntries[] => {
  return comments.map(({ id, name, body, postId }) => {
    return {
      id,
      name,
      body,
      postId
    }
  })
}

export const addComment = (newCommentEntry: NewCommentEntry): CommentEntry => {
  const newComment = {
    id: Math.max(...comments.map(c => c.id)) + 1,
    ...newCommentEntry
  }

  comments.push(newComment)
  return newComment
}
