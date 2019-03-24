import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    due: Date,
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
)
gameSchema.index({ list: 1, name: 1 }, { unique: true })
export const Game = mongoose.model('game', gameSchema)
