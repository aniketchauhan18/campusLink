const express = require('express')
const router = express.Router()
const { MessReview } = require('../models/db')
const submittedReviewSchema  = require('../auth/schema/submittedReview')

router.post("/messReview", async(req, res) => {
  const { success } = submittedReviewSchema.safeParse(req.body);
  if(!success){
    return res.status(400).json({
      error: "Invalid Details"
    })
  }


  try {
    const reviewExists = await MessReview.findOne({
      description: req.body.description
    })

    if (reviewExists){
      return res.status(400).json({
        error: "Review already exists"
      })
    }

    const createReview = await MessReview.create({
      name: req.body.name,
      rollNo: req.body.rollNo,
      description: req.body.description,
      hostel: req.body.hostel
    })

    res.status(200).json({
      message: "Review created successfully"
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "Internal Server Error"
    })
  }
})


module.exports = router;