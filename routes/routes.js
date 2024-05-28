const express = require('express')
const router = express.Router()

//EMPLOYEES ROUTES
const Employee = require('../models/employee');

//POST
router.post('/employees', async (req, res) => {

  const { body: { firstName, lastName, email } } = req
  const data = new Employee({
    firstName: firstName,
    lastName: lastName,
    email: email
  })

  try {
    const savedData = await data.save()
    res.status(200).json(savedData)
  }
  catch (err) {
    res.status(400).json({ message: err.message })
  }
});

//GET ALL
router.get('/employees', async (req, res) => {
  try {
    const data = await Employee.find();
    res.status(200).json(data)
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
});

//GET BY ID
router.get('/employees/:id', async (req, res) => {
  try {
    const data = await Employee.findById(req.params.id);
    res.status(200).json(data)
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
});

//Update by ID
router.patch('/employees/:id', async (req, res) => {
  try {
    let id = req.params.id
    let newData = req.body
    let options = { new: true };

    const result = await Employee.findByIdAndUpdate(
      id, newData, options
    )
    res.send(result)
  }
  catch (err) {
    res.send(400).json({ message: err.message })
  }
});

//Delete by ID
router.delete('/employees/:id', async (req, res) => {
  try {
    let id = req.params.id
    await Employee.findByIdAndDelete(id)
    res.send(`Employee ${id} has been deleted...`)
  }
  catch (err) {
    send(400).json({ message: err.message })
  }
});

//ROLES ROUTES
const Role = require('../models/role');

//POST
router.post('/roles', async (req, res) => {

  const { body: { role } } = req
  const data = new Role({
    role: role
  })

  try {
    const savedData = await data.save()
    res.status(200).json(savedData)
  }
  catch (err) {
    res.status(400).json({ message: err.message })
  }
});

router.get('/roles', async (req, res) => {
  try {
    const roles = await Role.find()
    res.status(200).json(roles)
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router