import React, { useEffect } from 'react'
import {AiFillEdit} from "react-icons/ai"
import {FiTrash2} from "react-icons/fi"
import { useSelector, useDispatch } from 'react-redux'
import img from   "./image.svg"

function Content() {
  const todos = useSelector(s => s.todos)
  const dispatch = useDispatch()

useEffect(()=>{
if(todos.length){
  localStorage.setItem("todos", JSON.stringify(todos))
}



}, [todos])



  const removeTodo = (item)=>{
    if(window.confirm("Are you sure ?")){
      dispatch({type:"REMOVE_TODO", payload: item})
    }
  }
const handleDeleteAll = ()=>{
  if(window.confirm("Are You Sure")){
    dispatch({type : "DELETE_ALL"})
  }
}



  return (
    <div className='shadow content'>
      
      {
        todos.length === 0 ? <img style={{display:"block", margin:"auto"}} src={img} alt="" /> :
         <button onClick={handleDeleteAll} className='btn red'>Delete all</button>
      }
      {
        todos?.map((item) => <div key={item.id} className="todo">
          <div>
              <p>Name: <b>{item.name}</b> </p>
              <p>Age: <b>{item.age}</b> </p>
          </div>
          <div>
            {item.edit ? <span className='edit'>Edited</span> : <></>}
              <button onClick={()=> dispatch({type: "EDIT", payload: item})} style={{marginRight:"15px"}} className='btn blue'><AiFillEdit/></button>
              <button onClick={()=> removeTodo(item)} className='btn red'><FiTrash2/></button>
          </div>
      </div>)
      }
       
    </div>
  )
}

export default Content

// CRUD