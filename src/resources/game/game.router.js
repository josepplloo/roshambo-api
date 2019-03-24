import { Router } from 'express'
import controllers from './game.controllers'

const router = Router()

// /api/game
router
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)

export default router
