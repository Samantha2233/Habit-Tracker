import React, { useState, useEffect } from 'react'
// import { getHabits } from '../api'
import HorizontalCalendar from '../calendars/HorizontalCalendar'
import TaskCard from '../TaskCard'
import { Box, Container } from '@chakra-ui/react'
import gql from "graphql-tag";
// import { gql } from 'apollo-server-express'
import { useQuery } from "@apollo/client";

const DayView = () => {
  
  let GET_HABITS = gql`
    query {
      getAllHabits {
        id
        title
      }
    }  
  `
  
  const [ habits, setHabits ] = useState()
  const { loading, data, error } = useQuery(GET_HABITS);

  console.log('data', data)
  console.log('error', error)

  // useEffect(() => {
  //   getHabits().then((data) => {
  //     setHabits(data)
  //   })
  // }, []);

  return (
    <Container>
      <HorizontalCalendar/>

      {/* List of Habits */}
      <Box mt='5'>
        {data?.getAllHabits.map((habit, idx) => {
          return (
            <div key={idx}>
              <TaskCard habit={habit} />
            </div>
          )
        })}
      </Box>

    </Container>
  )
}

export default DayView
