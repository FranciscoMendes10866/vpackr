import request from 'supertest'

import app from '../app'

const randomBytes = (length: number): string => {
  let len: number
  if (!length) {
    len = 8
  } else {
    len = length
  }
  const chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let str: string = ''
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return str
}

const username = randomBytes(9)
const email = `${randomBytes(12)}@gmail.com`
const password = randomBytes(24)

describe('User Tests', () => {
  it('Sign up', async () => {
    return await request(app).post('/api/users/sign_up')
      .send({
        username: username,
        email: email,
        password: password
      })
      .then((res) => {
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe('text/plain')
      })
  })
  it('Sign in', async () => {
    return await request(app).post('/api/users/sign_in')
      .send({
        email: email,
        password: password
      })
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.username).toBe(username)
      })
  })
})
