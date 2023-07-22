import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './router/home/Home'
import About from './router/about/About'
import TodoList from './router/todo-list/TodoList'
import "./App.css"

function App() {
  return (
    <div className='App'>
      <h2>Redux - state management</h2>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/todo-list">Todo List</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About text={"hello world"}/>}/>
        <Route path='/todo-list' element={<TodoList/>}/>
      </Routes>
    </div>
  )
}

export default App