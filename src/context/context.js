import React, { createContext, useReducer } from 'react'
import moment from 'moment'


const Context = createContext()

let initState = {
  dateSelected: moment().format('MMDDYYYY')
}

const reducer = (state, action) => {
  let result = {...state}
  switch(action.type) {
    case 'set-date':
      result.dateSelected = action.payload
      break
    case 'set-habits': 
      result.habits = action.payload
      break
    default:
      throw new Error(`Unhandeled action type: ${action.type}`)
  }
  return result
}

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState)
  const value = {state, dispatch}
  return <Context.Provider value={value}>{children}</Context.Provider>
}

const useContext = () => {
  const context = React.useContext(Context)
  if(context === undefined) {
    throw new Error('useContext must be defined with a ContextProvider')
  } 
  return context
}


export {ContextProvider, useContext}