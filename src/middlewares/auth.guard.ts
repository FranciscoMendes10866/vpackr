import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import TokenPayload from '@utils/token.dto'

const { JWT_SECRET_KEY } = process.env

const AuthGuard = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token
  if (!token) {
    return res.sendStatus(403)
  }
  try {
    const decoded = verify(token, JWT_SECRET_KEY)
    const { id } = decoded as TokenPayload
    req.tokenId = id
    return next()
  } catch {
    return res.sendStatus(403)
  }
}

export default AuthGuard
