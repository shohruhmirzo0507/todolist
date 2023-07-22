import React from 'react'
import Info from '../../components/info/Info'
import Form from '../../components/form/Form'
import Content from '../../components/content/Content'

function TodoList() {
  return (
    <div className='container'>
        <Info/>
        <Form/>
        <Content/>
    </div>
  )
}

export default TodoList