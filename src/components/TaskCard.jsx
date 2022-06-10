import React from 'react'
// import { updateHabit } from '../api'
import { Flex, Checkbox, Text, useColorMode } from '@chakra-ui/react'

const TaskCard = ({ habit }) => {
  const { colorMode } = useColorMode()
  const { title, completed } = habit
  console.log('habit', habit)

  return (
    <Flex 
      bg='orange.100' 
      borderRadius='10'
      p='6' 
      mt='2' 
      mb='2' 
      // onClick={() => }
    >
      <Checkbox 
        pr={2} 
        size='lg'
        colorScheme='orange'
        borderColor='black'
        borderRadius='2'
        isChecked={completed}
        // onChange={() => updateHabit({...habit, completed: !habit.completed})}
      />
      <Text color={colorMode === 'dark' && 'black'}> {title} </Text>
      
    </Flex>
  )
}


export default TaskCard