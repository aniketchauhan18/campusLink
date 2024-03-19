require('dotenv').config()
const { default: mongoose } = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);

const lostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  contact: {
    type: Number
  },
  date: {
    type: String
  }
})

const foundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  contact: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const messReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rollNo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  hostel: {
    type: String,
    required: true
  }
})

const Lost = mongoose.model('Lost', lostSchema);
const Found = mongoose.model('Found', foundSchema);
const MessReview = mongoose.model('MessReview', messReviewSchema);

module.exports= {
  Lost,
  Found,
  MessReview
}