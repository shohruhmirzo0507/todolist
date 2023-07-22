import React from 'react'
import { useDispatch, useSelector } from "react-redux"

// useDispatch - malumot jo'natish yoki o'zgartirish
function About({text}) {
  const dispatch = useDispatch()
  const str = useSelector( s => s.word )
  return (
    <div>
        <h2>About: {text}</h2>
        <h2>{str}</h2>
        <button onClick={()=> dispatch({type:"INC", payload: 1})}>inc 1</button>
        <button onClick={()=> dispatch({type:"INC", payload: 5})}>inc 5</button>
        <button onClick={()=> dispatch({type:"INC", payload: 10})}>inc 10</button>
        <button>dec</button>
        <button>reset</button>
    </div>
  )
}

export default About