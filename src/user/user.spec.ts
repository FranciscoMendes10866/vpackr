
import request from 'supertest'

import app from '../app'

describe('User Tests', () => {
  it('Does it run', async () => {
    return await request(app).get('/api/users')
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.hw).toBe('User controller 🌈 🍩 🍟')
      })
  })
})
