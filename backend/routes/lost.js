const express = require('express');
const router = express.Router()
const { createLostSchema } = require('../auth/schema/createLost');
const { Lost } = require('../models/db')


router.post('/lostForm', async(req, res) => {
  console.log(req.body);

  const { success } = createLostSchema.safeParse(req.body);
  if(!success) {
    return res.status(400).json({
      error: "Invalid Details"
    })
  }

  try {
    const lostExits = await Lost.findOne({
      name: req.body.contact
    })
    
    if (lostExits) {
      return res.status(400).json({
        error: "Lost already exists"
      })
    }

    const createLost = await Lost.create({
      name: req.body.name,
      location: req.body.location,
      description: req.body.description,
      contact: req.body.contact,
      date: req.body.date
    })

    res.status(200).json({
      message: "Lost query created successfully"
    })

  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "Internal Server Error"
    })
  }
})

router.get('/lostForm', async(req, res) => {
  try {
    const lostQueries = await Lost.find();
    res.status(200).json(lostQueries)

  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "Internal Server Error"
    })
  }
})

module.exports = router;