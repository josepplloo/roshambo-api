import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema(
  {
    due: Date,
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    }
  },
  { timestamps: true }
)
export const Game = mongoose.model('game', gameSchema)
