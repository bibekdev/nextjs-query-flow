import { Document, Schema } from 'mongoose'

export interface ITagDocument extends Document {
  name: string
  description: string
  questions: Schema.Types.ObjectId[]
  followers: Schema.Types.ObjectId[]
  createdAt: Date
}
