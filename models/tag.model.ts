import { ITagDocument } from '@/interfaces/tag.model'
import { Schema, models, Model, model } from 'mongoose'

const tagSchema = new Schema<ITagDocument>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
})

export const TagModel: Model<ITagDocument> =
  models.Tag || model<ITagDocument>('Tag', tagSchema)
