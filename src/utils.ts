import { NewCommentEntry } from "./types";

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}

const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('Invalid name')
  }

  return nameFromRequest
}

const parseBody = (bodyFromRequest: any): string => {
  if (!isString(bodyFromRequest)) {
    throw new Error('Invalid body')
  }

  return bodyFromRequest
}

const parsePostId = (postIdFromRequest: any): number => {
  if (!isNumber(postIdFromRequest)) {
    throw new Error('Invalid post id')
  }

  return postIdFromRequest
}

const parseEmail = (emailFromRequest: any): string => {
  if (!isString(emailFromRequest)) {
    throw new Error('Invalid email')
  }
  return emailFromRequest
}

export const toNewCommentEntry = (object: any): NewCommentEntry => {
  const newComment: NewCommentEntry = {
    name: parseName(object.name),
    email: parseEmail(object.email),
    body: parseBody(object.body),
    postId: parsePostId(object.postId)
  }

  return newComment
}
