import { Document, Schema } from 'mongoose'

export interface IUserDocument extends Document {
  _id: string
  name: string
  email: string
  username: string
  password: string
  bio?: string
  picture: string
  location?: string
  portfolioWebsite?: string
  reputation?: number
  saved: Schema.Types.ObjectId[]
  joinedAt: Date
}
