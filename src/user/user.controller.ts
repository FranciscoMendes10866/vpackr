import { Request, Response } from 'express'

class UserController {
  index (req: Request, res: Response) {
    return res.json({ hw: 'User controller 🌈 🍩 🍟' })
  }
}

export default new UserController()
