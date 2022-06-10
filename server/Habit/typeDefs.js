const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Habit {
    id: ID
    title: String
    icon: String
    streak: String
    totalComplete: String
    repeat: String
  }

  type Query {
    getAllHabits: [Habit]
    getHabit(id: ID): Habit
  }

  input HabitInput {
    id: ID
    title: String
    icon: String
    streak: String
    totalComplete: String
    repeat: String
  }

  type Mutation {
    createHabit(habit: HabitInput): Habit
    deleteHabit(id: ID): String
    updateHabit(id: ID, Habit: HabitInput): Habit
  }
`;

module.exports = typeDefs;
