import controllers from '../game.controllers'
import { isFunction } from 'lodash'

describe('game controllers', () => {
  test('has crud controllers', () => {
    const crudMethods = ['getOne', 'getMany', 'createOne']

    crudMethods.forEach(name =>
      expect(isFunction(controllers[name])).toBe(true)
    )
  })
})
