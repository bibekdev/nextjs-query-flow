import { IUserDocument } from '@/interfaces/user.interface'
import { Schema, model, Model, models } from 'mongoose'

const userSchema = new Schema<IUserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String, maxlength: 200 },
  picture: { type: String, default: '' },
  location: { type: String, default: '' },
  portfolioWebsite: { type: String, default: '' },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  joinedAt: { type: Date, default: Date.now },
})

export const UserModel: Model<IUserDocument> =
  models.User || model<IUserDocument>('User', userSchema)
