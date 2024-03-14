const { default: mongoose } = require('mongoose');

const encodedPassword = encodeURIComponent("2004@Niket");

// Use the encoded password in the connection string
mongoose.connect(`mongodb+srv://workwithaniket18:${encodedPassword}@cluster0.fty46m3.mongodb.net/college`);

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