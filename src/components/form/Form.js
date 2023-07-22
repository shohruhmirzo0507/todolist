import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Form() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const dispatch = useDispatch()
  const editData = useSelector(s => s.edit)
const todos = useSelector(s => s.todos)

useEffect(()=>{

  if(editData){
setName(editData.name)
setAge(editData.age)
  }
}, [editData])


  const createTodo = (event) => {
    event.preventDefault()
    let newTodo = {
      name,
      age: +age,
      edit: false,
      id: new Date().getTime()
    }
    if(editData){
let updateTodos = todos?.map((item)=> item.id === editData.id ? {...newTodo, id: editData.id, edit: true} : item)
dispatch ({type : "UPDATE_TODO", payload : updateTodos})
dispatch ({type : "CANCEL_EDIT"})
  }else{
    dispatch ({type : "ADD_TODO", payload : newTodo})

  }
   
    setName("")
    setAge("")
  }
  return (
    <form onSubmit={createTodo} className='shadow form'>
        <input required value={name} onChange={e => setName(e.target.value)} type="text" className='input' placeholder='name' />
        <input required value={age} onChange={e => setAge(e.target.value)} type="number" className='input' placeholder='age' />
        <button className='btn blue'>{editData ? "Save" : "Create List"}</button>
    </form>
  )
}
export default Form