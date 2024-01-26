export interface CommentEntry {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type NonSensitiveCommentEntries = Omit<CommentEntry, 'email'>
export type NewCommentEntry = Omit<CommentEntry, 'id'>
