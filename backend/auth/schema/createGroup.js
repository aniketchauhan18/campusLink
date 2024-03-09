const zod = require('zod')

const createGroupSchema = zod.object({
  name: zod.string(),
  description: zod.string().optional()
})

module.exports = {
  createGroupSchema
}