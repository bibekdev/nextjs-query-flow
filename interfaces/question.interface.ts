import { Document, Schema } from 'mongoose'

export interface IQuestionDocument extends Document {
  title: string
  content: string
  tags: Schema.Types.ObjectId[]
  views: number
  upvotes: Schema.Types.ObjectId[]
  downvotes: Schema.Types.ObjectId[]
  author: Schema.Types.ObjectId
  answers: Schema.Types.ObjectId[]
  publishedAt: Date
}
