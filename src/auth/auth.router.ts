import { Router } from 'express'

import AuthController from './auth.controller'

const router = Router()

router.get('/', AuthController.index)

export default router
