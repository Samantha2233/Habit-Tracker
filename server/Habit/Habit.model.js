const mongoose = require('mongoose')

const habitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String
  },
  color: {
    type: String
  },
  repeat: {
    type: String
  },
  streak: {
    type: Number
  },
  totalCompleted: {
    type: Number
  },
  completed: {
    type: Boolean
  }
})

const Habit = mongoose.model('habit', habitSchema)
module.exports = Habit

// repeat: {'times per day'}
// repeat: {'times per week'}
// repeat: {'weekly'}
// repeat: {'monthly'}