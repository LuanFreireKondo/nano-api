const express = require('express')
const users = require('../../database/users.json')

const router = express.Router()

router.route('/users').get((req, res) => {
  res.status(201).json(users)
})

router.route('/users/:id').get((req, res) => {
  const id = Number(req.params.id)

  if (id) {
    const user = users.find(user => user.id === id)

    if (user) {
      res.status(201).json(user)
    }

    res.status(404).json({ message: 'user not found' })
  } else {
    res.status(404).json({ message: 'invalid user id' }) 
  }
})

router.route('/*').get((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

module.exports = router