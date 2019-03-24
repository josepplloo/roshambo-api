import { Game } from '../game.model'
import mongoose from 'mongoose'

describe('Game model', () => {
  describe('schema', () => {
    test('name', () => {
      const name = Game.schema.obj.name
      expect(name).toEqual({
        type: String,
        required: true,
        trim: true,
        maxlength: 50
      })
    })

    test('due', () => {
      const due = Game.schema.obj.due
      expect(due).toEqual(Date)
    })
  })
})
