const zod = require('zod');

const submittedReviewSchema = zod.object({
  name: zod.string(),
  rollNo: zod.string(),
  description: zod.string(),
  hostel: zod.string()
});

module.exports = submittedReviewSchema