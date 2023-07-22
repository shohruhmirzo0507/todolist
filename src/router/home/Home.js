import React from 'react'
import { useSelector, useDispatch } from "react-redux"

// useSelector - qabul qilish
function Home() {
  const number = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Home: {number}</h2>
        <button onClick={()=> dispatch({type:"WORD", payload: "xoxlagan so'z"})}>change word</button>
    </div>
  )
}

export default Home