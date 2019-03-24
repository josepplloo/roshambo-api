import { Router } from 'express'
import controllers from './game.controllers'

const router = Router()

// /api/game
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

export default router
