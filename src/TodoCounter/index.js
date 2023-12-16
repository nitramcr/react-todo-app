import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext'

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext)

  if (completedTodos === 0 && totalTodos === 0) {
    return (
      <h1 className='TodoCounter'>
        You still do not have any pending <span>TODO </span>
      </h1>
    )
  } else {
    return (
      <h1 className='TodoCounter'>
        You have completed <span>{completedTodos}</span> of{' '}
        <span>{totalTodos}</span> TODOs
      </h1>
    )
  }
}

export { TodoCounter }
