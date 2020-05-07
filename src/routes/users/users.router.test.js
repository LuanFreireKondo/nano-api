const express = require('express')
const request = require('supertest')

const usersRouter = require('./users.router')

const app = express()
app.use('/', usersRouter)

describe('routes - users', () => {
  test('should return 201 status', async () => {
    const response = await request(app).get('/users')
    expect(response.status).toEqual(201)
  })

  test('should return 201 status', async () => {
    const response = await request(app).get('/users/1')
    expect(response.status).toEqual(201)
  })

  test('should return 404 status', async () => {
    const response = await request(app).get('/users/10')
    expect(response.status).toEqual(404)
  })

  test('should return "user not found" message', async () => {
    const response = await request(app).get('/users/80')
    expect(response.body.message).toEqual('user not found')
  })

  test('should return "invalid user id" message', async () => {
    const response = await request(app).get('/users/hello')
    expect(response.body.message).toEqual('invalid user id')
  })
})