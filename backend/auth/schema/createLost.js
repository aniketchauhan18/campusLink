const zod = require('zod');

const createLostSchema = zod.object({
  name: zod.string(),
  location: zod.string(),
  description: zod.string(),
  contact: zod.number(),
  date: zod.string()
})

const createFoundSchema = zod.object({
  name: zod.string(),
  location: zod.string(),
  description: zod.string(),
  contact: zod.number(),
  date: zod.string()
})
module.exports = {
  createLostSchema,
  createFoundSchema
}