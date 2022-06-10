const Habit = require('./Habit.model')

const resolvers = {
  Query: {
    getAllHabits: async () => {
      return await Habit.find()
    },
    getHabit: async(_parent, { id }, _context, _info) => {
      return await Habit.findById(id)
    }
  },
  Mutation: {
    createHabit: async (parent, args, context, info) => {
      const { title } = args.habit
      const habit = new Habit({title})
      await habit.save()
      return habit
    },
    deleteHabit: async(parent, args, context, info) => {
      const { id } = args
      await Habit.findByIdAndDelete(id)
      return "Habit delete successful"
    },
    updateHabit: async(parent, args, context, info) => {
      const { id } = args
      const { title } = args.habit;
      const updates = {}
      if(title !== undefined) {
        updates.title = title
      }
      const habit = await Habit.findByIdAndUpdate(id, updates, { new: true })
      return habit
    }
  }
}

module.exports = resolvers