import React from 'react'
import { useSelector } from 'react-redux'

function Info() {
  const todos = useSelector(s => s.todos)
  return (
    <div className='shadow info'>
        <h2>Lists count: {todos.length}</h2>
    </div>
  )
}

export default Info