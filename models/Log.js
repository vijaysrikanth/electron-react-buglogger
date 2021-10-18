const mongoose = require('mongoose')

const LogSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Log text is required'],
  },
  priority: {
    type: String,
    default: 'low',
    enum: ['low', 'moderate', 'high'],
  },
  status: {
    type: String,
    default: 'pass',
    enum: ['pass', 'completed'],
  },
  user: {
    type: String,
    trim: true,
    required: [true, 'User is required'],
  },
  created: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Log', LogSchema)