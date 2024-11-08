import React,{useContext} from 'react'
import { Global } from './GlobalContextProvider'


const ComD = () => {
    const data = useContext(Global)
  return (
    <>
    <h1>The student name is {data.course}</h1>
    </>
  )
}

export default ComD