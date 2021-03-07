import { Request, Response } from 'express'

const { NODE_ENV } = process.env

class AuthController {
  index (req: Request, res: Response) {
    return res
      .json({ hw: 'User controller 🌈 🍩 🍟' })
      .cookie('hw', 'hello world 🍀', {
        httpOnly: true,
        secure: NODE_ENV === 'PRODUCTION'
      })
      .status(200)
  }
}

export default new AuthController()
