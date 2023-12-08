import { IQuestionDocument } from '@/interfaces/question.interface'
import { Schema, models, Model, model } from 'mongoose'

const questionSchema = new Schema<IQuestionDocument>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  views: { type: Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
  publishedAt: { type: Date, default: Date.now },
})

export const QuestionModel: Model<IQuestionDocument> =
  models.Question || model<IQuestionDocument>('Question', questionSchema)
