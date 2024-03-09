const express = require('express')
const { Group } = require('../models/db')
const { createGroupSchema } = require('../auth/schema/createGroup')
const router = express.Router()

router.post('/createGroup', async (req, res) => {
  console.log(req.body)
  const { success} = createGroupSchema.safeParse(req.body);
  console.log(createGroupSchema.safeParse(req.body))
  if (!success) {
    return res.status(400).json({
      error: "Invalid Details"
    })
  }

  try {
    const groupExists = await Group.findOne({
      name: req.body.name
    })

    if (groupExists) {
      return res.status(400).json({
        error: "Group already exists"
      })
    }

    const createGroup = await Group.create({
      name: req.body.name,
      description: req.body.description
    })

    res.status(200).json({
      message: "Group Create Successfully"
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "Internal Server Error"
    })
  }
})

router.get('/groups', async(req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json(groups)
  } catch {
    res.status(500).json({
      error: "Internal server error"
    })
  }
})

router.get('/groups/:groupId', async(req, res) => {
  const groupId = req.params.groupId;
  try {
    const classDetails = await Class.findById(groupId);
    if (!classDetails) {
      return res.status(404).json({
        error: "Error while fecthing the class details"
      })
    }
  } catch (err) {
    console.log("Error", err)
  }
})

module.exports = router