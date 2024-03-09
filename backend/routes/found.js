const express = require('express');
const router = express.Router()
const { createFoundSchema } = require('../auth/schema/createLost');
const { Found } = require('../models/db')


router.post('/foundForm', async(req, res) => {
  console.log(req.body);

  const { success } = createFoundSchema.safeParse(req.body);
  if(!success) {
    return res.status(400).json({
      error: "Invalid Details"
    })
  }

  try {
    const foundExits = await Found.findOne({
      name: req.body.contact
    })
    
    if (foundExits) {
      return res.status(400).json({
        error: "Found already exists"
      })
    }

    const createFound = await Found.create({
      name: req.body.name,
      location: req.body.location,
      description: req.body.description,
      contact: req.body.contact,
      date: req.body.date
    })

    res.status(200).json({
      message: "Found query created successfully"
    })

  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "Internal Server Error"
    })
  }
})

router.get('/foundForm', async(req, res) => {
  try {
    const foundQueries = await Found.find();
    res.status(200).json(foundQueries)

  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "Internal Server Error"
    })
  }
})

module.exports = router;